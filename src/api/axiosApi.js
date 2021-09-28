import axios from "axios"

const BASE_URL = 'https://gentleman-api.herokuapp.com'

export const apiHttp = async (
        method,
        endpoint,
        data,
        options = {},
        loading = true
    )   => {
    const { token } = localStorage

    const defaultHeaders = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        session: `${token}`
    }

    if (!options.hasOwnProperty("headers")) options.headers = defaultHeaders

    let serviceResponse = {}
    method = method.toLowerCase()

    const servicePromise = axios({
        method,
        url: `${BASE_URL}${endpoint}`,
        data,
        ...options
        })

        try {
            // if (loading) {
            //     window.getApp.$emit("LOADING", true)
            // }

            const [materializedPromise] = await Promise.all([servicePromise])
            serviceResponse.data = { ...materializedPromise.data }
            serviceResponse.ok = 1
        } catch (error) {
            serviceResponse = buildErrorMessage(error)
        }
        return serviceResponse
    }

    function buildErrorMessage(error) {
        let errorResponse = {
            ok: 0,
            status: 0,
            message: {
                code: String,
                text: String
            }
        }
        if (typeof error.response === "undefined") {
            errorResponse.message.text = "No Autorizado"
        } else if (error.response.status === 400) {
            errorResponse.message.text = "message.apiError400"
        } else if (error.response.status === 401) {
            errorResponse.message.text = "message.apiError401"
        } else if (error.response.status === 404) {
            errorResponse.message.text = "message.apiError404"
        } else if (error.response.status === 500) {
            errorResponse.message.text = "message.apiError500"
        } else if (error.response.status === 405 || error.response.status === 406) {
            errorResponse.message.text = "message.apiError405_406"
        } else errorResponse.message.text = "message.apiErrorUndefined"
        errorResponse.ok = 0
        errorResponse.message.code = "E999"
        errorResponse.status = error.response.status
        return errorResponse
    }

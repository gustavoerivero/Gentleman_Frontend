import { apiHttp } from '../axiosApi.js'
import { listPath } from '../config/apiRoute.js'

export const createList = (body) => apiHttp('POST', `${listPath}/create`, body)
export const editList = (id, body) => apiHttp('PUT', `${listPath}/${id}`, body)
export const getAllLists = () => apiHttp('GET', `${listPath}/all`)
export const getListById = (id) => apiHttp('GET', `${listPath}/${id}`)
export const deleteList = (id) => apiHttp('DELETE', `${listPath}/${id}`)

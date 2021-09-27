import { apiHttp } from '../axiosApi.js'
import { bootcampPath } from '../config/apiRoute.js'

export const createBootcamp = (body) => apiHttp('POST', `${bootcampPath}/create`, body)
export const editBootcamp = (id, body) => apiHttp('PUT', `${bootcampPath}/${id}`, body)
export const getAllBootcamps = () => apiHttp('GET', `${bootcampPath}/all`)
export const getAllBootcampsByUser = (id) => apiHttp('GET', `${bootcampPath}/user/${id}`)
export const getBootcampById = (id) => apiHttp('GET', `${bootcampPath}/${id}`)
export const deleteBootcamp = (id) => apiHttp('DELETE', `${bootcampPath}/${id}`)

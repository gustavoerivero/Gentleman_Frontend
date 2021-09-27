import { apiHttp } from '../axiosApi.js'
import { userPath } from '../config/apiRoute.js'

export const login = (body) => apiHttp('POST', `${userPath}/login`, body)
export const createUser = (body) => apiHttp('POST', `${userPath}/create`, body)
export const editUser = (id, body) => apiHttp('PUT', `${userPath}/${id}`, body)
export const getAllUsers = () => apiHttp('GET', `${userPath}/all`)
export const getUserById = (id) => apiHttp('GET', `${userPath}/${id}`)
export const deleteUser = (id) => apiHttp('DELETE', `${userPath}/${id}`)

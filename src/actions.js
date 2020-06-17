import axiosLib from './lib/axios';

export const API_HEALTHCHECK = () => {
    axiosLib.get('/')
}

export const ROOMS = async () => {
    return axiosLib.get('/rooms')
}
export const ROOM_CREATE = async () => {
    return axiosLib.post('/rooms')
}
export const ROOM_FETCH = async (id) => {
    return axiosLib.get(`/rooms/${id}`)
}
export const ROOM_MESSAGE = async (data, id) => {
    return axiosLib.post(`/rooms/${id}`, data)
}
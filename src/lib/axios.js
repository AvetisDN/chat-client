import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://' + process.env.REACT_APP_API_URL
})

instance.interceptors.response.use( (response) => {
    if (response.data) return response.data
    return response
}, (error) => {
    return Promise.reject(error.response.data)
})

export default instance
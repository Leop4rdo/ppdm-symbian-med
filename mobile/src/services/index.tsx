import axios from "axios"

const api = axios.create({
    baseURL : 'http://192.168.0.113:8080/api/v1',
    timeout : 1000
})

export const buildQuery = (queryObj : Object) => {
    return Object.entries(queryObj).map(([key, val]) => `${key}=${val}`).join('&')
}

export default api
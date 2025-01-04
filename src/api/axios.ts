import axios, { type AxiosError, type AxiosResponse } from 'axios'

export const AXIOS_CLIENT = axios.create({    
    baseURL: 'http://192.168.1.21:5000/api/',  
    headers: {
        'Content-Type': 'application/json',
    },
})

AXIOS_CLIENT.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
        return Promise.reject(handleError(error))
    },
)

function handleError(error: AxiosError) {
    if (error.response) {
        // Server responded with a status code other than 2xx
        console.error('Error Response:', error.response)
        return {
            success: false,
            message: error.response.data?.message || 'An error occurred',
            status: error.response.status,
        }
    } else if (error.request) {
        // Request was made but no response received
        console.error('Error Request:', error.request)
        return {
            success: false,
            message: 'No response from server. Please try again.',
        }
    } else {
        // Something happened in setting up the request
        console.error('Error Message:', error.message)
        return {
            success: false,
            message: error.message || 'An unexpected error occurred',
        }
    }
}

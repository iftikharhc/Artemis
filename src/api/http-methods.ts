import { CONSTANTS } from '../utils'
import { AXIOS_CLIENT } from './axios'

export const hitNetworkWithGetMethod = async (
    ENDPOINT: string,
    params?: {},
) => {
    console.log('hitNetworkWithGetMethod API -- ' + ENDPOINT)
    try {
        const res = await AXIOS_CLIENT({
            method: CONSTANTS.HTTP_GET_METHOD,
            url: ENDPOINT,
            params,
            timeout: 15000,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
        return res.data
    } catch (error) {
        console.log('INSIDE ERROR')
        throw error
    }
}

export const hitNetworkWithPostMethod = async (ENDPOINT: string, data: {}) => {
    console.log('hitNetworkWithPostMethod API -- ' + ENDPOINT)
    try {
        const res = await AXIOS_CLIENT({
            method: CONSTANTS.HTTP_POST_METHOD,
            url: ENDPOINT,
            data,
            timeout: 15000,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
        return res.data
    } catch (error) {
        console.log('INSIDE ERROR')
        throw error
    }
}

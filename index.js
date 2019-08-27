import axios from 'axios'

const apicall = async (method, path, data) => {
    try {
        let pathWithEndpoint = path
        if (process && process.env) {
            if (process.env.BACKEND_ENDPOINT) {
                pathWithEndpoint = process.env.BACKEND_ENDPOINT + path
            } else if (process.env.REACT_APP_BACKEND_ENDPOINT) {
                pathWithEndpoint = process.env.REACT_APP_BACKEND_ENDPOINT + path
            }
        }
        const res = await axios[method.toLowerCase()](
            pathWithEndpoint,
            data
        )
        return res.data
    } catch (err) {
        throw err.response.data.error
    }
}

export default apicall

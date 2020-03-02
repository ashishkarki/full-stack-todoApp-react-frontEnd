import logger from "../../global-functions"
import Axios from "axios"

class AuthenticationService {

    registerSuccessfulLogin(username, password) {
        logger('registerSuccessfulLogin')
        sessionStorage.setItem('authenticatedUser', username)
        this.setupAxiosInterceptors()
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')

        if (user === null) return false
        return true
    }

    getLoggedInUsername() {
        const user = sessionStorage.getItem('authenticatedUser')

        if (user === null) return false
        return user
    }

    setupAxiosInterceptors() {
        const username = 'user'
        const password = 'password'
        const basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

        // Add a request interceptor
        Axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader
                }

                return config
            })
    }
}

export default new AuthenticationService()
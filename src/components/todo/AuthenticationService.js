import logger from "../../global-functions"
import Axios from "axios"

class AuthenticationService {

    executeBasicAuthService(username, password) {
        logger(`user: ${username}, pw: ${password}`)
        return Axios.get('http://localhost:8080/basicauth', {
            headers: {
                authorization: this.createBasicAuthToken(username, password)
            }
        })
    }

    registerSuccessfulLogin(username, password) {
        logger('registerSuccessfulLogin')
        sessionStorage.setItem('authenticatedUser', username)

        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
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

    setupAxiosInterceptors(basicAuthHeader) {
        // const username = 'user'
        // const password = 'password'
        // const basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

        // Add a request interceptor
        Axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader
                }

                return config
            })
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }
}

export default new AuthenticationService()
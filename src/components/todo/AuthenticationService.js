import logger from "../../global-functions"
import Axios from "axios"

import * as constants from './todo-constants'

class AuthenticationService {

    executeBasicAuthService(username, password) {
        logger(`user: ${username}, pw: ${password}`)
        return Axios.get(`${constants.LOCALHOST_API_URL}/basicauth`, {
            headers: {
                authorization: this.createBasicAuthToken(username, password)
            }
        })
    }

    executeJwtAuthService(username, password) {
        logger(`user: ${username}, pw: ${password}`)
        return Axios.post(`${constants.LOCALHOST_API_URL}/authenticate`, {
            username,
            password
        })
    }

    registerSuccessfulLogin(username, password) {
        logger('registerSuccessfulLogin')
        sessionStorage.setItem(constants.USER_SESSION_ATTRIBUTE_NAME, username)

        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    registerSuccessfulLoginForJwt(username, token) {
        logger('registerSuccessfulLoginForJwt')
        sessionStorage.setItem(constants.USER_SESSION_ATTRIBUTE_NAME, username)

        this.setupAxiosInterceptors(this.createJwtAuthToken(token))
    }

    logout() {
        sessionStorage.removeItem(constants.USER_SESSION_ATTRIBUTE_NAME)
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(constants.USER_SESSION_ATTRIBUTE_NAME)

        if (user === null) return false
        return true
    }

    getLoggedInUsername() {
        const user = sessionStorage.getItem(constants.USER_SESSION_ATTRIBUTE_NAME)

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

    createJwtAuthToken(token) {
        return 'Bearer ' + token
    }
}

export default new AuthenticationService()
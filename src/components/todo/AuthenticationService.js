import logger from "../../global-functions"

class AuthenticationService {

    registerSuccessfulLogin(username, password) {
        logger('registerSuccessfulLogin')
        sessionStorage.setItem('authenticatedUser', username)
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
}

export default new AuthenticationService()
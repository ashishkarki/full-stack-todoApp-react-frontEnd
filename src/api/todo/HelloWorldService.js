import logger from "../../global-functions"
import Axios from "axios"

class HelloWorldService {

    executeHelloWorldService() {
        logger("calling todo service from react app")
        return Axios.get('http://localhost:8080/hello-world')
    }

    executeHelloWorldServiceBeanPathVariable(name) {
        // const username = 'user'
        // const password = 'password'
        // const basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

        return Axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
            // , {
            //     headers: {
            //         authorization: basicAuthHeader
            //     }
            // }
        )
    }
}

export default new HelloWorldService()
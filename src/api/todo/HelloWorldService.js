import logger from "../../global-functions"
import Axios from "axios"

class HelloWorldService {

    executeHelloWorldService() {
        logger("calling todo service from react app")
        return Axios.get('http://localhost:8080/hello-world')
    }

    executeHelloWorldServiceBeanPathVariable(name) {
        return Axios.get(`http://localhost:8080/hello-world/path-variable/${name}`)
    }
}

export default new HelloWorldService()
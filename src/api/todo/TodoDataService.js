import Axios from "axios"

import * as constants from '../../components/todo/todo-constants'
import logger from "../../global-functions"

class TodoDataService {

    retrieveAllTodosForSpecifiedUser(username) {
        return Axios.get(`${constants.JPA_API_URL}/users/${username}/todos`)
    }

    retrieveTodoWithUsernameAndTodoId(username, todo_id) {
        return Axios.get(`${constants.JPA_API_URL}/users/${username}/todos/${todo_id}`)
    }

    deleteTodo(username, todo_id) {
        logger('TodoDataService: deleteTodo')
        return Axios.delete(`${constants.JPA_API_URL}/users/${username}/todos/${todo_id}`)
    }

    updateTodo(username, todo_id, todo) {
        logger('TodoDataService: updateTodo')
        return Axios.put(`${constants.JPA_API_URL}/users/${username}/todos/${todo_id}`, todo)
    }

    createTodo(username, todo) {
        logger('TodoDataService: createTodo')
        return Axios.post(`${constants.JPA_API_URL}/users/${username}/todos/`, todo)
    }
}

export default new TodoDataService()
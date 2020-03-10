import Axios from "axios"

import * as constants from '../../components/todo/todo-constants'

class TodoDataService {

    retrieveAllTodosForSpecifiedUser(username) {
        return Axios.get(`${constants.LOCALHOST_API_URL}/users/${username}/todos`)
    }

    retrieveTodoWithUsernameAndTodoId(username, todo_id) {
        return Axios.get(`${constants.LOCALHOST_API_URL}/users/${username}/todos/${todo_id}`)
    }

    deleteTodo(username, todo_id) {
        return Axios.delete(`${constants.LOCALHOST_API_URL}/users/${username}/todos/${todo_id}`)
    }

    updateTodo(username, todo_id, todo) {
        return Axios.put(`{$constants.LOCALHOST_API_URL}/users/${username}/todos/${todo_id}`, todo)
    }

    createTodo(username, todo) {
        return Axios.post(`${constants.LOCALHOST_API_URL}/users/${username}/todos/`, todo)
    }
}

export default new TodoDataService()
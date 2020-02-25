import Axios from "axios"

class TodoDataService {

    retrieveAllTodosForSpecifiedUser(username) {
        return Axios.get(`http://localhost:8080/users/${username}/todos`)
    }

    retrieveTodoWithUsernameAndTodoId(username, todo_id) {
        return Axios.get(`http://localhost:8080/users/${username}/todos/${todo_id}`)
    }

    deleteTodo(username, todo_id) {
        return Axios.delete(`http://localhost:8080/users/${username}/todos/${todo_id}`)
    }
}

export default new TodoDataService()
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

    updateTodo(username, todo_id, todo) {
        return Axios.put(`http://localhost:8080/users/${username}/todos/${todo_id}`, todo)
    }

    createTodo(username, todo) {
        return Axios.post(`http://localhost:8080/users/${username}/todos/`, todo)
    }
}

export default new TodoDataService()
import React, { Component } from "react";

import TodoDataService from '../../api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService.js'
import logger from "../../global-functions";
import './ListTodos.css'

class ListTodosComponent extends Component {

    constructor(props) {
        logger('constructor')
        super(props)
        this.state = {
            message: null,
            todos: []
        }

        this.deleteTodo = this.deleteTodo.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
    }

    // called right after constructor and good place to call apis
    componentDidMount() {
        logger('componentDidMount')
        this.refreshTodos()
    }

    refreshTodos() {
        const username = AuthenticationService.getLoggedInUsername()
        TodoDataService.retrieveAllTodosForSpecifiedUser(username)
            .then(response => {
                this.setState(
                    { todos: response.data }
                )
            })
    }

    deleteTodo(todo_id) {
        const username = AuthenticationService.getLoggedInUsername()
        logger(`user ${username} 's todo to be deleted: ${todo_id}`)
        TodoDataService.deleteTodo(username, todo_id)
            .then(response => {
                this.setState(
                    { message: `Deleted todo with id: ${todo_id}` }
                )
                this.refreshTodos()
            })
    }

    updateTodo(todo_id) {
        const username = AuthenticationService.getLoggedInUsername()
        logger(`updating ${username}'s todo with id: ${todo_id}`)
        this.props.history.push(`/todos/${todo_id}`)
    }

    render() {
        logger('render')
        return (
            <div>
                <h1>List of Todos</h1>

                {
                    this.state.message
                    &&
                    <div className="alert alert-success">
                        {this.state.message}
                    </div>
                }

                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>description</th>
                                <th>Target Date</th>
                                <th>Is Completed?</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    (todo, index) =>
                                        <tr key={index}>
                                            <td>{todo.id}</td>
                                            <td>{todo.description}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateTodo(todo.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTodo(todo.id)}>Delete</button></td>
                                        </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent
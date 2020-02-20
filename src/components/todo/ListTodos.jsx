import React, { Component } from "react";

class ListTodosComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [
                { id: 1, description: 'Start With React', done: false, targetDate: new Date() },
                { id: 2, description: 'Visit Nepal in 2020', done: false, targetDate: new Date()  },
                { id: 3, description: 'Learn Kung fu', done: false, targetDate: new Date()  }
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>List of Todos</h1>
                <hr />
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                            <th>Target Date</th>
                            <th>Is Completed?</th>
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
                                    </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListTodosComponent
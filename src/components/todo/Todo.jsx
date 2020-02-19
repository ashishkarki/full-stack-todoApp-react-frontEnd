import React, { Component } from 'react'

import './Todo.css'
import LoginComponent from './Login'

class TodoApp extends Component {

    render() {
        return (
            <div>
                <div className="title">
                    Ashish's Todo Application
                </div>
                <hr />

                <LoginComponent></LoginComponent>
            </div>
        )
    }
}

export default TodoApp
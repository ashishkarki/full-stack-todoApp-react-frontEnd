import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './Todo.css'
import LoginComponent from './Login'
import WelcomeComponent from './Welcome';

class TodoApp extends Component {

    render() {
        return (
            <div>
                <div className="title">
                    Ashish's Todo Application
                </div>
                <hr />

                <Router>
                    <>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome" component={WelcomeComponent} />
                    </>
                </Router>
                {/* <LoginComponent></LoginComponent>
                <WelcomeComponent></WelcomeComponent> */}
            </div>
        )
    }
}

export default TodoApp
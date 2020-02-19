import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <Route path="/welcome/:name" component={WelcomeComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                    </>
                </Router>
                {/* <LoginComponent></LoginComponent>
                <WelcomeComponent></WelcomeComponent> */}
            </div>
        )
    }
}

function ErrorComponent() {
    return <div>Error Occured. Please contact support.</div>
}

export default TodoApp
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './Todo.css'
import LoginComponent from './Login'
import WelcomeComponent from './Welcome';
import ListTodosComponent from './ListTodos'
import HeaderComponent from './Header'
import FooterComponent from './Footer'

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
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <Route path="/welcome/:name" component={WelcomeComponent} />
                            <Route path="/todos" component={ListTodosComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent />
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
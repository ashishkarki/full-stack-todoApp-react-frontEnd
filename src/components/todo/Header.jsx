import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router'
import AuthenticationService from './AuthenticationService.js'
import logger from "../../global-functions.js";

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
        logger('isUserLoggedIn:' + isUserLoggedIn)

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="http://www.github.com/ashishkarki" className="navbar-brand">Ashish's Todo List App</a>
                    </div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/ashish">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
            // <div>
            //     Header <hr />
            // </div>
        )
    }
}

export default withRouter(HeaderComponent)
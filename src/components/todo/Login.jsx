import React, { Component } from "react";

class LoginComponent extends Component {

    render() {
        return (
            <div>
                <input type="text" name="username" id="username" />
                <input type="password" name="password" id="password" />

                <button type="submit">Login</button>
            </div>
        )
    }
}

export default LoginComponent
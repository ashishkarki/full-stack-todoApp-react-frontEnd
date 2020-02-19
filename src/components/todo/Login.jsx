import React, { Component } from "react";

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'ashish',
            password: ''
        }

        // binding
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    render() {
        return (
            <div>
                <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange} />
                <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>

                <button type="submit">Login</button>
            </div>
        )
    }

    handleUsernameChange(event) {
        console.log('changed username: ' +event.target.value)
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange(event){
        this.setState({
            password: event.target.value
        })
    }
}

export default LoginComponent
import React, { Component } from "react";

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'ashish',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        // binding
        this.handleFieldChange = this.handleFieldChange.bind(this)
    }

    render() {
        return (
            <div>
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
                {/* // if left hand is a boolean and if true, returns the right hand statement
                //. otherwise if left hand is false, return false, meaning nothing will be displayed */}
                {this.state.hasLoginFailed && <div>Invalid credentials!!!</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                <input type="text" name="username" value={this.state.username} onChange={this.handleFieldChange} />
                <input type="password" name="password" value={this.state.password} onChange={this.handleFieldChange} />

                <button type="submit" onClick={this.loginClicked}>Login</button>
            </div>
        )
    }

    handleFieldChange(event) {
        // console.log('changed field: ' + event.target.name + ' to :' + event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginClicked = () => {
        // no binding needed for this function since using arrow syntax
        if (this.state.username === "ashish") {
            this.props.history.push(`/welcome/${this.state.username}`)
            this.setState({
                showSuccessMessage: true,
                hasLoginFailed: false
            })
        } else {
            this.setState({
                showSuccessMessage: false,
                hasLoginFailed: true
            })
        }
    }

}

// function ShowInvalidCredentials(props) {
//     if (props.hasLoginFailed) {
//         return <div>Invalid credentials!!!</div>
//     }

//     return null
// }

// function ShowLoginSuccessMessage(props) {
//     if (props.showSuccessMessage) {
//         return <div>Login Successful</div>
//     }

//     return null
// }

export default LoginComponent
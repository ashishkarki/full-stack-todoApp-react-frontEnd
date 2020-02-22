import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logger from '../../global-functions'
import HelloWorldService from '../../api/todo/HelloWorldService'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            welcomeMessage: ''
        }

        this.getServerMessage = this.getServerMessage.bind(this)
    }

    render() {
        return (
            <>
                <h1>Welcome, {this.props.match.params.name}</h1>
                <div className="container">
                    You can manage your todos <Link to="/todos">here</Link>
                </div>
                <div className="container">
                    Click here to get message from Server:
                    <button onClick={this.getServerMessage} className="btn btn-sm btn-success">Get Server's message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        )
    }

    getServerMessage() {
        // HelloWorldService.executeHelloWorldService()
        //     .then(response => this.handleSuccessResponse(response))

        HelloWorldService.executeHelloWorldServiceBeanPathVariable(this.props.match.params.name)
            .then(response => this.handleSuccessResponse(response))
            .catch(error => this.handleError(error))
    }

    handleSuccessResponse = (response) => {
        this.setState({
            welcomeMessage: response.data.message
        })
    }

    handleError = (error) => {
        logger(error.response.data.message)
        this.setState({
            welcomeMessage: error.response.data.message
        })
    }
}

export default WelcomeComponent
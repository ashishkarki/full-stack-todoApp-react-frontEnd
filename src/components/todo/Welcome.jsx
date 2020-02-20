import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class WelcomeComponent extends Component {

    render() {
        return (
            <div>
                Hello from Welcome Component, user:
                {this.props.match.params.name} <br/>
                You can manage your todos <Link to="/todos">here</Link>
            </div>
        )
    }
}

export default WelcomeComponent
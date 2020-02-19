import React, { Component } from "react";

class WelcomeComponent extends Component {

    render() {
        return (
            <div>
                Hello from Welcome Component, user:
                {this.props.match.params.name}
            </div>
        )
    }
}

export default WelcomeComponent
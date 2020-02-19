import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CounterButton extends Component {

    render = () => {
        return (
            <div className="counter">
                <button
                    className="button-style"
                    onClick={this.increment}>
                    +{this.props.by}
                </button>
            </div>
        )
    }

    increment = () => {
        this.props.incrementMethod(this.props.by)
    }
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default CounterButton
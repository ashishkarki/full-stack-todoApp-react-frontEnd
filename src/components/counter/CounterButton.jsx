import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CounterButton extends Component {

    // only using constructor to bind this for decrement
    // since, intetionally decrement isn't a arrow function
    // constructor() {
    //     // must call super before using this in constructor
    //     super()

    //     this.decrement = this.decrement.bind(this)
    // }

    render = () => {
        return (
            <div className="counter">
                <button
                    className="button-style"
                    onClick={() => this.props.incrementMethod(this.props.by)}>
                    +{this.props.by}
                </button>

                <button
                    className="button-style"
                    onClick={() => this.props.decrementMethod(this.props.by)}>
                    -{this.props.by}
                </button>
            </div>
        )
    }

    // increment = () => {
    //     this.props.incrementMethod(this.props.by)
    // }

    // decrement() {
    //     this.props.decrementMethod(this.props.by)
    // }
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default CounterButton
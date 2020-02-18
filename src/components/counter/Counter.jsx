import React, { Component } from 'react'

import './Counter.css'

class Counter extends Component {
    // state

    // define the initial state within a constructor
    constructor() {
        super(); // in JS, have to call super before using this
        this.state = {
            counter: 0
        }

        // bind the 'this' so increment can use it
        this.increment = this.increment.bind(this)
    }

    // end of state

    render() {
        return (
            <div className="counter">
                <button
                    className="button-style"
                    onClick={this.increment}>
                    +1
            </button>
                <span className="count">
                    {this.state.counter}
                </span>
            </div>
        )
    }

    increment() {
        // console.log("from increment")
        this.setState({
            counter: this.state.counter + 1
        })
    }
}



export default Counter
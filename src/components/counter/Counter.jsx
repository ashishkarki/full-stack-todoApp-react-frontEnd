import React, { Component } from 'react'

import './Counter.css'
import CounterButton from './CounterButton'

class Counter extends Component {
    // state
    // define the initial state within a constructor
    constructor() {
        super(); // in JS, have to call super before using this
        this.state = {
            counter: 0
        }

        // bind the 'this' so increment can use it
        // this.increment = this.increment.bind(this) // not needed with arrow function
    }

    // end of state

    render() {
        return (
            <div className="counter">
                <CounterButton by={1} incrementMethod={this.increment}></CounterButton>
                <CounterButton by={5} incrementMethod={this.increment}></CounterButton>
                <CounterButton by={10} incrementMethod={this.increment}></CounterButton>

                <span className="count"
                    style={{ fontSize: "60px" }}
                >
                    {this.state.counter}
                </span>
            </div>
        )
    }

    increment = (by) => {
        console.log(`increment in parent from child - ${by}`)
        this.setState(
            () => { counter: this.state.counter + by }
        )
    }
}

export default Counter
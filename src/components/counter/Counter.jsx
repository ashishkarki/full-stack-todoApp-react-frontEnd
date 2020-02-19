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
                <CounterButton by={1}
                    incrementMethod={this.increment}
                    decrementMethod={this.decrement} />
                <CounterButton by={5}
                    incrementMethod={this.increment}
                    decrementMethod={this.decrement} />
                <CounterButton by={10}
                    incrementMethod={this.increment}
                    decrementMethod={this.decrement} />

                <span className="count"
                    style={{ fontSize: "60px" }}
                >
                    {this.state.counter}
                </span>

                <div>
                    <button
                        type="reset"
                        style={{ backgroundColor: "red", padding: "15px", fontSize: "30px" }}
                        onClick={this.reset}>
                        Reset
                    </button>
                </div>
            </div>
        )
    }

    increment = (by) => {
        console.log(`increment in parent from child - ${by}`)
        this.setState(
            (prevState) => {
                return { counter: prevState.counter + by }
            }
        )
    }

    decrement = (by) => {
        console.log(`decrement in parent from child - ${by}`)
        this.setState(
            (prevState) => {
                return { counter: prevState.counter - by }
            }
        )
    }

    reset = () => {
        this.setState(
            () => {
                return { counter: 0 }
            }
        )
    }
}

export default Counter
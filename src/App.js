import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css'
import TodoApp from './components/todo/Todo'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter></Counter> */}

        <TodoApp></TodoApp>
      </div>
    );
  }
}

export default App;

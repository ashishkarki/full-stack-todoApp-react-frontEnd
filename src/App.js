import React, { Component } from 'react';
import './App.css';
import Counter from './components/counter/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        My ToDo app

        {/* <FirstComponent></FirstComponent>
        <OneFunctionComponent></OneFunctionComponent> */}

        <Counter></Counter>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import FirstComponent from './components/samples/FirstComponent';
import OneFunctionComponent from './components/samples/OneFunctionComponent';
import Counter from './components/counter/Counter'
import './App.css';
 
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

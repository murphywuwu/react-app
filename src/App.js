import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './components/welcome'; // props
import Clock from './components/clock'; // state
import Toggle from './components/toggle'; // event
import LoginControl from './components/LoggingControl/LoginControl'; // conditional redering
import WarningBanner from './components/warningBanner';
import NumberList from './components/numberList'; // lists and keys
import Blog from './components/blog';
import NameForm from './components/nameForm'; // Forms
import FlavorForm from './components/flavorForm';
import Calculator from './components/Calculator/Calculator';

const posts = [
  {
    id: 1,
    title: 'Hello World',
    content: 'Welcome to learning React!'
  },
  {
    id:2,
    title: 'Installation',
    content: 'You can install React from npm.'
  }
]

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Welcome name='Sara'/>
        <Clock/>
        <Toggle/>
        <LoginControl/>
        <WarningBanner/>
        <NumberList numbers={[1,2,3,4,5]}/>
        <Blog posts={posts}/>
        <NameForm/>
        <FlavorForm/>
        <Calculator/>
      </div>
    );
  }
}

export default App;

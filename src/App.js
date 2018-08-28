import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// import Welcome from './components/welcome'; // props
// import CustomTextInput from './components/customTextInput'; // ref

// import Container from './components/05 Customize/Handles and Previews/Container';
// import Container from './components/05 Customize/Drop Effects/Container';
// import Container from './components/Dustbin/Single Target/Container';
// import Card from './components/Card';
// import Board from './components/Chess/Board';



// import Clock from './components/clock'; // state
// import Toggle from './components/toggle'; // event
// import LoginControl from './components/LoggingControl/LoginControl'; // conditional redering
// import WarningBanner from './components/warningBanner';
// import NumberList from './components/numberList'; // lists and keys
// import Blog from './components/blog';
// import NameForm from './components/nameForm'; // Forms
// import FlavorForm from './components/flavorForm';
// import Calculator from './components/Calculator/Calculator';

// const posts = [
//   {
//     id: 1,
//     title: 'Hello World',
//     content: 'Welcome to learning React!'
//   },
//   {
//     id:2,
//     title: 'Installation',
//     content: 'You can install React from npm.'
//   }
// ]

class App extends Component {
  constructor() {
    super()

    this.state = {
      counter: Promise.resolve(0),
      num: 0,
      name: 'World',
    }

    this.will_render_time = 0;
    this.did_render_time = 0;
  }
  componentWillMount() {
    this.state.counter.then(val => {
      console.log('componentWillMount: ', val)
    })
  }
  componentDidMount() {
    
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1)
      }, 10000)
    })
    
    // this.setState({
    //   counter: p
    // })
    // console.log('counter', this.state.counter)
  
    // this.setState((prevState, props) => {
    //   console.log('counter: ', prevState.counter)
    // })
    // this.setState({
    //   counter: 2
    // })
    // this.setState((prevState, props) => {
    //   console.log('counter: ', prevState.counter)
    // })

    this.state.counter.then(val => {
      console.log('componentDidMount: ', val)
    })
  }
  componentDidUpdate(prevProps, prevState) {
    this.did_render_time++;

    prevState.counter.then(value => {
      console.log('componentDidUpdate prevState: ', value, ' ', 'render_time: ', this.did_render_time)
    })

    this.state.counter.then(value => {
      console.log('componentDidUpdate state: ', value, ' ', 'render_time: ', this.did_render_time)
    }) 
  }
  recreaseNum() {
    let { num } = this.state;
    num++;
    this.setState({
      num: num
    })
  }
  changeName() {
    this.setState({
      name: 'xiaomiaomiao'
    })
  }
  componentWillUpdate(nextProps, nextState) {
    this.will_render_time++;

    nextState.counter.then((value) => {
      console.log('componentWillUpdate nextState: ', value, ' ', 'render_time', this.will_render_time)
    })
    this.state.counter.then((value) => {
      console.log('componentWillUpdate state:', value, ' ', 'render_time', this.will_render_time)
    })
  }
  render() {
    const { counter, num, name } = this.state;

    counter.then((value) => {
      console.log('render: ', value)
    })

    return (
      <div className="App">
        {`counter: ${counter}`}

        <button onClick={this.changeName.bind(this)}>Change name</button>
        {/* <Welcome name={name}/> */}
        
        <button onClick={this.recreaseNum.bind(this)}>Add Num</button>
        <dir>{num}</dir>
        {/* <CustomTextInput/> */}
        {/* <Container /> */}
      </div>
    );
  }
}


export default App;

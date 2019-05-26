import React from 'react'
import { Provider } from 'react-dnd/lib/DragDropContext';


class App extends React.Component {
  render() {
    // 每次Provider re-render，所有的consumers都会re-render, 因为每次都会为value创建一个新的object
    return (
      <Provider value={{ something: 'something' }}>
        <Toolbar/>
      </Provider>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { something: 'something' }
    }
  }
  render() {
    return (
      // 要解决此问题，可以将valu提升到父级state
      <Provider value={this.state.value}>
        <Toolbar/>
      </Provider>
    )
  }
}
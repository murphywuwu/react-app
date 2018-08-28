import React, { Component } from 'React';

const MyContainer = (WrappedComponent) => {
  
  class Provider extends Component {
    constructor(props) {
      super(props);

      this.state = {
        name: ''
      }

      this.onNameChange = this.onNameChange.bind(this);
    }
    onNameChange(ev) {
      this.setState({
        name: ev.target.value,
      })
    }
    render() {
      const newProps = {
        name: {
          value: this.state.name,
          onChange: this.onNameChange,
        }
      }

      return <WrappedComponent {...this.props} {...newProps}/>
    }
  }

  return Provider;
}

class MyComponent extends Component {
  render() {
    return <input type="text" name="name" {...this.props.name}/>
  }
}

export default MyContainer(MyComponent);



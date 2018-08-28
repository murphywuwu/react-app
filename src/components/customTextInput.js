import React from 'react';

// Refs provide a way to access DOM nodes or ReactElements created in the render method

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;
    
    // React will call the ref callback with the DOM element when the components mounts, and call it with null when it unmounts.
    // Refs guranteed to be up-to-date before componentDidMount or ComponentDidUpdate fires.
    this.setTextInputRef = ele => {
      this.textInput = ele
    }
  }
  focusTextInput() {
    if (this.textInput) this.textInput.focus();
  }
  componentDidMount() {
    this.focusTextInput.call(this);
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.setTextInputRef}/>
        <input type="text" ref={this.props.inputRef}/>
        <input type="button" value="Focus the text input" onClick={this.focusTextInput.bind(this)}/>
      </div>
    );
  }
}

class Parent extends React.Component {
  render() {
    return (
      <CustomTextInput inputRef={el => this.inputElement = el}/>
    )
  }
}

export default Parent;
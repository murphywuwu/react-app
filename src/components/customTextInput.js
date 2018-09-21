import React from 'react';

// Refs provide a way to access DOM nodes or ReactElements created in the render method

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'miaomiao',
    }

    this.textInput = null;
    this.render_time = 0;
    
    // React will call the ref callback with the DOM element when the components mounts, and call it with null when it unmounts.
    // Refs guranteed to be up-to-date before componentDidMount or ComponentDidUpdate fires.
    this.setTextInputRef = ele => {
      this.textInput = ele
    }
  }
  componentWillMount() {
    console.log('render_time', this.render_time)
    this.setTextInputRef = ele => {
      console.log('componentWillMount ele', ele)
      this.textInput = ele;
    }
  }
  componentWillUpdate() {
    this.setTextInputRef = ele => {
      console.log('render_time',this.render_time)
      console.log('componentWillUpdate ele', ele)
      this.textInput = ele;
    }
  }
  focusTextInput() {
    if (this.textInput) this.textInput.focus();
    // this.setState({
    //   value: 'gougou'
    // })
  }
  componentDidMount() {
    this.focusTextInput.call(this);
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    this.render_time++;

    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} ref={this.setTextInputRef}/>
        <input type="file" ref={this.props.inputRef}/>
        <input type="button" value="Focus the text input" onClick={this.focusTextInput.bind(this)}/>
      </div>
    );
  }
}

class Parent extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <CustomTextInput inputRef={el => {this.inputElement = el;console.log('el', el)}}/>
    )
  }
}

export default Parent;
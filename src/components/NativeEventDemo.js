import React, { Component } from 'react';

class NativeEventDemo extends Component {
  componentDidMount() {
    // 在React中使用DOM原生事件时，一定要在组件卸载时手动移除，否则很可能出现内存泄漏的问题。而使用合成事件系统时则不需要，因为React内部已经帮你妥善地处理了
    this.refs.button.addEventListener('click', e => {
      this.handleClick(e)
    })
  }
  handleClick(e) {
    console.log(e)
  }
  render() {
    return <button ref="button">Test</button>
  }
}

export default NativeEventDemo
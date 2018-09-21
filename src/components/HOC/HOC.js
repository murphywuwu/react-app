import React, { Component } from 'React';

// 高阶组件类似于高阶函数，它接受React组件作为输入，输出一个新的React组件
// 也就是说，当React组件被包裹时，高阶组件会返回一个增强的React组件
// 高阶组件可以将原组件抽象为展示型组件，分离内部状态

// 属性代理
const MyContainer = (WrappedComponent) => {
  class Provider extends Component {
    proc(WrappedComponentInstance) {
      WrappedComponentInstance.method();
    }
    render() {
      const newProps = {
        text: nextText,
      }
      const props = Object.assign({}, this.props, {
        ref: this.proc.bind(this), // 通过ref使用引用
      })


      return <WrappedComponent {...props} {...newProps}/>
    }
  }
}


// 反向继承
const MyContainer = (WrappedComponent) => 
  class extends WrappedComponent {
    render() {
      // 渲染劫持
      if (this.props.loggedIn) {
        return super.render()
      }
      else {
        return null
      }
    }
  }

const MyContainer = (WrappedComponent) => 
  class extends WrappedComponent {
    render() {
      const elementsTree = super.render();
      let newProps = {};

      if (elementsTree && elementsTree.type === 'input') {
        newProps = {value: 'may the force be with you'}
      }
      const props = Object.assign({}, elementsTree.props, newProps)
      const newElementsTree = React.cloneElement(elementsTree, props, elementsTree.props.children)

      return newElementsTree
    }
  }

// 高阶组件参数
import React, { Component } from 'React';
function HOCFactoryFactory(...params) {
  // 可以做些改变params的事
  return function HOCFactory(WrappedComponent) {
    return class HOC extends Component {
      render() {
        return <WrappedComponent {...this.props}/>
      }
    }
  }
}
HOCFactoryFactory(params)(WrappedComponent)
@HOCFactoryFactory(params)
class WrappedComponent extends React.Component {}



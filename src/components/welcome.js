import React from 'react'

class Welcome extends React.PureComponent {
    constructor () {
        super();

        this.state = {
            greeting: 'hello'
        }
        this.render_time=0;
    }
    componentWillReceiveProps ( nextProps ) {
      // https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops
      // Note that if a parent component causes your component to re-render, this method will be called even if props have not changed. Make sure to compare the current and next values if you only want to handle changes.
      // React doesn’t call UNSAFE_componentWillReceiveProps() with initial props during mounting. It only calls this method if some of component’s props may update. Calling this.setState() generally doesn’t trigger UNSAFE_componentWillReceiveProps().
      console.log('nextProps', nextProps);
    }
    changeGreeting() {
      this.setState({
        greeting: 'wow'
      })
    }
    componentDidMount () {
      // const name = this.props.name;

      // 问题:当父组件的state或者props改变时，是否会引起子组件的改变
      // 子组件的componentDidMount只会在组件渲染第一次调用

      // React.Compoent
      // 父组件的state或props改变时，子组件的componentWillReceiveProps会被调用, 并引起子组件的re-render,

      // React.PureComponent
      // https://reactjs.org/docs/react-api.html#reactpurecomponent
      // React.PureComponent is similar to React.Component. The difference between them is that React.Component doesn’t implement shouldComponentUpdate(), but React.PureComponent implements it with a shallow prop and state comparison.
      // If your React component’s render() function renders the same result given the same props and state, you can use React.PureComponent for a performance boost in some cases.

      console.log('trigger welcome componentDidMount');
      // this.setState({
      //   greeting: 'wow'
      // })
    }
    render () {
        this.render_time++;

        console.log('welcome rendering:', this.render_time);
        // console.log(this);
        // console.log(this.props);
        return (
          <div>
            <button onClick={this.changeGreeting.bind(this)}>Change greeting</button>
            <h1> {`${this.state.greeting} ${this.props.name}`}</h1>
          </div>
      )
    }
}
export default Welcome


/*
 * 先定义两个组件，HelloComponent0/HelloComponent1
 */

class HelloComponent0 extends React.Component{

  /*
   * 并且在他们的生命周期 hook 上打log
   * 这里只实现了 componentDidMount() 和 componentWillUnmount()
   * 其他 hook 见 https://facebook.github.io/react/docs/component-specs.html
   */
  componentDidMount(){
    // props 是父组件传入的参数
    this.props.log('HelloComponent0 componentDidMount()');
  }
  componentWillUnmount (){
    this.props.log('HelloComponent0 componentWillUnmount()');
  }
  render(){
    // 一个简单的 div, 和它的文字内容
    return (
      <div className="hello-component hello-component-0">
        this.state.i % 3 === 0 is true
      </div>
    );
  }
}

// 复制上面的代码, 改一点文案 lol
class HelloComponent1 extends React.Component{
  componentDidMount(){
    this.props.log('HelloComponent1 componentDidMount()');
  }
  componentWillUnmount (){
    this.props.log('HelloComponent1 componentWillUnmount()');
  }
  render(){
    return (
      <div className="hello-component hello-component-1">
        this.state.i % 3 === 0 is false
      </div>
    );
  }
}

/*
 * 再定义父组件 HelloWorld
 */

class HelloWorld extends React.Component{

  // 注意这里的 state, 表示 react 组件自己的状态
  constructor () {
    super();

    this.state = {
      i: 0,
      logs: []
    }
  }

  // 用户点击 button 时的回调，使 state.i 自增
  onButtonClick = ()=>{

    this.state.i += 1;

    this.log('click, i:' + this.state.i);

    /*
     * 修改了状态，调用 .setState() 触发 render()
     * 注意：这里是一个代码上简化的做法，实际上关于
     *       .setState()/Immutable/shouldComponentUpdate()/
     *       render() 他们之间的关系，请查看文档
     */
    this.setState({
      i: this.state.i
    });
  };

  // 打log
  componentDidMount(){
    this.log('app mounted, i:' + this.state.i)
  }

  render(){

    return (
      <div className="helloworld">

        {/* 一个 button 用于点击*/}
        <button
          onClick={this.onButtonClick}
          >
            click me
        </button>

        {/* 根据 this.state.i % 3 === 0 的值判断
          * 加载 HelloComponent0 或 HelloComponent1 */}
        {
          this.state.i % 3 === 0 ? 
            <HelloComponent0
                log={this.log}
              /> :
            <HelloComponent1
                log={this.log}
              />
        }

        {/* 把日志放在容器里边 */}
        <div>logs:</div>
        {this.state.logs.map(log => <p>{log}</p>)}
      </div>
    )
  }

  // 日志函数
  log = (text)=>{
    this._createLog(text);
  };

  // 日期格式化
  _date(){
    return Date().replace(/^.*?(\d+:\d+:\d+).*?$/, '$1');
  }

  // 这里又用到 state 了，每次 _createLog() 被调用时，增加一条记录
  _createLog(text){
    this.state.logs.push(this._date() + ' > ' + text);
    this.setState({
      logs: this.state.logs
    });
  }
}

export default HelloWorld;

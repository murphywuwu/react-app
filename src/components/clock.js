import React from 'react'

class Clock extends React.Component {
    // will前缀:表示在事情发生之前触发
    // did前缀:表示在事情发送之后触发
    // Mounting:component创建并插入dom时触发
    constructor (props) { // 初始化component state
        super(props);
        console.log(new Date());
        this.state = { date: new Date() }; // 挂载组件的私有数据,可设置
    }
    componentWillMount () { // 在render()触发前触发
        console.log(new Date());
        this.setState({
            date: new Date()
        })
    }
    // componentDidMount () { //component output has been rendered to the DOM
    //     this.timerID = setInterval(() => {
    //         this.tick();
    //     }, 1000);
    // }
    render () {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is { this.state.date.toLocaleTimeString() }.</h2>
            </div>
        );
    }

    // componentWillUnmount () {
    //     clearInterval(this.timerID);
    // }

    // Update:props或者sate数据更新时触发
    componentWillReceiveProps () {

    }
    shouldComponentUpdate () {

    }
    componentWillUpdate () {

    }
    componentDidUpdate () {

    }

    componentWillUnmount () { // removed from the DOM
        // clearInterval(this.timerID);        
    }
    
    tick () {
        // 改变数据
        this.setState({
            date: new Date()
        });
        // 异步
        // this.setState((prevState, props) => ({
        //     counter: prevState.counter + props.increment
        // }))
    }

}

export default Clock;
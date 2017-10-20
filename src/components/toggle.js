import React from 'react'

class Toggle extends React.Component {
    constructor ( props ) {
        super(props);
        this.state = { isToggleOn: true };

        // This binging is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render () {
        return (
            // 事件:驼峰式命名，不能通过return false来阻止默认行为的发生
            <button onClick={this.handleClick}>
              {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle;
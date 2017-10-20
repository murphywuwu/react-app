import React from 'react'

function WarningBanner ( props ) {
    if ( !props.warn ) {
        return null; // return null from a component's render method does not affect the firing of the component's lifecycle methods. 
    }
    
    return (
        <div className='warning'>
            Warning!
        </div>
    );
}

class Page extends React.Component {
    constructor ( props ) {
        super(props);

        this.state = { showWarning: true }
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick () {
        this.setState(preState => ({
            showWarning: !preState.showWarning
        }))
    }
    render () {
        console.log('render firing');
        return (
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                  {this.state.showWarning ? 'Hide' : 'Show' }
                </button>
            </div>
        );
    }
}

export default Page;
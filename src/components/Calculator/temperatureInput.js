import React from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

class TemperatureInput extends React.Component {
    constructor ( props ) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = { temparature: '' };
    }
    handleChange ( e ) {
        this.setState({
            temparature: e.target.value
        });
    }
    render () {
        const temparature = this.props.temparature;
        const scale = this.props.scale;

        return (
            <fieldset>
                <legend>Enter temparature in {scaleNames[scale]}:</legend>
                <input value={temparature} onChange={this.handleChange}/>
            </fieldset>
        )
    }
}
export default TemperatureInput;
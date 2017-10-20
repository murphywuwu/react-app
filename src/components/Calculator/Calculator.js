import React from 'react'
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './temperatureInput'

class Calculator extends React.Component {
    constructor ( props ) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.state = { temperature: '' };
    }

    handleChange ( e ) {
        this.props.onTemperatureChange(e.target.value);
    }

    render () {
        const temperature = this.state.temperature;

        return (
            <div>
                <TemperatureInput scale='c' temperature={temperature}/>
                <TemperatureInput scale='f' temperature={temperature}/>
            </div>
        )
    }
}

export default Calculator;
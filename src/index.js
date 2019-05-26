import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/Context/index';
import registerServiceWorker from './registerServiceWorker';

// function Clock ( props ) {
//     return (
//         <div>
//             <h1>Hello, world</h1>
//             <h2>Ite is {props.date.toLocaleTimeString()}</h2>
//         </div>
//     )
// }

// function tick () {
    // console.log(element);
//     ReactDOM.render(<Clock date={new Date()}/>, document.getElementById('root'));
// }

// setInterval(tick, 1000);
ReactDOM.render(<App/>, document.getElementById('root'));

registerServiceWorker();

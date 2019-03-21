import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import App from './TestProp';
import App, {AppDom1} from './ShengMingZhouQi';
import * as serviceWorker from './serviceWorker';

let AppDom = (<div id='app'>Hello World!</div>);



ReactDOM.render(< AppDom1 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// 渲染顺序


class AppChildChild extends Component {
  render() {
    return (
      <div className="child-child">
        <span>AppchildChild</span>
      </div>
    );
  }
}
class AppChild extends Component {
  render() {
    return (
      <div className="child">
        <span>Appchild</span>
        <AppChildChild />
      </div>
    );
  }
}
class App extends Component {
  componentDidMount() {
    this.setState({
      a: 1
    });
  }
  render() {
    return (
      <div className="App">
        <div className="img-con">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <AppChild />
      </div>
    );
  }
}

export default App;

// reactElement创建顺序，组件创建顺序。

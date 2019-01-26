import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// 渲染顺序
class AppChild extends Component {
  render() {
    return (
      <div className="child">
        <span>Appchild</span>
      </div>
    );
  }
}
class App extends Component {
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

// App()   TopLevelWrapper()(不知道这个干嘛的)  img.App-logo div.img-con AppChild() 

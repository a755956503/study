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
  componentDidMount() {
    // super.componentDidMount();
    console.log('componentDidMount  AppChild');
    // this.setState({
    //   a: 1
    // });
  }
  componentDidUpdate() {
    console.log('componentDidUpdate  AppChild');
    // this.setState({
    //   a: 1
    // });
  }
  render() {
    console.log('render AppChild')
    return (
      <div className="child">
        <span>Appchild</span>
      </div>
    );
  }
}
class App extends Component {
  componentDidMount() {
    console.log('componentDidMount  App');
    this.setState({
      a: 1
    });
  }
  componentDidUpdate() {
    console.log('componentDidUpdate  App');
    // this.setState({
    //   a: 1
    // });
  }
  render() {
    console.log('render')
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
// render
// render AppChild
// componentDidMount  AppChild
// componentDidMount  App
// render
// render AppChild
// componentDidUpdate  AppChild
// componentDidUpdate  App

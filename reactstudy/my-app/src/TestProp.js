import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// 测试prop
// 1 直接修改某个prop: 报错
// 2: 修改prop对象里面的属性（this.props.test.a）： 上层state不变，但传下去的每一个prop里面的值都变了。
// state.t.a: 1    Child1.props.t.a: 2, Child2.props.t.a: 2

class AppChildChild extends Component {
  render() {
    return (
      <div className="child-child">
        <span>{this.props.test.a}</span>
      </div>
    );
  }
}
class AppChild extends Component {
  render() {
    // this.props.test = {a: 2}; // 出错:1
    this.props.test.a = 2; // 2
    return (
      <div className="child">
        <span>{this.props.test.a}</span>
      </div>
    );
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testProp: {
        a:1,
      }
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.testProp.a}
        <AppChild test={this.state.testProp}/>
        <AppChildChild test={this.state.testProp}/>
      </div>
    );
  }
}

export default App;

// reactElement创建顺序，组件创建顺序。

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
  constructor(props) {
    super(props);
    this.state = {a: 0, b: 0}
  }
  componentDidMount() {
    // super.componentDidMount();
    console.log('componentDidMount  AppChild');
    this.setState({
      a: 1
    });
  }
  componentDidUpdate() {
    console.log('componentDidUpdate  AppChild');
    // this.setState({
    //   a: 1
    // });
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate  AppChild');
    this.setState({
      a: 2,
      b: 2,
    });
    return true;
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps  AppChild');
    this.setState({
      a: 3,
      b: 3,
    });
  }
  render() {
    console.log('render AppChild')
    return (
      <div className="child">
        <span>Appchild</span>
        <div>{this.state.a}</div>
        <div>{this.state.b}</div>
      </div>
    );
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {a: 0, b: 0}
  }
  componentDidMount() {
    console.log('componentDidMount  App');
    // this.setState({
    //   a: 1
    // });
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate  App');
    this.setState({
      a: 2,
      b: 2,
    });
    return true;
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps  App');
    this.setState({
      a: 3,
      b: 3,
    });
  }
  // componentDidUpdate() {
  //   console.log('componentDidUpdate  App');
  //   this.setState({
  //     a: 1
  //   });
  // }
  render() {
    console.log('render')
    return (
      <div className="App">
        <div className="img-con">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>{this.state.a}</div>
        <div>{this.state.b}</div>
        <AppChild {...this.state} />
      </div>
    );
  }
}

class AppDom1 extends Component {
  constructor(props) {
    super(props);
    this.state = {a: 0, b: 0}
  }
  componentDidMount() {
    console.log('componentDidMount  App');
    // this.setState({
    //   a: 1
    // });
  }
  shouldComponentUpdate() {
    // console.log('shouldComponentUpdate  App');
    // this.setState({
    //   a: 2,
    //   b: 2,
    // });
    return true;
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps  App');
    // this.setState({
    //   a: 3,
    //   b: 3,
    // });
  }
  // componentDidUpdate() {
  //   console.log('componentDidUpdate  App');
  //   this.setState({
  //     a: 1
  //   });
  // }
  render() {
    console.log('render')
    return (
      <div id='app'>Hello World!</div>
    );
  }
}
export {
  AppDom1,
}
export default App;
/** 生命周期相关
 * 通过state更新时，在componentWillReceiveProps，shouldComponentUpdate里setState都是无效的。
 * 通过上层props更新时，在componentWillReceiveProps里setState有效，shouldComponentUpdate里setState无效。
 * 通过state更新时，没有调componentWillReceiveProps，因为调之前有一层判断，通过context和parentElement
 */



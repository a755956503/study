// console.log('entry');

// // 热替换 分包 打包时间统计

// // webapck , nginx,
// // react native

// // node支持哪些es6语法。
// new Promise((resolve) => {
//   setTimeout(resolve(10), 10);
// }).then((data) => {
//   console.log(data);
// })
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Child extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  getDerivedStateFromProps(nextProps, preState) {
    console.log(this.ref);
  }
  getSnapshotBeforeUpdate(preProps, preState) {
    console.log(this.ref);
  }
  render() {
    return <div ref={this.ref}>
      react1w2334564
    </div>
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  getDerivedStateFromProps(nextProps, preState) {
    console.log(this.ref);
  }
  getSnapshotBeforeUpdate(preProps, preState) {
    console.log(this.ref);
  }
  render() {
    console.log(this.ref);
    return <div>
      react1w233456
      <Child ref={this.ref}/>
    </div>
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
// console.log('aas');
// document.getElementById('root').innerText = 'aa';
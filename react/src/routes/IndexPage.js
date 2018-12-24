import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

const Ele = (data) => <div>{data.data && data.data.data}</div>
// const Ele2 = (data) => {
//   console.log('ele2渲染');
//   return <div>{data.data}</div>
// }
class Ele2 extends React.Component {
  componentWillUpdate() {
    console.log('ele2 更新:渲染')
  }
  render() {
    return (<div>
      1
    </div>)
  }
}
class Ele3 extends React.Component {
  componentWillUpdate() {
    console.log('ele3 更新:渲染')
  }
  render() {
    this.props.data.num =2;
    return (<div>
      {this.props.data.num}
      {this.props.children}
    </div>)
  }
}

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentWillMount() {
    console.log('willMount', this);
  }
  componentDidMount() {
    let i = 1;
    console.log('didMount', this);
    console.log('didMount', this.top);
    setTimeout(() => {
      i++;
      this.setState({
        data: [
          {
            key: 1,
            data: i * 1
          },
          {
            key: 2,
            data: i * 2
          },
        ]
      })
    }, 1000)
  }
  componentWillUpdate() {
    console.log('update:', this.ele3)
  }
  render() {
    console.log(this.state.data);
    return (<div ref={(r) => this.top = r}>
      {
        this.state.data.map((item) => {
         return <Ele key={item.key} data={item}></Ele>
        })
      }
      <Ele3 data={{num: 1}} ref={(r) => this.ele3 = r}>
        <Ele2 data={1}/>
      </Ele3>
    </div>)
  }
}
IndexPage.propTypes = {
};

export default connect()(IndexPage);

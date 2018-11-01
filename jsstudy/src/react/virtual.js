import React from 'react';
import ReactDOM from 'react-dom';

class Ch extends React.Component {
  state = {
    own: 'own'
  };
  render() {
    return <div
      ref={(r) => this.r = r}
      >
      {this.props.x}
    </div>;
  }
}
class Fa extends React.Component {
  state = {
    own: 'own'
  };
  render() {
    return <Ch>dd</Ch>;
  }
}
const dom = ReactDOM.render(<Fa x="x" />, document.getElementById('root'));
setTimeout(() => {
  console.log(dom);
}, 1000);
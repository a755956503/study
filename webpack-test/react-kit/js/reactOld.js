class Child extends Component {
  render() {
    // console.log(this.ref);
    return <div ref={(ref) => this.ref = ref}>
      react1w233456
    </div>
  }
}
class App extends Component {
  state= {a:1}
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        a: 2
      })
    }, 100)
  }
  render() {
    console.log(this.ref);
    return <div>
      <div>{this.state.a}</div>
      <Child ref={(ref) => {
          this.ref = ref;
          console.log(this.state.a, this.ref);
        }}
        />
    </div>
  }
}
let a = 1;
let Index = <App a={a}/>
ReactDOM.render(Index, document.getElementById('root'));
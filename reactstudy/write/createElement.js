// jsx转换
//会调react.createElement方法，所以jsx文件里需要引入React
// return <div onclick={this.handleClick}><div></div></div>
// return React.createElement('div', { onclick: undefined.handleClick},  React.createElement('div', null))

// 1  React - ReactElement
function createElement(type, config, children) {

  // 绑定child到props
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    if (process.env.NODE_ENV !== 'production') {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }
}
// 传入参数
// 原生组件
type = 'img' 
config = {
  alt: "logo"
  className: "App-logo"
  src: "/static/media/logo.5d5d9eef.svg"
  __self: App {props: {…}, context: {…}, refs: {…}, updater: {…}, _reactInternalInstance: ReactCompositeComponentWrapper, …}
  __source: {fileName: "/Users/apple/study/study/reactstudy/my-app/src/App.js", lineNumber: 10}
}
// 自定义组件

type: 函数
type.prototype :  ReactComponent

// 顺序
//1 : 自定义组件本身，子组件(从下往上，最后一层应该是自定义组件内的顶级原生子组件，比如div。  自定义组件只创建自定义组件本身)
//2 : 自定义子组件内部（一样的方式迭代，类似栈的方式）

return reactElement(type, key, ref, self, source, ReactCurrentOwner.current, props)

config {
  key
  ref
  self
  source
}

ReactCurrentOwner.current


// 2  ReactElement

var ReactElement = function (type, key, ref, self, source, owner, props)

var element = {
  // This tag allow us to uniquely identify this as a React Element
  $$typeof: REACT_ELEMENT_TYPE,

  // Built-in properties that belong on the element
  type: type,
  key: key,
  ref: ref,
  props: props,

  // Record the component responsible for creating this element.
  _owner: owner
};
element._store.validated = false;
element._self = self;
element._source = source;

source: 
  fileName: "/Users/apple/study/study/reactstudy/my-app/src/index.js"
  lineNumber: 8

// 冻结属性
Object.freeze(element.props);
Object.freeze(element);
ReactMount.render
主要就是创建component对象的过程
babale
let app = React.createElement('div', {id: 'app'}, 'Hello World!');
# ReactMount._renderSubtreeIntoContainer(null, nextElement, container, callback);
function (parentComponent, nextElement, container, callback)
nextElement: Element对象
container: 挂载的节点
传进去的element是已经createElement以后的对象
返回一个component对象

不仅是首次创建，更新时也用到了这个函数（应该是顶层组件更新时也是走的这一套流程）
```javascript
nextWrappedElement:
```

# _renderNewRootComponent

```javascript
var component = ReactMount._renderNewRootComponent(
  nextWrappedElement, container, shouldReuseMarkup, nextContext)
  ._renderedComponent.getPublicInstance();

nextWrappedElement： react封装了一个顶层组件，组件都在这个顶层组件下面
```
# _renderNewRootComponent(nextElement, container, shouldReuseMarkup, context)
```javascript
var componentInstance = instantiateReactComponent(nextElement, false);

// The initial render is synchronous but any updates that happen during
// rendering, in componentWillMount or componentDidMount, will be batched
// according to the current batching strategy.
ReactUpdates.batchedUpdates(batchedMountComponentIntoNode, componentInstance, container, shouldReuseMarkup, context);

var wrapperID = componentInstance._instance.rootID;
instancesByReactRootID[wrapperID] = componentInstance;
```
## instantiateReactComponent(node, shouldHaveDebugID)
这个函数用来生成Component实例。
```javascript
if (node === null || node === false) {
    instance = ReactEmptyComponent.create(instantiateReactComponent);
  }
```

```javascript
if (typeof element.type === 'string') {
  instance = ReactHostComponent.createInternalComponent(element);
} else if (isInternalComponentType(element.type)) {
  // This is temporarily available for custom components that are not string
  // representations. I.e. ART. Once those are updated to use the string
  // representation, we can drop this code path.
  instance = new element.type(element);
  // We renamed this. Allow the old name for compat. :(
  if (!instance.getHostNode) {
    instance.getHostNode = instance.getNativeNode;
  }
} else {
  instance = new ReactCompositeComponentWrapper(element);
}
```
### createInternalComponent(element)  ReactDomComponent
原生Component: ReactDomComponent

// genericComponentClass就是注入的ReactDomComponent
return new genericComponentClass(element);

构造函数主要是添加了_tag,_currentElement属性，没有生命周期。


### new ReactCompositeComponentWrapper(element)
ReactCompositeComponentWrapper 和 ReactCompositeComponent就构造函数和instantiateReactComponent有区别


#### ReactCompositeComponentWrapper
construct是从ReactCompositeComponent上复制过来的。（快应用有多处使用这种技巧）

instance = new ReactCompositeComponentWrapper(element);
```javascript
_assign(ReactCompositeComponentWrapper.prototype, ReactCompositeComponent, {
  _instantiateReactComponent: instantiateReactComponent
});
```
```javascript
var ReactCompositeComponentWrapper = function (element) {
  this.construct(element);
};
```
#### ReactCompositeComponent
构造函数也只是赋值一些属性，

## batchedUpdates(callback, a, b, c, d, e) 
```javascript
ReactUpdates.batchedUpdates(batchedMountComponentIntoNode, componentInstance, container, shouldReuseMarkup, context);

function batchedUpdates(callback, a, b, c, d, e) {
  ensureInjected();
  return batchingStrategy.batchedUpdates(callback, a, b, c, d, e);
}
```

```javascript
componentInstance = instantiateReactComponent(nextElement, false);
component实例
```
### batchingStrategy.batchedUpdates
isBatchingUpdates是默认值false,所以直接执行perform

### batchedMountComponentIntoNode

#### ReactReconcileTransaction
#### mountComponentIntoNode

```javascript
var markup = ReactReconciler.mountComponent(wrapperInstance, transaction, null, ReactDOMContainerInfo(wrapperInstance, container), context, 0 /* parentDebugID */

// ReactReconciler.mountComponent
// 也就是说最后还是执行了Component实例的mountComonent方法
var markup = internalInstance.mountComponent(transaction, hostParent, hostContainerInfo, context, parentDebugID);

// ReactCompositeComponent.mountComponent
markup = this.performInitialMount(renderedElement, hostParent, hostContainerInfo, transaction, context);

//  ReactCompositeComponent.performInitialMount
inst.componentWillMount();
var markup = ReactReconciler.mountComponent(child, transaction, hostParent, hostContainerInfo, this._processChildContext(context), debugID);

// ReactCompositeComponent.mountComponent
markup = this.performInitialMount(renderedElement, hostParent, hostContainerInfo, transaction, context);

// ReactCompositeComponent.mountComponent    componentDidMount
transaction.getReactMountReady().enqueue(inst.componentDidMount, inst);
```

##### mountComponent




# 总结
老版本的getDefaultProps,getInitialState是在createClass函数里执行的
也就是说在转换成Component之前就执行了


```javascript
```
React源码解析(三):详解事务与更新队列 https://juejin.im/post/59cc4c4bf265da0648446ce0
浅入深出setState（下篇）  https://segmentfault.com/a/1190000015821018
https://blog.csdn.net/sinat_17775997/article/details/84324219

# 怎么实现异步更新的？
是同步，只是我们多个setState其实是在一个函数里，比如compontDidMount或者某个事件。
当这些函数执行完以后，才会执行react的一系列更新函数。
合成事件和生命周期的装载发生时，也调用了batchedUpdates方法，所以第一次setState已经不是第一次调用了，所以close函数是在事件触发函数执行完才执行。。

# WillReceiveProps和ShouldComponent都是在updateComponent方法里执行的，为什么前者函数内可以setState,后者不可以？

# state props context分别是怎么更新的？

# isBatchingUpdates是在哪里设为ture的？

# setState

this.updater.enqueueSetState(this, partialState);
if (callback) {
  this.updater.enqueueCallback(this, callback, 'setState');
}


// this: 组件，partialState: 更新的state
# this.updater.enqueueSetState(this, partialState)
ReactBaseClasses

ReactUpdateQueue.enqueueSetState

## enqueueSetState
ReactUpdateQueue

构造获取组件对象， 将state放入queue数组，执行enqueueUpdate更新
```javascript
var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'setState');
if (!internalInstance) {
  return;
}
var queue = internalInstance._pendingStateQueue || (internalInstance._pendingStateQueue = []);
queue.push(partialState);


enqueueUpdate(internalInstance);
```

### 构造internalInstance

var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'setState');

this._reactInternalInstance

```javascript
context: {}
props: {}
refs: {}
state: null
updater: {isMounted: ƒ, enqueueCallback: ƒ, enqueueCallbackInternal: ƒ, enqueueForceUpdate: ƒ, enqueueReplaceState: ƒ, …}
_reactInternalInstance: ReactCompositeComponentWrapper
  _calledComponentWillUnmount: false
  _compositeType: 0
  _context: {}
  _currentElement: {$$typeof: Symbol(react.element), type: ƒ, key: null, ref: null, props: {…}, …}
  _debugID: 1
  _hostContainerInfo: {_topLevelWrapper: ReactCompositeComponentWrapper, _idCounter: 8, _ownerDocument: document, _node: div#root, _tag: "div", …}
  _hostParent: null
  _instance: App {props: {…}, context: {…}, refs: {…}, updater: {…}, _reactInternalInstance: ReactCompositeComponentWrapper, …}
  _mountImage: null
  _mountIndex: 0
  _mountOrder: 2
  _pendingCallbacks: null
  _pendingElement: null
  _pendingForceUpdate: false
  _pendingReplaceState: false
  _pendingStateQueue: null
  _renderedComponent: ReactDOMComponent {_currentElement: {…}, _tag: "div", _namespaceURI: "http://www.w3.org/1999/xhtml", _renderedChildren: {…}, _previousStyle: null, …}
  _renderedNodeType: 0
  _rootNodeID: 0
  _topLevelWrapper: ReactCompositeComponentWrapper {_currentElement: {…}, _rootNodeID: 0, _compositeType: 0, _instance: TopLevelWrapper, _hostParent: null, …}
  _updateBatchNumber: null
  _warnedAboutRefsInRender: false
```

## 将state放入 internalInstance._pendingStateQueue

enqueueUpdate(internalInstance); =》  ReactUpdates.enqueueUpdate(internalInstance);

## ReactUpdates.enqueueUpdate

非正常更新isBatchingUpdates已经是false，手动调batchedUpdates更新。
正常更新：将要更新的component放入dirtyComponents。

```javascript
function enqueueUpdate(component) {
  ensureInjected();

  // Various parts of our code (such as ReactCompositeComponent's
  // _renderValidatedComponent) assume that calls to render aren't nested;
  // verify that that's the case. (This is called by each top-level update
  // function, like setState, forceUpdate, etc.; creation and
  // destruction of top-level components is guarded in ReactMount.)
  
  if (!batchingStrategy.isBatchingUpdates) {
    batchingStrategy.batchedUpdates(enqueueUpdate, component);
    return;
  }

  dirtyComponents.push(component);
  if (component._updateBatchNumber == null) {
    component._updateBatchNumber = updateBatchNumber + 1;
  }
}

```
### batchedUpdates
ReactDefaultBatchingStrategy

```javascript
batchedUpdates: function (callback, a, b, c, d, e) {
    var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;

    ReactDefaultBatchingStrategy.isBatchingUpdates = true;

    // The code is written this way to avoid extra allocations
    if (alreadyBatchingUpdates) {
      return callback(a, b, c, d, e);
    } else {
      return transaction.perform(callback, null, a, b, c, d, e);
    }
}
```

batchingStrategy.isBatchingUpdates = false

// false: 表示不在事务里，启用事务。
// 如果是在setState时启用事务，而不是在生命周期或者事件回调时启用，等于一次性走完全部事务流程。表象是同步设置setState。
transaction.perform(enqueueUpdate, null, component);
    enqueueUpdate.call(null, component)

batchingStrategy.isBatchingUpdates = true

// 把component放入队列中
enqueueUpdate(component)

### dirtyComponents.push(component);


# 实际更新，FLUSH_BATCHED_UPDATES.close

## flushBatchedUpdates
```javascript
if (dirtyComponents.length) {
  var transaction = ReactUpdatesFlushTransaction.getPooled();
  transaction.perform(runBatchedUpdates, null, transaction);
  ReactUpdatesFlushTransaction.release(transaction);
}
```

## runBatchedUpdates
ReactUpdates

ReactReconciler.performUpdateIfNecessary(component, transaction.reconcileTransaction, updateBatchNumber);

## performUpdateIfNecessary
ReactReconciler

internalInstance.performUpdateIfNecessary(transaction);

internaInstance 就是 component

## component.performUpdateIfNecessary
ReactCompositeComponent

```javascript
if (this._pendingElement != null) {
  ReactReconciler.receiveComponent(this, this._pendingElement, transaction, this._context);
} else if (this._pendingStateQueue !== null || this._pendingForceUpdate) {
  this.updateComponent(transaction, this._currentElement, this._currentElement, this._context, this._context);
} else {
  this._updateBatchNumber = null;
}
```

## updateComponent
ReactCompositeComponent
updateComponent: function (transaction, prevParentElement, nextParentElement, prevUnmaskedContext, nextUnmaskedContext) {}

```javascript
inst.componentWillReceiveProps(nextProps, nextContext);
// 这一步可能setState,再往dirtyComponent里塞对象，所以遍历dirComponet时用的While

nextContext = this._processContext(nextUnmaskedContext);

var nextProps = nextParentElement.props;

var nextState = this._processPendingState(nextProps, nextContext);

inst.shouldComponentUpdate(nextProps, nextState, nextContext);

if (shouldUpdate) {
  this._pendingForceUpdate = false;
  // Will set `this.props`, `this.state` and `this.context`.
  this._performComponentUpdate(nextParentElement, nextProps, nextState, nextContext, transaction, nextUnmaskedContext);
} else {
  // If it's determined that a component should not update, we still want
  // to set props and state but we shortcut the rest of the update.
  this._currentElement = nextParentElement;
  this._context = nextUnmaskedContext;
  inst.props = nextProps;
  inst.state = nextState;
  inst.context = nextContext;
}
```

### state
_processPendingState


合并state后React会会将this._pendingStateQueue设置为null，
这样dirtyComponent进入下一次批量处理时，已经更新过的组件不会进入重复的流程，
保证在同一批dirtyComponent里(同一轮循环)有重复component时，组件只做一次更新操作。

```javascript

var queue = this._pendingStateQueue;
var replace = this._pendingReplaceState;
this._pendingReplaceState = false;
this._pendingStateQueue = null;


_assign = require('object-assign');
var queue = this._pendingStateQueue;
_assign(nextState, typeof partial === 'function' ? partial.call(inst, nextState, props, context) : partial);
```

# 相关对象函数
# wraper

## 顺序:

FLUSH_BATCHED_UPDATES
NESTED_UPDATES
UPDATE_QUEUEING
RESET_BATCHED_UPDATES

## ReactDefaultBatchingStrategy

RESET_BATCHED_UPDATES：  重置isBatchingUpdates的布尔值为false

FLUSH_BATCHED_UPDATES: 调用ReactUpdates来更新组件

### FLUSH_BATCHED_UPDATES： 

遍历dirtyComponents: 因为是用的while,所以在遍历时，有插入component，也可以遍历到
while (dirtyComponents.length || asapEnqueued)
主要代码在 runBatchedUpdates
for (var i = 0; i < transaction.dirtyComponentsLength; i++) {

## ReactUpdates  => ReactUpdatesFlushTransaction
在flushBatchedUpdates函数中，也就是实际更新时才使用的。

NESTED_UPDATES: 更新组件

UPDATE_QUEUEING： 执行setState的回调函数


#### NESTED_UPDATES
```javascript
close: function () {
  if (this.dirtyComponentsLength !== dirtyComponents.length) {
    // Additional updates were enqueued by componentDidUpdate handlers or
    // similar; before our own UPDATE_QUEUEING wrapper closes, we want to run
    // these new updates so that if A's componentDidUpdate calls setState on
    // B, B will update before the callback A's updater provided when calling
    // setState.
    dirtyComponents.splice(0, this.dirtyComponentsLength);
    flushBatchedUpdates();
  } else {
    dirtyComponents.length = 0;
  }
}
```

# ReactDefaultBatchingStrategy
batchingStrategy


## ReactDefaultBatchingStrategy
```javascript
var ReactDefaultBatchingStrategy = {
  isBatchingUpdates: false,

  /**
   * Call the provided function in a context within which calls to `setState`
   * and friends are batched such that components aren't updated unnecessarily.
   */
  batchedUpdates: function (callback, a, b, c, d, e) {
    var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;

    ReactDefaultBatchingStrategy.isBatchingUpdates = true;

    // The code is written this way to avoid extra allocations
    if (alreadyBatchingUpdates) {
      return callback(a, b, c, d, e);
    } else {
      return transaction.perform(callback, null, a, b, c, d, e);
    }
  }
  // 执行完以后再重置成false
  close: function () {
    ReactDefaultBatchingStrategy.isBatchingUpdates = false;
  }
};
```
## ReactDefaultBatchingStrategyTransaction

该文件使用的transaction
```javascript
var transaction = new ReactDefaultBatchingStrategyTransaction();
```

# Transaction
Transaction.js

init和close是放在perform里执行的，所以要看wraper执行顺序，看perform顺序就可以了。


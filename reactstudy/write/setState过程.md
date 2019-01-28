React源码解析(三):详解事务与更新队列 https://juejin.im/post/59cc4c4bf265da0648446ce0
浅入深出setState（下篇）  https://segmentfault.com/a/1190000015821018
https://blog.csdn.net/sinat_17775997/article/details/84324219

# 怎么实现异步更新的？
是同步，只是我们多个setState其实是在一个函数里，比如compontDidMount或者某个事件。
当这些函数执行完以后，才会执行react的一系列更新函数。
合成事件和生命周期的装载发生时，也调用了batchedUpdates方法，所以第一次setState已经不是第一次调用了，所以close函数是在事件触发函数执行完才执行。。

# setState

主要就是调用了 this.updater.enqueueCallback(this, callback, 'setState');


// this: 组件，partialState: 更新的state
# this.updater.enqueueSetState(this, partialState)
ReactUpdateQueue.enqueueSetState

## 构造internalInstance

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

```javascript
function enqueueUpdate(component) {
  ensureInjected();

  // Various parts of our code (such as ReactCompositeComponent's
  // _renderValidatedComponent) assume that calls to render aren't nested;
  // verify that that's the case. (This is called by each top-level update
  // function, like setState, forceUpdate, etc.; creation and
  // destruction of top-level components is guarded in ReactMount.)
  
  //  第一次执行setState才执行 batchedUpdates
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

batchingStrategy.isBatchingUpdates = false

// false: 表示第一次调用setState, 更新队列
transaction.perform(enqueueUpdate, null, component);
    enqueueUpdate.call(null, component)

batchingStrategy.isBatchingUpdates = true

// 把component放入队列中
enqueueUpdate(component)

### dirtyComponents.push(component);


#




# 相关对象函数

# ReactDefaultBatchingStrategy
batchingStrategy

## wraper
有两个wraper, 主要都是close
RESET_BATCHED_UPDATES：  重置isBatchingUpdates的布尔值为false
###  FLUSH_BATCHED_UPDATES： 

遍历dirtyComponents: 因为是用的while,所以在遍历时，有插入component，也可以遍历到
while (dirtyComponents.length || asapEnqueued)
主要代码在 runBatchedUpdates
for (var i = 0; i < transaction.dirtyComponentsLength; i++) {

### NESTED_UPDATES
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

## 代码
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
transaction
new ReactDefaultBatchingStrategyTransaction();
TransactionImpl
```javascript

```

## transaction
Transaction.js


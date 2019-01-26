https://juejin.im/post/59cc4c4bf265da0648446ce0
https://blog.csdn.net/sinat_17775997/article/details/84324219



// this: 组件，partialState: 更新的state
# this.updater.enqueueSetState(this, partialState)


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
batchingStrategy.isBatchingUpdates = false

transaction.perform(enqueueUpdate, null, component);
    enqueueUpdate.call(null, component)

batchingStrategy.isBatchingUpdates = true

enqueueUpdate(component)



# 相关对象函数
batchingStrategy

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
};
```

transaction
new ReactDefaultBatchingStrategyTransaction();
TransactionImpl
```javascript

```

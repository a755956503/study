
# ReactBaseClasses.js
```javascript
function ReactComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}
ReactComponent.prototype.isReactComponent = {};
ReactComponent.prototype.setState
ReactComponent.prototype.forceUpdate
```
# ReactNoopUpdateQueue
```javascript
var ReactNoopUpdateQueue = {
  isMounted: function (publicInstance) {
    return false;
  },l
  enqueueCallback: function (publicInstance, callback) {},
  enqueueForceUpdate: function (publicInstance) {
    warnNoop(publicInstance, 'forceUpdate');
  },
  enqueueReplaceState: function (publicInstance, completeState) {
    warnNoop(publicInstance, 'replaceState');
  },
  enqueueSetState: function (publicInstance, partialState) {
    warnNoop(publicInstance, 'setState');
  }
};
```

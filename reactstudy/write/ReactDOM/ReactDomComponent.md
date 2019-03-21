# ReactDOMComponent.Mixin

## mountComponent: function (transaction, hostParent, hostContainerInfo, context)
生成真实的dom节点，就是component和dom之间的映射关系

# ReactDomComponent

```javascript
function ReactDOMComponent(element) {
  var tag = element.type;
  validateDangerousTag(tag);
  this._currentElement = element;
  this._tag = tag.toLowerCase();
  this._namespaceURI = null;
  this._renderedChildren = null;
  this._previousStyle = null;
  this._previousStyleCopy = null;
  this._hostNode = null;
  this._hostParent = null;
  this._rootNodeID = 0;
  this._domID = 0;
  this._hostContainerInfo = null;
  this._wrapperState = null;
  this._topLevelWrapper = null;
  this._flags = 0;
  if (process.env.NODE_ENV !== 'production') {
    this._ancestorInfo = null;
    setAndValidateContentChildDev.call(this, null);
  }
}
```
# 
_assign(ReactDOMComponent.prototype, ReactDOMComponent.Mixin, ReactMultiChild.Mixin);
所以实例化的component具有两个mixin里的方法。




```javascript
```
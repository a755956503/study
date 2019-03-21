引入ReactDOM文件时就注入了一系列事务
```javascript
var ReactDefaultInjection = require('./ReactDefaultInjection');
ReactDefaultInjection.inject();
```
```javascript
var ReactDOM = {
  findDOMNode: findDOMNode,
  render: ReactMount.render,
  unmountComponentAtNode: ReactMount.unmountComponentAtNode,
  version: ReactVersion,

  /* eslint-disable camelcase */
  unstable_batchedUpdates: ReactUpdates.batchedUpdates,
  unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer
  /* eslint-enable camelcase */
};
```


```javascript
```
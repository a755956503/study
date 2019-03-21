```javascript
var ReactUpdates = {
  /**
   * React references `ReactReconcileTransaction` using this property in order
   * to allow dependency injection.
   *
   * @internal
   */
  ReactReconcileTransaction: null,

  batchedUpdates: batchedUpdates,
  enqueueUpdate: enqueueUpdate,
  flushBatchedUpdates: flushBatchedUpdates,
  injection: ReactUpdatesInjection,
  asap: asap
};
```
# batchedUpdates(callback, a, b, c, d, e)
```javascript
function batchedUpdates(callback, a, b, c, d, e) {
  ensureInjected();
  return batchingStrategy.batchedUpdates(callback, a, b, c, d, e);
}
```
# flushBatchedUpdates
在batchingStrategy的wraper里执行

```javascript
var flushBatchedUpdates = function () {
  // ReactUpdatesFlushTransaction's wrappers will clear the dirtyComponents
  // array and perform any updates enqueued by mount-ready handlers (i.e.,
  // componentDidUpdate) but we need to check here too in order to catch
  // updates enqueued by setState callbacks and asap calls.
  while (dirtyComponents.length || asapEnqueued) {
    if (dirtyComponents.length) {
      var transaction = ReactUpdatesFlushTransaction.getPooled();
      transaction.perform(runBatchedUpdates, null, transaction);
      ReactUpdatesFlushTransaction.release(transaction);
    }

    if (asapEnqueued) {
      asapEnqueued = false;
      var queue = asapCallbackQueue;
      asapCallbackQueue = CallbackQueue.getPooled();
      queue.notifyAll();
      CallbackQueue.release(queue);
    }
  }
};
```

# batchingStrategy ReactDefaultBatchingStrategy
## 注入过程
简单来说就是 ReactDefaultInjection引入了ReactUpdates, 从而把ReactDefaultBatchingStrategy传进去。

导出接口 injectBatchingStrategy
injection: ReactUpdatesInjection,
```javascript
var ReactUpdatesInjection = {
  injectReconcileTransaction: function (ReconcileTransaction) {
    ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;
  },

  injectBatchingStrategy: function (_batchingStrategy) {
    batchingStrategy = _batchingStrategy;
  }
};
```
引入 ReactInjection
```javascript
var ReactUpdates = require('./ReactUpdates');
ReactInjection.Updates = ReactUpdates.injection;
```

注入： ReactDefaultInjection.inject();  // 在ReactDOM里执行
```javascript
ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy);
```

# ReactUpdatesFlushTransaction
和ReactDefaultBatchingStrategy不一样，这个事务是在该文件创建的，只在这个文件里使用。


## 结构

```javascript
var TRANSACTION_WRAPPERS = [NESTED_UPDATES, UPDATE_QUEUEING];
function ReactUpdatesFlushTransaction() {
  this.reinitializeTransaction();
  this.dirtyComponentsLength = null;
  this.callbackQueue = CallbackQueue.getPooled();
  this.reconcileTransaction = ReactUpdates.ReactReconcileTransaction.getPooled(
  /* useCreateElement */true);
}

_assign(ReactUpdatesFlushTransaction.prototype, Transaction, {
  getTransactionWrappers: function () {
    return TRANSACTION_WRAPPERS;
  },

  destructor: function () {
    this.dirtyComponentsLength = null;
    CallbackQueue.release(this.callbackQueue);
    this.callbackQueue = null;
    ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
    this.reconcileTransaction = null;
  },

  perform: function (method, scope, a) {
    // Essentially calls `this.reconcileTransaction.perform(method, scope, a)`
    // with this transaction's wrappers around it.
    return Transaction.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, method, scope, a);
  }
});

PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);
```
### 事务池
注意 PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);
把ReactUpdatesFlushTransaction改造成一个池子，通过getPooled去读取，release去存入。
池子大小默认是10

## wraper

### NESTED_UPDATES
```javascript
var NESTED_UPDATES = {
  initialize: function () {
    this.dirtyComponentsLength = dirtyComponents.length;
  },
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
};
```

### UPDATE_QUEUEING
```javascript
var UPDATE_QUEUEING = {
  initialize: function () {
    this.callbackQueue.reset();
  },
  close: function () {
    this.callbackQueue.notifyAll();
  }
};

CallbackQueue.prototype.reset = function reset() {
    this._callbacks = null;
    this._contexts = null;
  };
```
通过asap方法注入_callbacks





```javascript
```
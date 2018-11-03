class Observer {
  observerableArr = []
  notify() {
    this.observerableArr.forEach( item => {
      item.do();
    })
  }
  attach(observerable) {
    this.observerableArr.push(observerable);
  }
}
class observerable {
  
}

function object() {
  Observer.notify();
}


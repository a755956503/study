class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}
class List {
  constructor() {
    this.header = new Node(undefined);
  }
  insert(newValue, value) {
    const newNode = new Node(newValue);
    const index = this.find(value);
    if (!index) {
      return false;
    }
    const next = index.next;
    index.next = newNode;
    newNode.next = next;
    return;
  }
  find(value) {
    for (let index = this.header; index; index = index.next) {
      if (index.value === value) { 
        return index;
      }
    }
    return null;
  }
  remove(value) {
    let pre = null;
    for (let index = this.header; index; index = index.next) {
      if (index.value === value) { 
        const next = index.next;
        pre.next = next;
        return;
      }
      pre = index;
    }
  }
  add(value) {
    for (var index = this.header; index.next; index = index.next) {
    }
    index.next = new Node(value);
  }
  toArr(){
    const arr = [];
    let index = this.header;
    while(index) {
      arr.push(index.value);
      index = index.next;
    }
    return arr;
  }
}
const list = new List();
list.add(1);
list.insert(2,1);
list.insert(3,2);
list.remove(2);
console.log(list.toArr());

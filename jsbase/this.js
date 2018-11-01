const a = {
  obj: {a: 1},
  funa() {
    console.log('a', this);
    console.log(this.obj.a);
  }
}
// 必须要有新引用，不然原来的a.funa丢失了
const _funa = a.funa;
a.funa = function() {
  console.log(this);
  return _funa(); // 这里调用的_funa,没有上层对象，所以this表示window。
}
a.funa();
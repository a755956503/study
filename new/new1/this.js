const a = {
  obj: {a: 1},
  funa() {
    console.log(this.obj.a);
  }
}
a.funa = function() {
  return _funa();
}
a.funa();
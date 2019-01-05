class A {
  constructor(a) {
    // this.a = a;
  }
  // b =1 报错： 要写在constructor,为什么react里可以？因为转码了？
  a() {
    console.log(1);
  }
}
const aa = new A(2);
aa.a();
console.log(aa.a)
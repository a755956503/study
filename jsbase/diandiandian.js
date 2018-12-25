/**
 *扩展运算符
 *结构运算符
 *
 */
// function a() {
//   console.log(arguments);
//   console.log(...arguments);
//   b(...arguments);
// }
// function b() {
//   console.log(arguments);
//   console.log(...arguments);
// }
// // a(...{a:1,b:2});
// a(...[1,2])
/** rest
 *
 */

 // 对象
 let obj = {a:1};
// let {a:b, a:c} = {a:1};
// console.log(b,c);

// 重复赋值
// let {0:b, 0:c} = [0];
// console.log(b,c);
 
// 非定义时赋值
// let a;
// ({a} ={a:1})
// console.log(a);
// 默认值

// let {{x,y} = {x:0, y:0}} = {{x: 1, y: 1}}
// let ({{x,y} = {x: 0, y: 0}} = {{x: 1, y: 1}})

"use strict";
abx = 1;
// console.log('entry');

// // 热替换 分包 打包时间统计

// // webapck , nginx,
// // react native
import React from 'react';
import './index.css';
import base from './base';
import common from './common';
console.log(common);
// // node支持哪些es6语法。
// new Promise((resolve) => {
//   setTimeout(resolve(10), 10);
// }).then((data) => {
//   console.log(data);
// })
console.log(base);

// 如果不写chunk注释，会默认用id命名，从1开始
const importData = import(/* webpackChunkName: 'importAsync' */'./importAsync');
console.log('aas');
document.getElementById('root').innerText = 'eee22tttreeedddrrqq';
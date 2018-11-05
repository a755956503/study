import Vue from 'vue';
import App from './App';

// Vue.config.productionTip = false;
// App.mpType = 'app';

console.log('main.js');

// const app = new Vue(App);
// app.$mount();
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

import Vue from 'vue';
import App from './App.vue';
import TodoList from './components/TodoList.vue';
import TodoItem from './components/TodoItem.vue';

Vue.component('MyTodoList',TodoList);

new Vue({
  el: '#app',
  render: h => h(App)
});

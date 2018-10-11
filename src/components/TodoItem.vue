<template>

  <div>
    <p>Todo item</p>
    <!-- <li v-for="(todoItem,index) in todos" v-bind:key="index" :style="todoStyle(index)" >
      <div class="todo-item">
      <div style="">
        <input type="checkbox" v-bind:checked="todoItem.isDone" @click="updateTodo(index)" ref="todoItem" v-bind:id="'todo_'+index">
        <label v-bind:for="'todo_'+index">{{todoItem.text}}</label>
      </div>
      <div style="position:relative;left:100%">
        <button v-on:click="updateTodo(index)" class="update-btn">Update</button>
        <button v-on:click="removeTodo(index)" class="remove-btn">Remove</button>
      </div>
      </div>
    </li> -->
  </div>

</template>

<script>
  export default {
    data(){
      return {
        title: 'Todo Item'
      }
    }
  };
</script>

<style scoped>
 *{
   color: blueviolet;
 }
</style>

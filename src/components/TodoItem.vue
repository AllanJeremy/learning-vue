<template>
  <li v-bind:value="index" class="todo-item">
    <div style="">
      <input type="checkbox" v-bind:checked="todoItem.isDone" @click="updateTodo(index)" ref="todoItem">
      <label v-bind:for="'todo_'+index" :style="todoStyle(index)">{{todoItem.text}}</label>
    </div>
    <div style="position:relative;left:100%">
      <button v-on:click="updateTodo(index)" class="update-btn">Update</button>
      <button v-on:click="removeTodo(index)" class="remove-btn">Remove</button>
    </div>
  </li>
</template>

<script>
  let exportObj = {
    props: {
      todoItem: {
        type: Object,
        required: true,
      },
      index: {
        required: true,
        type: Number
      }
    },
    data() {
      return {
      }
    },
    methods: {
      todoStyle: function (index) {
        console.log();
        let todoIsDone = this.$props.todoItem.isDone;
        return {
          textDecoration: todoIsDone ? 'line-through' : '',
        }
      },
      updateTodo: function (index) {
        console.log(this.$refs.todoItem.checked);
        let todoIsDone = this.$refs.todoItem.checked;
        this.$props.todoItem.isDone= todoIsDone;
      },
      removeTodo: function (index) {
        //Remove the item at the given index from todo
        this.todos.splice(index, 1);
      }
    }
  };
  export default exportObj;

</script>

<style scoped lang="scss">
  $btnPadding: 0.75rem 1rem;
  li{
    padding: 1.2rem 1.5rem;
    width:100%;
    background-color:rgb(251, 251, 251);
    border: 1px solid rgb(219, 219, 219);
    margin: 0.5rem auto;
    .remove-btn
    {
      margin-left:auto;
      text-align: right;
    }
  };

  button {
    border: none;
    padding: $btnPadding;
  };

  .remove-btn {
    background-color: rgb(212, 87, 87);
    color: white;
    margin-left: auto;
    border: none;
  }

</style>

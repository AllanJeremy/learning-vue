<template>
  <div class="todo-items" v-show="todos.length>0">
      <h1>Todo list</h1>
          <todo-item
            v-for="(todo,index) in todos"
            :key="index"
          />
      <ul class="todos">
      </ul>
  </div>

</template>

<script>
  import TodoItem from './TodoItem.vue';
  export default {
    components:{
      'TodoItem':TodoItem,
    },
    data(){
      return {
        todos: [
          {text: 'Buy food', description: ''},
          {text: 'Move out'},
          {text: 'Become a billionaire'},
        ]
      }
    },
    methods: {
          addTodo: function(){
            let todoText = this.$refs.todoInput.value;

            //Prevent adding empty todos
            if(todoText == '')
            {
              alert('Todo item must contain a value');
              return;
            }
            this.todos.push({
              text:todoText,
              isDone: false
            });
            this.$refs.todoInput.value = '';
          },
          updateTodo: function(index)
          {
            let todoIsDone = this.$refs.todoItem[index].checked
            this.todos[index].isDone = todoIsDone;


            console.log();
            // this.todos[index].isDone =
          },
          todoStyle: function(index){
            let todoIsDone = this.todos[index].isDone;
            return {
              textDecoration: todoIsDone ? 'line-through' : '',
            }
          },
          removeTodo: function(index){
            //Remove the item at the given index from todo
            this.todos.splice(index,1);
          }
      },
  }
</script>

<style scoped>
  *{
    color:red;
  }
</style>

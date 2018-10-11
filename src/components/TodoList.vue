<template>
  <div class="todo-items" v-show="todos.length>0">
      <h1>Todo list</h1>
      <ul class="todos">
          <todo-item
            v-for="(todo,index) in todos"
            :key="index"
            :todoItem="todo"
            :index="index"
          />
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
          {text: 'Buy food', isDone:false},
          {text: 'Move out', isDone:false},
          {text: 'Become a billionaire', isDone:false},
          {text: 'Do stuff', isDone:false},
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

      },
  }
</script>

<style scoped lang="scss">
ul
{
  width:100%;
  text-align:left;
  list-style-type:none;
  justify-content:start;
}
</style>

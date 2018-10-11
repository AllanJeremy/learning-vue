<template>
  <div id="vue-app">
    <MyTodoList></MyTodoList>
  </div>
</template>

<script>
export default {
  data(){
    return{
      hasTodos: false,
      todos: []
    };
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
  computed: {

  }
}
</script>

<style lang="scss">
$inputPadding:0.75rem;
$btnColor:#212121;
$btnTextColor:rgb(223, 223, 223);

#vue-app{
  display:flex;
  width:100%;
  height: 100vh;
  flex-direction:column;
  align-items:center;
  font-family:Roboto, sans-serif;
  font-size: 1.2rem;
}

.todo-input{
  margin-top:1rem;
  input{
    padding:$inputPadding;
    width:15rem;
  };
  button{
    background-color:$btnColor;
    border:1px solid $btnColor;
    color:$btnTextColor;
  }
}

input{
  border-color:#ccc;
  border-style: solid;
}



</style>

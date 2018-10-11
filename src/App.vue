<template>
  <div id="vue-app">
    <h1>Todo list app</h1>
<!--     <div class="todo-input">
      <input type="text" ref="todoInput" v-on:keyup.enter="addTodo">
      <button v-on:click="addTodo" class="btn">Add todo</button>
    </div> -->
    <MyTodoList></MyTodoList>
<!--      -->
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

button
{
  border: none;
  padding:$inputPadding;
}

.remove-btn
{
  background-color:rgb(212, 87, 87);
  color:white;
  border-radius:4px;
  margin-left:auto;
  border:none;
}
.todos
{
  width:100%;
  text-align:left;
  list-style-type:none;
  justify-content:start;
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
  }
}
</style>

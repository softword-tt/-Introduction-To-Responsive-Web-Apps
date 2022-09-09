new Vue({
    el: "#app",
    data() {
      return {
        name: "World!",
        todos: ["save forests", "burn asteroids to the ground"],
        inputTodo: ""
      };
    },
    methods: {
      createTodo() {
        if (this.inputTodo != "") {
          this.todos.push(this.inputTodo);
          this.inputTodo = "";
        }
      },
  
      deleteTodo(todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
      }
    }
  });
class TodoList {
    constructor() {
      this.todos = [];
    }
  
    addTodo(todo) {
      this.todos.push(todo);
    }
  
    deleteTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    }
  
    markTodoAsCompleted(todoId) {
      this.todos.forEach(todo => {
        if (todo.id === todoId) {
          todo.completed = true;
        }
      });
    }
  
    getCompletedTodos() {
      return this.todos.filter(todo => todo.completed);
    }
  
    getIncompleteTodos() {
      return this.todos.filter(todo => !todo.completed);
    }
  }
  
  class Todo {
    constructor(id, text) {
      this.id = id;
      this.text = text;
      this.completed = false;
    }
  }
  
  const myTodoList = new TodoList();
  const incompleteTodosList = document.getElementById('incompleteTodos');
  const completedTodosList = document.getElementById('completedTodos');
  const todoInput = document.getElementById('todoInput');
  const addTodoBtn = document.getElementById('addTodoBtn');
  
  function renderTodos() {
    incompleteTodosList.innerHTML = '';
    completedTodosList.innerHTML = '';
  
    myTodoList.getIncompleteTodos().forEach(todo => {
      const listItem = document.createElement('li');
      listItem.textContent = todo.text;
      incompleteTodosList.appendChild(listItem);
  
      listItem.addEventListener('click', () => {
        myTodoList.markTodoAsCompleted(todo.id);
        renderTodos();
      });
    });
  
    myTodoList.getCompletedTodos().forEach(todo => {
      const listItem = document.createElement('li');
      listItem.textContent = todo.text;
      listItem.classList.add('completed');
      completedTodosList.appendChild(listItem);
  
      listItem.addEventListener('click', () => {
        myTodoList.deleteTodo(todo.id);
        renderTodos();
      });
    });
  }
  
  addTodoBtn.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
      const todo = new Todo(Date.now(), todoText);
      myTodoList.addTodo(todo);
      renderTodos();
      todoInput.value = '';
    }
  });
  
  renderTodos();
  
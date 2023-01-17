import React from 'react'
import Form from './Form.js'
import TodoList from './TodoList.js'


export default class App extends React.Component {

  
  constructor() {
    super();
    this.state = {
      todos: starterData,
    }
  }

  addTodo = (event, todo) => {
    event.preventDefault();
    const newTodo = {
      name: todo,
      id: Date.now(),
      completed: false
    }
    this.setState({...this.state, todos: [...this.state.todos, newTodo]});
  }

  toggleTodo = (itemId) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if(todo.id === itemId) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  clearDone = () => {
    // filter through todos
    // only return the ones that are NOT done
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    })
  }



  render() {
    return (
      <div>
        <h2>Todos</h2>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
        <Form addTodo={this.addTodo} />
        <button onClick={this.clearDone}>Clear</button>
      </div>
    )
  }
}








const starterData = [
  {
    name: 'Organize Garage',
    id: 1528817077286, // could look different, you could use a timestamp to generate it
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

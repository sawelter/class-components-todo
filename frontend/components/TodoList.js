import React from 'react'
import Todo from './Todo.js'

export default class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <div className="todoList">
        {this.props.todos.map((item) => {
          return <Todo todo={item} key={item.id} toggleTodo={this.props.toggleTodo} />  
        })}
      </div>
    )
  }
}

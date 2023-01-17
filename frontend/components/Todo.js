import React from 'react'


/*  name: 'Bake Cookies',
    id: 1528817084358,
    completed: false */

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleClick = () => {
    this.props.toggleTodo(this.props.todo.id);
  }


  render() {
    return ( 
      <div onClick={this.handleClick} className={`todo${this.props.todo.completed ? " completed" : ""}`}>
        {this.props.todo.name}{this.props.todo.completed ? " ✓" : ""}
      </div>
    )
  }
}

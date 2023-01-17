import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({...this.state, todo: event.target.value})
  }

  submitForm = (event) => {
    event.preventDefault();
    this.props.addTodo(event, this.state.todo);
    this.setState({todo: ""});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input 
            type="text" placeholder="Enter new todo"
          value={this.state.todo} onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

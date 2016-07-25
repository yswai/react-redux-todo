import React from 'react';
import { connect } from 'react-redux';
import AddTodo from './components/AddTodo';

let TodoList = ({todos}) => {
  return (
    <ul>
      {
        todos.map((todo) => {
          console.log(todo.id);
          return <li key={todo.id}>
            {todo.text}{todo.completed ? ' - Done!' : null}
          </li>
        })
      }
    </ul>
  )
};

let TodoListContainer = connect((state) => {
  return {
    todos: state
  }
})(TodoList);

export default class App extends React.Component {

  constructor () {
    super();
    this.state = {
      name: 'YSW'
    }
  }

  render () {
    return (
      <div className="row">
        <strong>{this.state.name} TODO list: </strong>
        <AddTodo />
        <div><TodoListContainer /></div>
      </div>
    )
  }

}

import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from './store';
import styles from './TodoList.css';

class TodoList extends Component {
  state = { input: '' };

  handleClick = i => () => {
    this.props.removeTodo(i);
  }

  handleChange = e => {
    this.setState({ input: e.currentTarget.value });
  }

  handleSubmit = () => {
    this.props.addTodo({ text: this.state.input });
    this.setState({ input: '' });
  }

  render() {
    return (
      <div className='todos--container'>
        <h1>Todos</h1>

        <input
          className='todos--addTodo'
          type='text'
          onChange={this.handleChange}
          value={this.state.input} />

        <ul>
          {this.props.todos.map(({ text }, i) => (
            <li onClick={this.handleClick(i)} key={i}>{text}</li>
          ))}
        </ul>

        <button
          className='todo--button'
          onClick={this.handleSubmit}>Add Todo</button>
      </div>
    );
  }
}

TodoList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { TodoList };

const mapStateToProps = ({ currentList: { todos }}) => ({ todos });

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(addTodo(text)),
    removeTodo: id => dispatch(removeTodo(id))
  };
}

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default TodoListContainer;

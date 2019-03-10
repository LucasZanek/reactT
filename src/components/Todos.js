import React, { Component } from 'react'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class Todos extends Component {
  render() {
    return this.props.todos.map((item) => (
      <TodoItem key={item.id} todo={item} />
    ));
  }
}
// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
};
export default Todos

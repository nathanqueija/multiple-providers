import React from 'react';
import { useTodos } from './provider';
import withStyle from './Todos.style';

const Todos = ({ className }) => {
  const { todos, addTodo, removeTodo } = useTodos();

  const onSubmit = e => {
    e.preventDefault();
    const input = e.target.elements.todo;
    const newTodo = input.value;
    input.value = '';
    addTodo(newTodo);
  };
  return (
    <div className={className}>
      <form onSubmit={onSubmit}>
        <label htmlFor="todo">Add new Todo:</label>
        <input type="text" name="todo" />
      </form>
      {todos.map(({ id, text }) => (
        <div className="todo" key={id}>
          <span>{text}</span>
          <span onClick={() => removeTodo(id)}>X</span>
        </div>
      ))}
    </div>
  );
};

export default withStyle(Todos);

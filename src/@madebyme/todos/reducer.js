import { ADD_TODO, REMOVE_TODO, REMOVE_LAST_TODO } from './actions';

export const initialState = {
  todos: [
    { id: 1, text: 'Read a book 📗' },
    { id: 2, text: 'Plan next day 🗓️' },
    { id: 3, text: 'Do some exercise 🏋️‍' },
    { id: 4, text: 'Watch a movie 🍿' }
  ]
};

export default (state, action) => {
  const { type, payload } = action;
  const { todos } = state;

  switch (type) {
    case ADD_TODO:
      return { ...state, todos: [...todos, payload] };
    case REMOVE_TODO:
      return { ...state, todos: todos.filter(({ id }) => id !== payload) };
    case REMOVE_LAST_TODO:
      return { ...state, todos: todos.slice(0, todos.length - 1) };

    default:
      return state;
  }
};

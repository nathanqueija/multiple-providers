export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const REMOVE_LAST_TODO = 'REMOVE_LAST_TODO';

export default (state, dispatch) => ({
  addTodo: todo =>
    dispatch({
      type: ADD_TODO,
      payload: {
        id: state.todos.length + 1,
        text: todo
      }
    }),
  addTodoAsync: async todo => {
    await setTimeout(
      () =>
        dispatch({
          type: ADD_TODO,
          payload: {
            id: state.todos.length + 1,
            text: todo
          }
        }),
      1000
    );
  },
  removeTodo: id => dispatch({ type: REMOVE_TODO, payload: id }),
  removeLastTodo: () => dispatch({ type: REMOVE_LAST_TODO })
});

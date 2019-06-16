export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export default (state, dispatch) => ({
  increment: () =>
    dispatch({
      type: INCREMENT
    }),
  decrement: () =>
    dispatch({
      type: DECREMENT
    })
});

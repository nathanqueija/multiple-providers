export const ADD_KEYWORD = 'ADD_KEYWORD';
export const REMOVE_KEYWORD = 'REMOVE_KEYWORD';

export default (state, dispatch) => ({
  addKeyword: keyword => dispatch({ type: ADD_KEYWORD, payload: keyword }),
  addKeywordAsync: async keyword => {
    await setTimeout(
      () => dispatch({ type: ADD_KEYWORD, payload: keyword }),
      2000
    );
  },
  removeKeyword: () => dispatch({ type: REMOVE_KEYWORD })
});

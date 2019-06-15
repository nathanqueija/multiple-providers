export const UPDATE_COLOR = 'UPDATE_COLOR';

export default (state, dispatch) => ({
  updateColor: color => dispatch({ type: UPDATE_COLOR, payload: color }),
  updateColorAsync: async color => {
    await setTimeout(
      () => dispatch({ type: UPDATE_COLOR, payload: color }),
      2000
    );
  }
});

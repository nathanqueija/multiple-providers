import { UPDATE_COLOR } from './actionTypes';

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_COLOR:
      return { ...state, color: payload };

    default:
      return state;
  }
};

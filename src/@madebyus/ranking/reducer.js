import { ADD_KEYWORD, REMOVE_KEYWORD } from './actions';

export default (state, action) => {
  const { type, payload } = action;
  const { keywords } = state;

  switch (type) {
    case ADD_KEYWORD:
      return { ...state, keywords: [...keywords, payload] };
    case REMOVE_KEYWORD:
      return { ...state, keywords: keywords.slice(0, keywords.length - 1) };

    default:
      return state;
  }
};

import React from 'react';
import reducer from './reducer';
import initialState from './initialState';
import { UPDATE_COLOR } from './actionTypes';

export const Context = React.createContext();

const RankingStore = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const updateColor = color => dispatch({ type: UPDATE_COLOR, payload: color });

  const value = {
    data: state,
    updateColor
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default RankingStore;

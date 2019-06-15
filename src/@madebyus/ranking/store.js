import React from 'react';
import reducer from './reducer';
import initialState from './initialState';
import { UPDATE_COLOR } from './actionTypes';

export const Context = React.createContext();

const RankingStore = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const updateColor = color => dispatch({ type: UPDATE_COLOR, payload: color });

  const updateColorAsync = async color => {
    await setTimeout(
      () => dispatch({ type: UPDATE_COLOR, payload: color }),
      2000
    );
  };

  const value = React.useMemo(
    () => ({
      data: state,
      updateColor,
      updateColorAsync
    }),
    [state]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export function useRanking() {
  const context = React.useContext(Context);
  if (context === undefined) {
    throw new Error('useRanking must be used within a RankingProvider');
  }
  return context;
}

export default RankingStore;

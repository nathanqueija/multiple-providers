import React from 'react';
import reducer from './reducer';
import initialState from './initialState';
import createActions from './actions';

export const Context = React.createContext();

const RankingStore = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const actions = createActions(state, dispatch);

  const value = React.useMemo(
    () => ({
      ...state,
      ...actions
    }),
    [state, actions]
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

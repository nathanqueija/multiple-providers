import React from 'react';
import reducer, { initialState } from './reducer';
import createActions from './actions';

const Context = React.createContext();

const TodosProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const actions = createActions(state, dispatch);

  const value = React.useMemo(() => [{ ...state }, { ...actions }], [
    state,
    actions
  ]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export function useTodos() {
  const context = React.useContext(Context);
  if (!context)
    throw new Error(
      'You must use Todos Provider in order to consume this context.'
    );

  return context;
}

export default TodosProvider;

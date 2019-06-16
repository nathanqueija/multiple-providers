import React from 'react';
import { useCounter } from './provider';
import withStyle from './Counter.style';

const Counter = ({ className }) => {
  const { counter, increment, decrement } = useCounter();

  return (
    <div className={className}>
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default withStyle(Counter);

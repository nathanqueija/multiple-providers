import React from 'react';
import styled from 'styled-components';
import Description from 'components/Description';
import { useTodos } from '@madebyme/todos';
import { useCounter } from '@madebyme/counter';
const MixedPage = () => {
  const [todosState, { addTodoAsync, removeLastTodo }] = useTodos();
  const [counterState] = useCounter();

  const States = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;

    > * {
      border: 1px dashed black;
      padding: 10px;
      border-radius: 7px;
      margin: 10px;
    }
  `;

  return (
    <div>
      <Description>
        This page is using just the state from {'<Todos />'} and {'<Counter />'}
        <br />
        It consumes the state using the custom hooks exported from the packages.{' '}
        <br />
        The custom hooks are <i>useTodos()</i> and <i>useCounter()</i>.<br />
        Below you can see the shape of each state. The hooks expose the state as
        the functions to mutate the state. <br />
        Each state is self contained in its own context. <br />
        To be able to use the hooks you need to wrap your application with the
        Providers as you would to with Redux. <br /> If you don't use the
        Providers wrappers an error will be thrown. <br />
        Give it a try and see how it is awesome: <br />
        Performe some operation in the pages and see how every other page that
        is connected to the same state is affected. <br />
        If you add or remove a Todo in the Todos Page this page will be affected
        and vice-versa. <br />
        This way you can have how many context you want, all of them self
        contained and easily shareable to how many external sources you want.{' '}
        <br />
        Did I tell you already how awesome React is? 💙
      </Description>

      <States>
        <div>
          <h1>Todos state</h1>
          <pre>{JSON.stringify(todosState, null, 2)}</pre>
          <button onClick={removeLastTodo}>Remove last Todo</button>
          <button onClick={() => addTodoAsync('I am a new async Todo ⏱️')}>
            Add Todo async (after 1 second)
          </button>
        </div>

        <div>
          <h1>Counter state</h1>
          <pre>{JSON.stringify(counterState, null, 2)}</pre>
        </div>
      </States>
    </div>
  );
};

export default MixedPage;

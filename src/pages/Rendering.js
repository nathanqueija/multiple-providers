import React from 'react';
import styled from 'styled-components';
import Description from 'components/Description';
import { useTodos } from '@madebyme/todos';
import { useCounter } from '@madebyme/counter';

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  margin: auto;
  padding: 10px;
  background: ${({ background }) => background};
`;

const DumbComponent = ({ children }) => {
  const randomColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);

  return <Wrapper background={randomColor}>{children}</Wrapper>;
};

const States = styled.div`
  width: 90%;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  border: 2px dashed black;

  > * {
    border: 1px dashed black;
    padding: 10px;
    border-radius: 7px;
    margin: 10px;
  }
`;

const MixedContainer = styled.div`
  .dumb {
    margin: auto;
    display: flex;
    width: 40%;
  }
`;
const ComponentsThatConsumeContext = () => {
  const [todosState, { addTodoAsync, removeLastTodo }] = useTodos();
  const [counterState] = useCounter();
  return (
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
      <DumbComponent>
        This is a dumb component but it is inside a component that is consuming
        a context. If you update any context it is consuming it will be
        rerendered, because its parent will be updated.
      </DumbComponent>
    </States>
  );
};
const MixedPage = () => {
  return (
    <MixedContainer>
      <Description>
        This page is using just the state from {'<Todos />'} and {'<Counter />'}
        <br />
        There are two other dumb components that are not consuming to any
        context. <br />
        There is one dumb component that lives in the same component that is
        consuming the context, that means if you update the context it will be
        rerendered too as the parent was updated. <br />
        Test if when you update todos context in this page the other two dumb
        components at the bottom of the page will be rendered again. They
        shouldn't.
      </Description>
      <ComponentsThatConsumeContext />
      <div className='dumb'>
        <DumbComponent>
          Dumb Component 1 that is not consuming any context
        </DumbComponent>
        <DumbComponent>
          Dumb Component 2 that is not consuming any context
        </DumbComponent>
      </div>
    </MixedContainer>
  );
};

export default MixedPage;

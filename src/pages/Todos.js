import React from 'react';
import Todos from '@madebyme/todos';
import Description from 'components/Description';
const TodosPage = () => (
  <div>
    <Description>
      This page is using {'<Todos />'} component from @madebyme/todos npm
      package and it is using its self contained state from its own React
      context.
      <br />
      In this project I am simulating the import from a local folder, but
      imagine that this package would be listed in package.json and imported
      from node_modules. <br />
      The package exports the whole component connected to its context and a
      useTodos() hook that exposes all its internal state so you can choose to
      use the whole component or just its state.
      <br /> Within the state provided you can read the state or mutate it with
      the function provided by the context.
      <br />
      If you want to see the integration between states of different packages
      please go to <strong>Todos + Counter</strong> page.
    </Description>
    <Todos />
  </div>
);

export default TodosPage;

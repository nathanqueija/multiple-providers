import React from 'react';
import Todos from 'pages/Todos';
import Counter from 'pages/Counter';
import Mixed from 'pages/Mixed';
import Rendering from 'pages/Rendering';
import { Provider as TodosProvider } from '@madebyme/todos';
import { Provider as CounterProvider } from '@madebyme/counter';
import Nav from 'components/Nav';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <TodosProvider>
      <CounterProvider>
        <BrowserRouter>
          <Nav />
          <Route path='/' exact component={Todos} />
          <Route path='/counter' component={Counter} />
          <Route path='/todos-counter' component={Mixed} />
          <Route path='/rendering' component={Rendering} />
        </BrowserRouter>
      </CounterProvider>
    </TodosProvider>
  );
}

export default App;

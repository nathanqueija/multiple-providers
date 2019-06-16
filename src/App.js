import React from 'react';
import Todos from 'pages/Todos';
import Counter from 'pages/Counter';
import Mixed from 'pages/Mixed';
import { Provider as RankingProvider } from '@madebyme/todos';
import { Provider as CounterProvider } from '@madebyme/counter';
import Nav from 'components/Nav';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <RankingProvider>
      <CounterProvider>
        <BrowserRouter>
          <Nav />
          <Route path="/" exact component={Todos} />
          <Route path="/counter" component={Counter} />
          <Route path="/todos-counter" component={Mixed} />
        </BrowserRouter>
      </CounterProvider>
    </RankingProvider>
  );
}

export default App;

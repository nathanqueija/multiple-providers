import React from 'react';
import RankingPage from 'components/RankingPage';
import PpcPage from 'components/PpcPage';
import { Provider as RankingProvider } from '@madebyus/ranking';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <RankingProvider>
      <Router>
        <ul>
          <li>
            <Link to={`/`}>Ranking</Link>
          </li>
          <li>
            <Link to={`/ppc`}>PPC</Link>
          </li>
        </ul>
        <Route path="/" exact component={RankingPage} />
        <Route path="/ppc" component={PpcPage} />
      </Router>
    </RankingProvider>
  );
}

export default App;

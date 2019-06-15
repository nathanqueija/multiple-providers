import React from 'react';
import Page from 'components/Page';
import { Provider as RankingProvider } from '@sellics/ranking';

function App() {
  return (
    <RankingProvider>
      <Page />
    </RankingProvider>
  );
}

export default App;

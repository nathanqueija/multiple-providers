import React from 'react';
import { Context as RankingContext } from '@sellics/ranking';
const SamplePage = () => {
  const { data, updateColor } = React.useContext(RankingContext);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={() => updateColor('blue')}>Change color to blue</button>
      <button onClick={() => updateColor('green')}>
        Change color to green
      </button>
      <button onClick={() => updateColor('yellow')}>
        Change color to yellow
      </button>
    </div>
  );
};

export default SamplePage;

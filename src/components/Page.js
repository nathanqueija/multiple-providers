import React from 'react';
import { useRanking } from '@madebyus/ranking';
const SamplePage = () => {
  const { data, updateColor, updateColorAsync } = useRanking();

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
      <button onClick={() => updateColorAsync('brown')}>
        Change color to brown async
      </button>
    </div>
  );
};

export default SamplePage;

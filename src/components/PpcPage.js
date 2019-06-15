import React from 'react';
import { useRanking } from '@madebyus/ranking';
const PpcPage = () => {
  const { keywords, addKeyword, addKeywordAsync, removeKeyword } = useRanking();

  return (
    <div>
      <pre>{JSON.stringify(keywords, null, 2)}</pre>
      <button onClick={() => addKeyword('blue')}>Add Keyword</button>
      <button onClick={removeKeyword}>Remove Keyword</button>
      <button onClick={() => addKeywordAsync('yellow')}>
        Add Keyword async
      </button>
    </div>
  );
};

export default PpcPage;

import React from 'react';
import { useRanking } from './store';
import withStyle from './Ranking.style';

const Ranking = ({ className }) => {
  const { keywords } = useRanking();
  return (
    <div className={className}>
      {keywords.map(k => (
        <h2>{k}</h2>
      ))}
    </div>
  );
};

export default withStyle(Ranking);

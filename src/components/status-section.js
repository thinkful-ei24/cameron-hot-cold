import React from 'react';

import GuessCount from './guess-count';
import GuessList from './guess-list';

export default function StatusSection(props){
  const {guesses} = props;
  const guessCount = guesses.length;

  return (
    <secion aria-labelledby="guessCount" aria-describedby="guessList">
      <GuessCount count={guessCount} />
      <GuessList guesses={guesses} />
    </secion>
  );
}
import React from 'react';

import GuessForm from './guess-form';
import GuessCount from './guess-count';
import GuessList from './guess-list';
import Feedback from './feedback';
import Header from './header';

export default function Game(){
  return (
    <div>
      <Header title="HOT or COLD" />
      <main role="main">
      <Feedback feedback="cold"/>
      <GuessForm />
      <GuessCount count={5} />
      <GuessList guesses={[1,2,3,4,5]} />
      </main>
    </div>
  );
}
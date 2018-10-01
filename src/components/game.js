import React from 'react';

import GuessSection from './guess-section';
import StatusSection from './status-section';
import Header from './header';

export default function Game(){
  return (
    <div>
      <Header title="HOT or COLD" />
      <main role="main">
        <GuessSection
          feedback="cold" />
        <StatusSection
          guesses={[1,2,3,4,5]} />  
      </main>
    </div>
  );
}
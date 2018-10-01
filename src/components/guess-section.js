import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';

export default function GuessSection(props){
  const {feedback} = props;

  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback feedback={feedback} />
      <GuessForm />
    </section>
  )
}
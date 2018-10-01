import React from 'react';

import './guess-list.css';

export default function GuessList(props){
  const guessArr = props.guesses.map((guess, index) => (
    <li key={index}>{guess}</li>
  ));
  return (
    <ul className="guessBox clearfix">{guessArr}</ul>
  )
}
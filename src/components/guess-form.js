import React from 'react';

import './guess-form.css';

export default function GuessForm(){
  return (
    <form>
      <input 
        type="number"
        name="userGuess"
        id="userGuess"
        className="text"
        min="1"
        max="100"
        autoComplete="off"></input>
      <button 
        type="submit"
        name="submit"
        id="guessButton"
        className="button">
        Guess
      </button>  
    </form>
  )

}
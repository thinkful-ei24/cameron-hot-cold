import React from 'react';

import './feedback.css';

export default function Feedback(props){
  return(
    <div id="feedback">{props.feedback}</div>
  );
}
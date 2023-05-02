import { useState, useEffect } from 'react';
import './daily.css';

const Daily = (props) => {
  const { text, setText } = props;

  return <div className="Daily">
    <textarea className="Daily__textarea" value={text} onChange={(e) => setText(e.target.value)}/>
  </div>
}

export default Daily;
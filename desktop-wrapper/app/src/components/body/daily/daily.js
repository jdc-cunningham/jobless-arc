import { useState, useEffect } from 'react';
import './daily.css';

const Daily = (props) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (text) {
      localStorage.setItem('daily-text', text);
    }
  }, [text]);

  useEffect(() => {
    const dailyText = localStorage.getItem('daily-text') || '';
    setText(dailyText);
  }, []);

  return <div className="Daily">
    <textarea className="Daily__textarea" value={text} onChange={(e) => setText(e.target.value)}/>
  </div>
}

export default Daily;
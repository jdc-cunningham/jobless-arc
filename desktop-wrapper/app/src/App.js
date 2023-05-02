import { useState, useEffect } from 'react';
import './App.css';
import TabbedHeader from './components/tabbed-header/tabbed-header';
import Daily from './components/body/daily/daily';

const App = () => {
  const tabs = {
    'daily': 'Daily',
    'job-hunting': 'Job Hunting',
    'freelance': 'Freelance'
  };

  const [activeTab, setActiveTab] = useState('daily');
  const [text, setText] = useState('');

  const getAppBody = () => {
    if (activeTab === 'daily') {
      return <Daily text={text} setText={setText} />
    }
  }

  useEffect(() => {
    if (text) {
      localStorage.setItem('daily-text', text);
    }
  }, [text])

  useEffect(() => {
    const dailyText = localStorage.getItem('daily-text') || '';
    setText(dailyText);
  }, []);

  return (
    <div className="App">
      <TabbedHeader
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="App__body">
        {getAppBody()}
      </div>
    </div>
  );
}

export default App;

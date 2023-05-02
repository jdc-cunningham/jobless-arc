import { useState, useEffect } from 'react';
import './App.css';
import TabbedHeader from './components/tabbed-header/tabbed-header';

const App = () => {
  const tabs = {
    'daily': 'Daily',
    'job-hunting': 'Job Hunting',
    'freelance': 'Freelance'
  };

  const [activeTab, setActiveTab] = useState('daily');

  return (
    <div className="App">
      <TabbedHeader
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}

export default App;

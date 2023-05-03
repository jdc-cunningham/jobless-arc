import { useState, useEffect } from 'react';
import './App.css';
import TabbedHeader from './components/tabbed-header/tabbed-header';
import Daily from './components/body/daily/daily';
import JobHunting from './components/body/job-hunting/job-hunting';

const App = () => {
  const tabs = {
    'daily': 'Daily',
    'job-hunting': 'Job Hunting',
    'freelance': 'Freelance'
  };

  const [activeTab, setActiveTab] = useState('daily');

  const getAppBody = () => {
    if (activeTab === 'daily') {
      return <Daily/>;
    }

    if (activeTab === 'job-hunting') {
      return <JobHunting/>;
    }
  }

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

import { useState, useEffect } from 'react';
import './tabbed-header.css';

const TabbedHeader = (props) => {
  const { tabs, activeTab, setActiveTab } = props;

  return <div className="tabbed-header">
    {Object.keys(tabs).map((tab, index) => (
      <div
        key={index}
        className={`tabbed-header__tab ${tab === activeTab ? 'active' : ''}`}
        onClick={() => setActiveTab(tab)}
      >
        {tabs[tab]}
      </div>
    ))}
  </div>
}

export default TabbedHeader;
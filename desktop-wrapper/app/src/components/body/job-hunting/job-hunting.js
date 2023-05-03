import { useState, useEffect } from 'react';
import './job-hunting.css';
import PlusIconDark from '../../../assets/icons/uxwing__plus-icon-dark.svg';
import PlusIconLight from '../../../assets/icons/uxwing__plus-icon-light.svg';

const JobHunting = (props) => {
  const [showAddJobAppModal, setShowJobAppModal] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    source: '',
    info: ''
  });

  const updateFormData = (data) => {
    setFormData(prevData => ({
      ...prevData,
      ...data
    }));
  }

  const addJobForm = <div className="JobHunting__add-job-form">
    <h2>Add new job application</h2>
    <button
      type="button"
      className="JobHunting__close-form-btn"
      title="close form" 
      onClick={() => setShowJobAppModal(false)}
    >
      <img src={PlusIconLight} alt="close form"/>
    </button>
    <input
      type="text"
      name="name"
      placeholder="name"
      value={formData.name}
      onChange={(e) => updateFormData({name: e.target.value})}
    />
    <input
      type="text"
      name="source"
      placeholder="source"
      value={formData.source}
      onChange={(e) => updateFormData({source: e.target.value})}
    />
    <textarea
      placeholder="info"
      value={formData.info}
      onChange={(e) => updateFormData({info: e.target.value})}
    />
    <button
      type="button"
      className="JobHunting__save-job-app-btn"
      title="save job app"
    >
      Save
    </button>
  </div>

  return <div className="JobHunting">
    <div className="JobHunting__sidebar">
      <button type="button" title="add job application" onClick={() => setShowJobAppModal(true)}>
        {/* crappy way to do this but svg not directly rendered, wrapped in img tag */}
        <img src={PlusIconDark} className="dark-plus-icon" alt="add job application"/>
        <img src={PlusIconLight} className="light-plus-icon" alt="add job application"/>
      </button>
    </div>
    <div className="JobHunting__body">
      {showAddJobAppModal && <div className="JobHunting__add-job">{addJobForm}</div>}
      {!showAddJobAppModal && <div className="JobHunting__job-apps"></div>}
    </div>
  </div>
}

export default JobHunting;
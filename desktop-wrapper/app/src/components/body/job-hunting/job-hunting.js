import { useState, useEffect } from 'react';
import './job-hunting.css';
import PlusIconDark from '../../../assets/icons/uxwing__plus-icon-dark.svg';
import PlusIconLight from '../../../assets/icons/uxwing__plus-icon-light.svg';

const JobHunting = (props) => {
  const [showAddJobAppModal, setShowJobAppModal] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    source: '',
    date: '',
    info: '',
    status: ''
  });
  const [editing, setEditing] = useState(0);

  const updateFormData = (data) => {
    setFormData(prevData => ({
      ...prevData,
      ...data
    }));
  }

  const addZero = (num) => {
    if (num < 10) {
      return `0${num}`;
    }

    return num;
  }

  // https://stackoverflow.com/a/2013332/2710227
  const ymd = () => {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    
    return addZero(month) + "-" + addZero(day) + "-" +  year;
  }

  const saveJob = () => {
    const jobId = Date.now();
    const jobAppDate = formData.date || ymd();
    const jobApps = JSON.parse(localStorage.getItem('job-apps')) || {};

    if (!(jobAppDate in jobApps)) {
      jobApps[jobAppDate] = [];
    }

    jobApps[jobAppDate].push({
      id: jobId,
      ...formData,
    });

    localStorage.setItem('job-apps', JSON.stringify(jobApps));

    setFormData({
      id: '',
      name: '',
      source: '',
      date: '',
      info: '',
      status: '',
    });

    setShowJobAppModal(false);
  }

  // you'd use form validation here eg. react-hook-form + yup schema validation
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
    <input
      type="text"
      name="date"
      placeholder="date applied m-d-Y (optional)"
      value={formData.date}
      onChange={(e) => updateFormData({date: e.target.value})}
    />
    <input
      type="text"
      name="status"
      placeholder="status eg. rejected"
      value={formData.status}
      onChange={(e) => updateFormData({status: e.target.value})}
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
      onClick={() => saveJob()}
    >
      Save
    </button>
  </div>

  const renderJobApps = () => {
    const jobApps = JSON.parse(localStorage.getItem('job-apps')) || {};

    return Object.keys(jobApps).sort().reverse().map((date, dateId) => (
      <div key={dateId} className="JobHunting__job-app-group">
        <h4 className="JobHunting__job-app-group-date">{date}</h4>
        {jobApps[date].reverse().map((jobApp, jobId) => (
          <div key={jobId} className="JobHunting__job-app">
            <button
              type="button"
              className="JobHunting__job-app-edit-btn"
              onClick={() => setEditing(jobApp.id)}
            >
              edit
            </button>
            <h3>{jobApp.name}</h3>
            <p>{jobApp.info}</p>
          </div> 
        ))}
      </div>
    ))
  }

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
      {!showAddJobAppModal && <div className="JobHunting__job-apps">{renderJobApps()}</div>}
    </div>
  </div>
}

export default JobHunting;
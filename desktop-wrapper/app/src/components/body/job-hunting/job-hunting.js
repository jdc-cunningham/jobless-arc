import { useState, useEffect } from 'react';
import './job-hunting.css';
import PlusIconDark from '../../../assets/icons/uxwing__plus-icon-dark.svg';
import PlusIconLight from '../../../assets/icons/uxwing__plus-icon-light.svg';

const JobHunting = (props) => {
  return <div className="JobHunting">
    <div className="JobHunting__sidebar">
      <button type="button" title="add job application">
        {/* crappy way to do this but svg not directly rendered, wrapped in img tag */}
        <img src={PlusIconDark} className="dark-plus-icon" alt="add job application"/>
        <img src={PlusIconLight} className="light-plus-icon" alt="add job application"/>
      </button>
    </div>
    <div className="JobHunting__body">
      
    </div>
  </div>
}

export default JobHunting;
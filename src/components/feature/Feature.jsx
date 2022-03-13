import React from 'react';
import './feature.css'

const Feature = ({ title, text }) => {
  return (
    <div className='ucsma__features-container__feature'>
      <div className='ucsma__features-container__feature-title'>
        <div></div>   {/* top-left gradient bar */}
        <h1>{title}</h1>
      </div>

      <div className="ucsma__features-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;

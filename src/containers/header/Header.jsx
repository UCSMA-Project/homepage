import React, { useState } from 'react';
import './header.css'
import header_iot from '../../assets/header_iot.png'

const Header = () => {
  /**
   * Setup useState hook for email input state varaible
   */
  const [emailInput, setEmailInput] = useState('');

  /**
   * Handles user clicking "Join Us" button event
   */
  const handleJoinUs = () => {
    console.log('User input email:', emailInput);
  }

  return (
    <div className='ucsma__header section__padding' id='home'>
      <div className='ucsma__header-content'>
        <h1 className='gradient__text'>Connect the world better with UCSMA</h1>

        <p>Do you want to know more about modifying kernel network driver to implement features such as rate control? Do you want to know how to keep track of the transmission timeline of the nodes while conducting experiments? We have all these interesting problems in UCSMA!</p>

        <div className='ucsma__header-content__input'>
          <input 
            type='email' 
            placeholder='Your Email' 
            value={emailInput} 
            onInput={e => setEmailInput(e.target.value)} 
          />
          <button type='button' onClick={handleJoinUs}>Join Us</button>
        </div>
      </div>
      
      <div className='ucsma__header-image'>
        <img src={header_iot} alt='iot' />
      </div>
    </div>
  );
};

export default Header;

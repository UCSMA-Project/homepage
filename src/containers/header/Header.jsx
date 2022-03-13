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

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, repellat! Harum quasi vitae molestias, eum quisquam blanditiis, odio perspiciatis reprehenderit rem sint consequuntur, tempora iusto! Officiis eos nulla quisquam perferendis?</p>

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

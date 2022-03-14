import React from 'react';
import { FaFax, FaEnvelope, FaPhone, FaLocationArrow } from 'react-icons/fa'
import './footer.css'
import ucsma_logo from '../../assets/ucsma_logo.png'

const Footer = () => {
  return (
    <div className='ucsma__footer section__padding'>
      <div className='ucsma__footer-heading'>
        <h1 className='gradient__text'>
          Do you want to step into the future and contribute now?
        </h1>
      </div>

      <div className='ucsma__footer-btn'>
        <p>Join Now</p>
      </div>

      <div className='ucsma__footer-links'>
        <div className="ucsma__footer-links_logo">
          <img src={ucsma_logo} alt='UCSMA Logo' />
          <p>40 St George St, Toronto, All Rights Reserved</p>
        </div>

        <div className="ucsma__footer-links_div">
          <h4>Links</h4>
          <p><a href='https://ucsma-project.github.io/docs/' target={'_blank'} rel={'noreferrer'}>
            Documentations
          </a></p>
          <p><a href='https://github.com/UCSMA-Project/' target={'_blank'} rel={'noreferrer'}>
            GitHub Organization
          </a></p>
          <p><a href='https://clnx.utoronto.ca/home.htm' target={'_blank'} rel={'noreferrer'}>
            Research Opportunities
          </a></p>
        </div>

        <div className="ucsma__footer-links_div">
          <h4>Get in Touch</h4>
          <p><FaLocationArrow style={{fontSize: '20px'}}/> &nbsp; BA5224, University of Toronto</p>
          <p><FaPhone style={{fontSize: '20px'}}/> &nbsp; (416) 978-1680</p>
          <p><FaFax style={{fontSize: '20px'}}/> &nbsp; (416) 978-1931</p>
          <p><FaEnvelope style={{fontSize: '20px'}}/> &nbsp; marbach@cs.toronto.edu</p>
        </div>
      </div>

      <div className="ucsma__footer-copyright">
        <p>© 2021 UCSMA. All rights reserved. </p>
      </div>
    </div>
  );
};

export default Footer;

import React from 'react';
import { DiGithubBadge, DiGithubFull } from 'react-icons/di'
import './navbar.css'
import ucsma_logo from '../../assets/ucsma_logo.png'

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wucsma'>What is UCSMA</a></p>
    <p><a href='#features'>Features</a></p>
    <p><a href='https://ucsma-project.github.io/docs/' target={'_blank'} rel={'noreferrer'}>Documentations</a></p>
  </>
)

const Navbar = () => {
  return (
    <div className='ucsma__navbar'>
      <div className='ucsma__navbar-links'>
        <div className='ucsma__navbar-links_logo'>
          <img src={ucsma_logo} alt='UCSMA Logo'></img>
        </div>

        <div className='ucsma__navbar-links_container'>
          <Menu />
        </div>
      </div>

      <div className='ucsma__navbar-github'>
        <p><a href='https://github.com/UCSMA-Project/' target={'_blank'} rel={'noreferrer'}>
          <DiGithubBadge style={{fontSize: '40px'}}/>
          <DiGithubFull style={{fontSize: '60px'}}/>
        </a></p>
      </div>

    </div>
  );
};

export default Navbar;

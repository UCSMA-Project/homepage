import React from 'react';
import { Feature } from '../../components';
import './whats-ucsma.css'

const WhatsUCSMA = () => {
  return (
    <div className='ucsma__whatucsma section__margin' id='wucsma'>
      <div className='ucsma__whatucsma-feature'>
        <Feature title={"What is UCSMA"} text={"One of the main challenges in creating this vision of the IoT is create the networking infrastructure that is able to provide the wireless networking connectivity on the scale that is required for the IoT. In our research group, we developed a novel wireless networking protocol that showed for the first time that it is possible to create a high-performance wireless networking infrastructure using simple, distributed networking protocols."}/>
      </div>

      <div className='ucsma__whatucsma-heading'>
        <h1 className='gradient__text'>Applications of UCSMA are <i>BOUNDLESS</i></h1>
        <p><a href='https://github.com/UCSMA-Project' target={'_blank'} rel={'noreferrer'}>
          Explore The Repository
        </a></p>
      </div>

      <div className='ucsma__whatucsma-container'>
        <Feature title={"Application 1"} text={"Smart Homes: Smart homes take both, convenience and home security, to the next level. Though there are different levels at which IoT is applied for smart homes, the best is the one that blends intelligent utility systems and entertainment together. "} />
        
        <Feature title={"Application 2"} text={"Self-driven Cars: The cars use several sensors and embedded systems connected to the Cloud and the internet to keep generating data and sending them to the Cloud for informed decision-making through Machine Learning."} />
        
        <Feature title={"Application 3"} text={"Industrial Internet: The Industrial Internet of Things consists of interconnected sensors, instruments, and other devices connected with computers’ industrial applications like manufacturing, energy management, etc."} />
      </div>
    </div>
  );
};

export default WhatsUCSMA;

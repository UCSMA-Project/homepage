import React from 'react';
import { Feature } from '../../components';
import './features.css';

const Features = () => {
  return (
    <div className='ucsma__features section__margin' id='features'>

      <div className='features-heading'>
        <h1 className='gradient__text'>The future is now and you just need to realize it. Here are the features we have in UCSMA: </h1>
      </div>

      <div className='features-container'>
        <div style={{'height': '75px'}}>
          <Feature title={"Feature 1"} text={"The rate control protocol is the key part of UCSMA, which attempts to maintain fairness among different nodes in an ad-hoc wireless network."} />
        </div>
        <div style={{'height': '75px'}}>
          <Feature title={"Feature 2"} text={"Packetspammer is a throughput-measurement tool that injects unencrypted broadcast packets over Wi-Fi. This utility is adapted from Andy Green’s Packetspammer."} />
        </div>
        <div style={{'height': '75px'}}>
          <Feature title={"Feature 3"} text={"Raspberry Pi GPIO: all nodes connect to a Raspberry Pi via GPIO and send a GPIO pulse once a packet has finished transmission."} />
        </div>
        <div style={{'height': '75px'}}>
          <Feature title={"Feature 4"} text={"Transmission Monitoring: keep track of the transmission timeline of the nodes while conducting experiments."} />
        </div>
      </div>
  </div>
  );
};

export default Features;

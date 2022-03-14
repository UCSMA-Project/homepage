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
        <Feature title={"Feature 1"} text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae assumenda reiciendis sit ad hic quisquam, ducimus officiis."} />
      
        <Feature title={"Feature 2"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam similique et totam, ipsam magni harum temporibus animi odio cupiditate alias accusamus esse officia voluptas aperiam a dolores facilis sit eveniet."} />
      
        <Feature title={"Feature 3"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, repellat!"} />

        <Feature title={"Feature 4"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, repellat!"} />
      </div>
  </div>
  );
};

export default Features;

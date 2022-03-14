import React from 'react';
import { Feature } from '../../components';
import './whats-ucsma.css'

const WhatsUCSMA = () => {
  return (
    <div className='ucsma__whatucsma section__margin' id='wucsma'>
      <div className='ucsma__whatucsma-feature'>
        <Feature title={"What is UCSMA"} text={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero necessitatibus ad esse saepe repellat assumenda id quibusdam eos iusto, reprehenderit officiis expedita. Possimus accusamus, velit nam beatae dolore, delectus similique mollitia odit hic est aliquam dolorem fuga tempore expedita ab. Aliquam laborum nemo molestiae omnis dolor recusandae commodi consequuntur dolorem voluptatibus. Hic ducimus, aut soluta aspernatur vel atque doloribus reprehenderit odio voluptatem laborum quaerat, optio fuga inventore explicabo voluptates sapiente eos cumque! Ab reiciendis illum praesentium, repudiandae eveniet ex obcaecati!"} />
      </div>

      <div className='ucsma__whatucsma-heading'>
        <h1 className='gradient__text'>Applications of UCSMA are <i>BOUNDLESS</i></h1>
        <p><a href='https://github.com/UCSMA-Project' target={'_blank'} rel={'noreferrer'}>
          Explore The Repository
        </a></p>
      </div>

      <div className='ucsma__whatucsma-container'>
        <Feature title={"Application 1"} text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae assumenda reiciendis sit ad hic quisquam, ducimus officiis."} />
        
        <Feature title={"Application 2"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam similique et totam, ipsam magni harum temporibus animi odio cupiditate alias accusamus esse officia voluptas aperiam a dolores facilis sit eveniet."} />
        
        <Feature title={"Application 3"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, repellat!"} />
      </div>
    </div>
  );
};

export default WhatsUCSMA;

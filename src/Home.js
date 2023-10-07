import React from 'react';
import './Home.css';
import { MovingText } from './MovingText';
import { Expand } from './Expand';
import { Connect } from './Connect';

export const Home =()=> {

    return(
        <div className='main'>
          <div className='hero'>
            <h2 className='wf'>Workflow.</h2>
            <div className='moveText'>
              <MovingText/>
            </div>
            <h2 className='dl'>Deliver.</h2>
          </div>
          <div className='work'>
            <h2 className='heading'>Recent Work</h2>
            <Expand 
            title="Belle Sylphy"
            content="Belle Sylphy is an Indian E-commerce brand which sells jewellery made of natural and recyclabale materials."
            />  
            <Expand 
            title="The Diary District"
            content="Belle Sylphy is an Indian E-commerce brand which sells jewellery made of natural and recyclabale materials."
            /> 
            <Expand 
            title="Outpulse Media"
            content="Belle Sylphy is an Indian E-commerce brand which sells jewellery made of natural and recyclabale materials."
            /> 
            <Expand 
            title="Redeco"
            content="Belle Sylphy is an Indian E-commerce brand which sells jewellery made of natural and recyclabale materials."
            /> 
            <Expand 
            title="HoodDripp"
            content="Belle Sylphy is an Indian E-commerce brand which sells jewellery made of natural and recyclabale materials."
            /> 
            <Expand 
            title="HoodDripp"
            content="Belle Sylphy is an Indian E-commerce brand which sells jewellery made of natural and recyclabale materials."
            /> 
            <Expand 
            title="HoodDripp"
            content="Belle Sylphy is an Indian E-commerce brand which sells jewellery made of natural and recyclabale materials."
            /> 
          </div>
          <Connect/>
        </div>
      );
}

export default Home;
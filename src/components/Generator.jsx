import React from 'react';
import SectionWrapper from './SectionWrapper';
import { WORKOUTS } from '../utils/soldier'

export default function Generator() {

  function Header(props){
    const {index, title, description} = props;
    
    const buttonKeys = Object.keys(WORKOUTS) 

    return (
        <div className='flex flex-col items-center py-20 gap-5 text-center'>
          <h2 className='font-bold text-4xl capitalize'> {index} {title} </h2>
          <p className='text-xl'>  {description}  </p>
          <div className='flex flex-wrap gap-10 text-lg'>
              {buttonKeys.map((element, index) => (
                    <button key={index} className='bg-slate-950 px-16 py-5 rounded-md'> {element} </button>
              ))}
          </div>
        </div>
    );
  }

  return (
    <SectionWrapper header={'generate your workout'} title = {['it\'s', 'huge', 'o\'Clock']}>
          <Header index = {'01'} title = {'pick your poison'} description = {'Select the workout you wish to endure.'} />
    </SectionWrapper>
  
  );
}




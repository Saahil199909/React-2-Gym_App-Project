import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { WORKOUTS } from '../utils/soldier'
import { split } from 'postcss/lib/list';
import Workout from './Workout';

export default function Generator() {
  
  const [split, setsplit] = useState('individual');
  // const [splitvalue, setsplitvalue] = useState('');
  const [dropdowncontent, setdropdowncontent] = useState([]);
  const [isDropdownVisible, setisDropdownVisible] = useState(false);

  const buttonKeys = Object.keys(WORKOUTS) 


  const handlesplit = (value) => {
    setsplit(value)
    if (isDropdownVisible == true && value !== 'individual') {
      setdropdowncontent(Object.keys(WORKOUTS[value]));
    }
    else if (isDropdownVisible == true){
      setdropdowncontent(WORKOUTS[value])
    }
  }
  
  const handlesplitvalue = (value) => {
    if (value === 'individual'){
      setdropdowncontent(WORKOUTS[value])
      setisDropdownVisible(!isDropdownVisible)
    }
    else if(WORKOUTS[value]){
      setdropdowncontent(Object.keys(WORKOUTS[value]));
      setisDropdownVisible(!isDropdownVisible);
      console.log(Object.keys(WORKOUTS[value]),"you there")
      console.log( typeof(WORKOUTS[value]), WORKOUTS[value],"you there")
    }
    else{
      setdropdowncontent([]);
      setisDropdownVisible(false);
    }
  }
   
  
  function Header(props){
    const {index, title, description} = props;

    return (
        <div className='flex flex-col items-center py-20 gap-5 text-center'>
          <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl capitalize'> {index} {title} </h2>
          <p className='text-sm sm:text-lg md:text-2xl'>  {description}  </p>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4  gap-10 text-lg'>
              {buttonKeys.map((element, index) => (
                    <button key={index} className='bg-slate-950 px-10 py-5 rounded-md text-xl border-blue-400 border-[2px]' 
                              onClick={() => handlesplit(element)}> {element} </button>
              ))}
          </div>
        </div>
    );
  }

  function Header2(props){
    const {index, title, description} = props;

    return (
        <div className='flex flex-col items-center py-20 gap-5 text-center'>
          <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl capitalize'> {index} {title} </h2>
          <p className='text-sm sm:text-lg md:text-2xl'>  {description}  </p>
          <div className='text-lg w-2/3'>    
              <button className='bg-slate-950 px-10 py-5 rounded-md text-xl w-full flex justify-between border-blue-400 border-[2px]' 
                        onClick={() => handlesplitvalue(split)}>  
                        <span className='flex-grow capitalize font-black text-sm lg:text-xl'> Select muscle group  </span>
                        <i className="fa-solid fa-caret-down"></i>
                        </button>
              {
                isDropdownVisible && (
                  dropdowncontent.map((element, index) => (
                    <div key = {index} className='bg-slate-950 px-10 py-5 rounded-md text-xl w-full'>
                      {element}
                    </div>
                  )
                  )
                )
              }

          </div>
        </div>
    );
  }

  return (
    <SectionWrapper header={'generate your workout'} title = {['it\'s', 'huge', 'o\'Clock']}>
          <Header index = {'01'} title = {'pick your poison'} description = {'Select the workout you wish to endure.'} />
          <Header2 index = {'02'} title = {'Lock on Targets'} description = {'Select the muscles judged for annihilation'} />
    </SectionWrapper>
  
  );
}




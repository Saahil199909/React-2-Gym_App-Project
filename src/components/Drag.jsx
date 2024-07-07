import React, { useState, useRef } from 'react'
import Draggable from 'react-draggable';

export default function Drag(props) {
    const {index, title, description} = props;

    const [dragValue, setDragValue] = useState('hypertrophy')

    const handleDrag = (e, data) => {
        const parentWidth = data.node.parentNode.offsetWidth;
        const thirdWidth = parentWidth / 3;

        if (data.x < thirdWidth - (parentWidth / 2)) {
            setDragValue('strength');
        } else if (data.x < thirdWidth * 2 - (parentWidth / 2)) {
            setDragValue('hypertrophy');
        } else {
            setDragValue('endurance');
        }
    };

    return (

    <div className='flex flex-col items-center py-20 gap-5 text-center'>
    <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl capitalize'> {index} {title} </h2>
    <p className='text-sm sm:text-lg md:text-2xl'>  {description}  </p>
    <div className='text-lg w-2/3'> 
        <div className='flex justify-between px-2 md:px-4 lg:px-8 mt-10 mb-3 font-bold text-xs md:text-2xl capitalize' >
            <span>strength</span>
            <span>hypertrophy</span>
            <span>endurance</span>
        </div>

        <div className='bg-slate-950 px-10 py-4 rounded-md text-xl w-full flex justify-center border-blue-400 border-[2px]'>
            <div className='relative w-full flex justify-center'>
                <Draggable axis="x" bounds="parent" onDrag={handleDrag}>
                    <div className='w-[8px] h-[35px] bg-white'></div>
                </Draggable>
            </div>
        </div>

        <div className='mt-4'>
                Selected Value: {dragValue}
            </div>

        <button className='my-10 bg-slate-950 px-8 py-4 rounded-md border-[2px] border-blue-400 blueShadow duration-200'> Formulate </button>
    </div>
  </div>
  )
}







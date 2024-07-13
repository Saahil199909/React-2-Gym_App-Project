import React from 'react';

export default function ExerciseCards(props) {
  const { formattedWorkouts } = props;

  return (
    <div>
      {formattedWorkouts.finalExcerciselist.map((exercise, index) => ( // corrected map function syntax
        <div key={index} className='flex justify-center'>
          <div className='w-[95%] bg-slate-950 m-2 rounded-md'>
            <header className='flex justify-between p-1 md:p-5 text-center sm:text-xs md:text-3xl'>
              <h1 className='font-black'> 01 </h1>
              <span className=' font-bold capitalize'> {exercise.name.replace(/_/g, ' ')}</span>
              <h1 className='font-normal'>Compound</h1>
            </header>

            <div className='flex flex-col px-1 md:px-5 my-3 text-sm sm:text-2xl font-semibold'>
              <h2>Muscle Groups </h2> 
              <h2>{exercise.muscles[0]}</h2> 
            </div>

            <footer className='flex justify-between flex-col gap-2 sm:flex-row p-1 md:p-5 text-lg sm:text-2xl'>
              <div className='sm:w-[24%]  p-2  border border-white-800 rounded'>
                <p> Reps </p>
                <p className='font-medium'> 4 </p>
              </div>
              <div className='sm:w-[24%]  p-2  border border-white-800 rounded'>
                <p> Rest </p> 
                <p className='font-medium'>120</p>
              </div>
              <div className='sm:w-[24%]  p-2  border border-white-800 rounded'>
                <p> Tempo  </p>
                <p className='font-medium'>2 2 2</p>
              </div>
              <div className='sm:w-[24%]  p-2  border border-white-800 rounded'>
                <p> Sets Completed  </p>
                <p className='font-medium'>3 / 5</p>
              </div>
            </footer>
          </div>
        </div>
      ))}
    </div>
  );
}

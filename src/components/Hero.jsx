import React from 'react'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-10  text-center max-w-[800px] mx-auto'>  
      <div className='flex flex-col gap-4'>
          <p> IT'S  TIME TO GET </p>
          <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'> Swole <span className='text-blue-400'> Normous</span> </h1>
      </div>
      <p className='text-sm md:text-base font-light'> I hereby acknowledge that I may become <span className='text-blue-400 font-medium' > unbelievably swolenormous </span>and accept all 
      risks of becoming the local <span className='text-blue-400 font-medium'> mass montrosity </span>, afflicated with severe body dismorphia, 
      unable to fit through doors  </p>
      <button className='bg-slate-950 px-8 py-4 rounded-md border-[2px] border-blue-400 blueShadow duration-200'> Accept & Begin </button>
    </div>
  )
}

import React from 'react'

export default function WorkoutStatic(props) {
    const {header, title} = props

  return (
  <section className='min-h-screen'>
            <div className='bg-slate-950 flex flex-col items-center py-10 gap-5 text-center'>
                <p className='font-medium text-xs sm:text-sm md:text-base lg:text-2xl uppercase'>{header}</p> 
                <h1 className='font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl '>{title[0]} 
                <span className='uppercase text-blue-400'> {title[1]}</span> {title[2]}</h1>
            </div>
        </section>
  )
}

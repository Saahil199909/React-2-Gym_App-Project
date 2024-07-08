import React from 'react'
import WorkoutStatic from './WorkoutStatic'

export default function Workout(props) {

  const {dragValue, selectedMuscle} = props

  return (
    <div>
        <WorkoutStatic header={'Welome to '} title = {['THE', 'Danger', 'Zone']}>

        </WorkoutStatic>
        {/* {dragValue}
        {selectedMuscle} */}
    </div>
  )
}

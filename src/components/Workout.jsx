import React from 'react'

export default function Workout(props) {

  const {dragValue, selectedMuscle} = props

  return (
    <div>
        Workout
        {dragValue}
        {selectedMuscle}
    </div>
  )
}

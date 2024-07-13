import React from 'react'
import WorkoutStatic from './WorkoutStatic'
import ExceriseCards from './ExceriseCards'

export default function Workout(props) {

  const {formattedWorkouts} = props
  // console.log(formattedWorkouts,"WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWw")

  return (
    <div>
        <WorkoutStatic header={'Welome to '} title = {['THE', 'Danger', 'Zone']} >
            <ExceriseCards formattedWorkouts= {formattedWorkouts}/>
        </WorkoutStatic>
    </div>
  )
}

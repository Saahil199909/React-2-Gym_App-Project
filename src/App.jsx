import { useState } from 'react'
import Hero from  './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { excerciseGenerator } from './utils/excerciseGeneratorFunc'

function App() {
  const [count, setCount] = useState(0)
  const [split, setsplit] = useState('individual');
  const [dropdowncontent, setdropdowncontent] = useState([]);
  const [isDropdownVisible, setisDropdownVisible] = useState(false);
  const [dragValue, setDragValue] = useState('hypertrophy')
  const [selectedMuscle, setSelectedMuscle] = useState([])
  const [formattedWorkouts, setFormattedWorkouts] = useState({
    finalExcerciselist: []
  })

  function gettingWorkouts(dragValue, selectedMuscle){
    const [finalExcerciselist, AccessoryExercises1, CompoundExercises2, AccessoryExercises2, CompoundExercises3, AccessoryExercises3] = excerciseGenerator(dragValue, selectedMuscle)
    setFormattedWorkouts({...formattedWorkouts, finalExcerciselist: finalExcerciselist})
  }


  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white'>
      <Hero />
      <Generator split= {split} setsplit={setsplit} dropdowncontent= {dropdowncontent} setdropdowncontent= {setdropdowncontent} 
                    isDropdownVisible= {isDropdownVisible} setisDropdownVisible= {setisDropdownVisible}
                    dragValue= {dragValue} setDragValue= {setDragValue} selectedMuscle = {selectedMuscle} setselectedMuscle= {setSelectedMuscle}
                    gettingWorkouts= {() => {gettingWorkouts(dragValue, selectedMuscle)}}  />
      <Workout formattedWorkouts= {formattedWorkouts}/>
    </main>
  )
}

export default App

import { useState } from 'react'
import Hero from  './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'

function App() {
  const [count, setCount] = useState(0)
  const [split, setsplit] = useState('individual');
  const [dropdowncontent, setdropdowncontent] = useState([]);
  const [isDropdownVisible, setisDropdownVisible] = useState(false);
  const [dragValue, setDragValue] = useState('hypertrophy')
  const [selectedMuscle, setSelectedMuscle] = useState([])

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white'>
      <Hero />
      <Generator split= {split} setsplit={setsplit} dropdowncontent= {dropdowncontent} setdropdowncontent= {setdropdowncontent} 
                    isDropdownVisible= {isDropdownVisible} setisDropdownVisible= {setisDropdownVisible}
                    dragValue= {dragValue} setDragValue= {setDragValue} selectedMuscle = {selectedMuscle} setselectedMuscle= {setSelectedMuscle}  />
      <Workout dragValue={dragValue} selectedMuscle= {selectedMuscle} />
    </main>
  )
}

export default App

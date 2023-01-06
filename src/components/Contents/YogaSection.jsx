import React from 'react'
import '../../css/YogaSectionContainer.css'
import SelectYogaCat from './SelectYogaCat'
import {Routes,Route} from 'react-router-dom'
import PlankPose from '../Exercises/YogaPoses/PlankPose'
import BegginerYoga from '../Exercises/BegginerYoga/BeginnerYoga'
import StartBeginner from '../BeginnerPlan/StartBeginner'
import ChairPose from '../Exercises/YogaPoses/ChairPose'

const YogaSection = () => {
  return (


<Routes>
      <Route path='/*' element={<SelectYogaCat/>}/>
      <Route path='/begginer-yoga' element={<BegginerYoga/>} />
      <Route path='/begginer-yoga/training' element={<StartBeginner/>} />
      <Route path='/plank-pose' element={<PlankPose/>} />
      <Route path='/chair-pose' element={<ChairPose/>} />
    </Routes>


  )
}

export default YogaSection
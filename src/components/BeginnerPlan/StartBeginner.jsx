import React from 'react'
import {Link,Routes,Route} from 'react-router-dom'
import PlankPoseBeg from './PlankPoseBeg'
import TreePoseBeg from './TreePoseBeg'

const StartBeginner = () => {
  return (
    <Routes>
        <Route path='/' element={<PlankPoseBeg/>} />
        <Route path='/chair' element={<TreePoseBeg/>} />
    </Routes>
  )
}

export default StartBeginner
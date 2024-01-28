import { useState } from 'react'
import React from 'react'
import './App.css'

import Task from "./Component/Task"

export const ToggleTheme = React.createContext()  
function App() {
  
  const [state,setState] = useState(true)
  
  const handleToggle = ()=>{
    setState(state=>!state)
  }
  
  return (
    <>
     
      <ToggleTheme.Provider value={state}>
        <button onClick={handleToggle}>Toggle</button>
        <Task />
      </ToggleTheme.Provider>
    </>
  )
}

export default App
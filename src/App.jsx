import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import { useMode } from './ModeProvider/ModeProvider'


function App() {
  const { mode } = useMode()
  return (
    <>
      <div className={`${mode=='dark'?'text-white bg-darkmodebg':'text-text bg-main'}`}>
        <Router>
          <Routes>
            <Route path='/' Component={Homepage}></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App

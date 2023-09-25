import { useState } from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Homepage from './Pages/Homepage'


function App() {
 

  return (
    <>
      <div>
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

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StartPage from './Pages/StartPage/StartPage'
import Intro from './Pages/Intro/Intro'
import About from './Pages/About/About'
import Levels from './Pages/Levels/Levels'
import { createBrowserRouter, Route, Routes, RouterProvider  } from 'react-router-dom'
import Signup from './Pages/Signup/Signup'
import Login from './Pages/Login/Login'
import Question from './Pages/Question/Question'
import TotalScore from './Pages/TotalScore/TotalScore'


function App() {
 
    

  return (
    <>
   <Routes>
  
    <Route path='/' element={<Intro />} />
    <Route path='/about' element={<About />}  />
    <Route path='/startpage' element={<StartPage />} />
    <Route path='/levels' element={<Levels />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/login' element={<Login />} />
    <Route path='/totalscore' element={<TotalScore />} />
    <Route path='/question' element={<Question />} />
    
   </Routes>


    </>
  )
}

export default App

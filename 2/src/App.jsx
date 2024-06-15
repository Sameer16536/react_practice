import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'

function App() {
  

  return (


    <div>
      
      <div>
        <BrowserRouter>
        <AppBar/>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>

  )
}

const AppBar =()=>{
  const navigate = useNavigate()
  return(
    <div>
      <div style={{ backgroundColor: "blue" }}>
        <button onClick={()=>{
          // window.location.href="/";
          navigate("/")
        }}>Home</button>
        <button onClick={()=>{
          // window.location.href="/dashboard";
          navigate("/dashboard")
        }}>Dashboard</button>
      </div>
      
    </div>
  )
}
export default App

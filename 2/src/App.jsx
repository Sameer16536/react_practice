import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'

function App() {


  return (

    <div>
      <div style={{ backgroundColor: "blue" }}>
        {/* <button onClick={()=>{
          window.location.href="/";
        }}>Home</button>
        <button onClick={()=>{
          window.location.href="/dashboard";
        }}>Dashboard</button> */}
      </div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>

  )
}

export default App

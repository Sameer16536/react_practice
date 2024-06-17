import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[bgColor,setBgColor]=useState('white')

  const colorChanger =(color)=>{
    setBgColor(color)
  } 

  return (
    <div className='background-changer' style={{backgroundColor: bgColor}}>
      <button className="color-button red" onClick={()=>{colorChanger('red')}}>Red</button>
      <button className="color-button yellow" onClick={()=>{colorChanger('yellow')}}>Yellow</button>
      <button className="color-button black" onClick={()=>{colorChanger('black')}}>Black</button>
      <button className="color-button purple" onClick={()=>{colorChanger('purple')}}>Purple</button>
      <button className="color-button blue" onClick={()=>{colorChanger('blue')}}>Blue</button>
      <button className="color-button green" onClick={()=>{colorChanger('green')}}>Green</button>
      <button className="color-button default" onClick={()=>{colorChanger('white')}}>Default</button>
    </div>
  )
}

export default App

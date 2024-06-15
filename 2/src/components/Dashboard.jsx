import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const handleClick =()=>{
    navigate('/')
  }
  return (
    <div>Dashboard
      <button onClick={handleClick}>Click to Navigate</button>
    </div>
  )
}

export default Dashboard
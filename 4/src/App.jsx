import { useState } from 'react'
import { CountContext } from './context'

import './App.css'
import { useContext } from 'react'
//Context API solves the issue of Prop Drilling
function App() {
  const [count, setCount] = useState(0)
//Wrap anyone that wants to use the teleported value with inside a Provider
  return (
    <>
    <CountContext.Provider value={count}>
      <Count  count={count} setCount={setCount}/>
      </CountContext.Provider>
    </>
  )
}

const Count = ({setCount}) => {
  return (
    <div>
      <CountRenderer   />
      <Button  setCount={setCount}></Button>
    </div>
    
  )
}

const CountRenderer =()=>{
  //How to get the teleported value?
  //Soln-->
  const  count = useContext(CountContext)

  return(
    <div>
      <h1>Count: {count}</h1>
    </div>
  )
}

const Button = ({setCount}) => {
  const  count = useContext(CountContext)
  return (<div>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrease</button>
  </div>

  )
}

export default App

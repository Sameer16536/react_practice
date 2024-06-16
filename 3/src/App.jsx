import { useState } from 'react'

import './App.css'
//Prop Drilling
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Count  count={count} setCount={setCount}/>
      
    </>
  )
}

//Count Component doesnt really need Setcount but the Button Component needs it so we have to pass it '
// as Props in Count Component // This makes the Code ugly if there are multiple props required at the bottom lvl 
const Count = ({count,setCount}) => {
  return (
    <div>
      <h1>Count: {count}</h1>
      <Button count={count} setCount={setCount}></Button>
    </div>
    
  )
}

const Button = ({count,setCount}) => {
  return (<div>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrease</button>
  </div>

  )
}

export default App

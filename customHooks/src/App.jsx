import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

//Custom hook
const useTodos =()=>{
  //Loader
  const [ loading, setLoading] = useState(true)
  const [todos, setTodos] = useState([])
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(res=>{
      setTodos(res.data.todos)
      //If the data is fetched successfully then::
      setLoading(false)
    })
  },[])
  return{
    todos:todos,
    loading:loading
  } 
}

function App() {
  const {todos,loading} = useTodos()

  if(loading){
    return <div>
      Loading...........
    </div>
  }

  return (
    <>
      {todos.map(todo=><Track todo={todo}/>)}

          </>
  )
}
const Track =({todo})=>{
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}
export default App

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import { Profile } from './Profile'

//Custom hook
const useTodos =(n)=>{
  //Loader
  const [ loading, setLoading] = useState(true)
  const [todos, setTodos] = useState([])

  //auto refresh:
  const getData = ()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(res=>{
      setTodos(res.data.todos)
      //If the data is fetched successfully then::
      setLoading(false)
    })
  }


  useEffect(()=>{
    setInterval(()=>{
      getData()
    },n*1000)
    //Cleanup func:
    getData()
  },[n])
  return{
    todos:todos,
    loading:loading
  } 
}

function App() {
  const {todos,loading} = useTodos(5)

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
    <br />
    <Profile/>
  </div>
}
export default App

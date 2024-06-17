import Profile from '../components/Profile'
import './App.css' 
import {RecoilRoot} from 'recoil'
function App() {
 

  return (
    <div className='App'>
    
    <RecoilRoot>
      <Profile />
    </RecoilRoot>
      
    </div>
  )
}

export default App

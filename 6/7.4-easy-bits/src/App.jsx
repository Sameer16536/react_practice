
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector,  } from './atoms'
import { useMemo } from 'react'
//RecoilRoot

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const networkNotificationCount =useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const notificationsAtomCount = useRecoilValue(notificationsAtom)
  const [messagingAtomCount,setmessagingAtomCount] = useRecoilState(messagingAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)


  // const totalNotificationCount = useMemo(() => {
  //   return networkNotificationCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount;
  // }, [networkNotificationCount, jobsAtomCount, notificationsAtomCount, messagingAtomCount]) 

  return (
    <>
      <button>Home</button>

      <button>My Network ({networkNotificationCount >=100  ? "99+" :networkNotificationCount})</button>
      <button>Jobs({jobsAtomCount})</button>
      <button>Messaging({messagingAtomCount})</button>
      <button>Notifications({notificationsAtomCount})</button>

      <button>Me({totalNotificationCount})</button>

      <button onClick={()=>{
        setmessagingAtomCount(messagingAtomCount+1)
      }}>Add a message</button>
    </>
  )
}

export default App

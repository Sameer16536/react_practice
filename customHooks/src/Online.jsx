
import React, { useEffect, useState } from 'react'

//Brower Functionality related hooks::
const useIsOnline =()=>{
    const [isOnline,setIsOnline]= useState(window.navigator.onLine)

    useEffect(()=>{
        window.addEventListener('online',setIsOnline(true))
        window.addEventListener('offline',setIsOnline(false))
    },[])
    return isOnline
}



const Online = () => {
    const isOnline = useIsOnline(5)
  return (
    <div>{isOnline?"You are online Nigga": "You are offline"}</div>

  )
}

export default Online
import React, { createContext, useContext, useState } from 'react'
import { useCookies } from 'react-cookie'

const GlobalContext = createContext({})

export const AppContextWrapper = (props) => {
  const [cookies, ,] = useCookies(["user"])
  const [user, setUser] = useState(cookies.user)
  return (
    <GlobalContext.Provider
      value ={{
        user, setUser,
      }} 
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export default function useAppContext() {
    return useContext(GlobalContext)
}
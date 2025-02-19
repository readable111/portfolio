import React, { Component, createContext } from 'react'

interface GlobalState {
  user: any,
  updateUser: (user: any) => void,
  isLoggedIn: boolean
}

const GlobalContext = createContext<GlobalState>({
  user: "Guest",
  updateUser: () => { },
  isLoggedIn: false
})

export default GlobalContext

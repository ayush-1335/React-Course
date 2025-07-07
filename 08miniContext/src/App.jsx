import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login/Login'
import Profile from './Components/Profile/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1> Mini Context </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App

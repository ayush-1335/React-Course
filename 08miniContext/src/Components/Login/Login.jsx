import React, { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../../Context/UserContext'

function Login() {

    const [username, setUserame] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
        <h2>Login</h2>

        <input type="text"
        value={username} 
        onChange={(e) => setUserame(e.target.value)}
        name="username" />

        { " "}

        <input type="text" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        name="password" />

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
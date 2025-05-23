import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../contexts/UserContext'

function Login() {
const [username,setUsername]= useState("")
const [password,setPassword]= useState("")
const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
      e.preventDefault()
      setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='Enter your name' value={username} onChange={(e)=>setUsername(e.target.value)} />
        {'  '}
        <input type="text" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default Login
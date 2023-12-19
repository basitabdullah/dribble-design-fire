import React, { useState } from 'react'
import "./login.scss"
import { auth } from '../../firebase'
import {  signInWithEmailAndPassword } from "firebase/auth";
import {  useNavigate } from 'react-router-dom';
const Login = () => {
  const [error , setError] = useState(false)
  const [email ,setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
 const handleSubmit =(e)=>{
   e.preventDefault()
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    navigate("/")
  })
  .catch((error) => {
   setError(true)
  });

 }
  return (
    <div className='login'>
    <form onSubmit={handleSubmit} >
        <p>Login Here...</p>
        <input type="email" placeholder='Email' onChange={e=> setEmail(e.target.value)} />
        <input type="password" placeholder='Password' onChange={e=> setPassword(e.target.value)} />
        {error && <span>Wrong email or password!</span>}
        <button  type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
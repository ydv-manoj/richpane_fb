import { useState } from 'react'
import {useLogin} from '../hooks/useLogin'
import  {useNavigate}  from 'react-router-dom';


// styles
import  './login.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isPending} = useLogin()
  const history = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
    history('/fbconnect')
  }



  return (
    <div className="container_login">
    <>
    <form onSubmit={handleSubmit} className='login-form'>
      <h2>Login to your account</h2>
      <label>
        <span>Email:</span>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
        />
      </label>
      {/* <label className='check'>
        <input 
        type="checkbox"
        />
        <span>Remember Me</span>
      </label> */}
      { !isPending && <button className="btn">Login</button> }
      <p className='acc'> New to myApp? <a href="/signup">Sign up</a></p>
      { isPending && <button className="btn" disabled>loading</button> }
      { error && <p>{error}</p> }
    </form>
       
    </>
    </div>
  )
}
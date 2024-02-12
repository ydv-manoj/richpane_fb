import { useState } from 'react'
import {useLogin} from '../hooks/useLogin'
import  {useNavigate}  from 'react-router-dom';
import GoogleButton from 'react-google-button'

// styles
import  './login.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isPending,signInWithGoogle } = useLogin()
  const history = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
    history('/dashboard')
  }

  const signInWithGoogleAcc=async(e)=>{
    e.preventDefault();
    try{
      await signInWithGoogle();
      history('/dashboard')
    }catch(err){
      console.log(err)
    }
  }


  return (
    <div className="container_login">
    <>
    <form onSubmit={handleSubmit} className='login-form'>
      <h2>login</h2>
      <label>
        <span>email:</span>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
        />
      </label>
      { !isPending && <button className="btn">Login</button> }
      <p> Don't have an account? <a href="/signup">Sign up</a></p>
      { isPending && <button className="btn" disabled>loading</button> }
      { error && <p>{error}</p> }
    </form>
    

<p>OR</p>
    {/* <button className="btn" onClick={signInWithGoogleAcc}>sign in with google</button> */}
    <div className="login_but" >
      <GoogleButton
      onClick={signInWithGoogleAcc}
      />
    </div>
    
   
    </>
    </div>
  )
}
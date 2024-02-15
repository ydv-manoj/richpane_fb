import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import  {useNavigate}  from 'react-router-dom';
import {useFirestore} from '../hooks/useFirestore'


// styles
import './Signup.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { signup, isPending, error } = useSignup();
  const history=useNavigate();
  const { addDocument} = useFirestore('userdata')
  

  
  //sign up using the useSignup custom hook
  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      await signup(email, password, displayName) 

      //adding data of user to firebase database
      addDocument({
        Name:displayName,
        Email_Id:email,
        password:password,
      })

      //routing to dashboard on successfull signup
      history.push('/fbconnect');
    }
    catch(error){
      console.error("Signup Error:", error);
    }
  }



  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Create Account</h2>
      <label>
        <span>Name:</span>
        <input
          required
          type="text" 
          onChange={(e) => setDisplayName(e.target.value)} 
          value={displayName}
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          required 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          required
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password}
        />
      </label>
      {!isPending && <button className="btn">Sign up</button>}
      <p>Already have an account? <a href="/">Login</a></p>
      {/* loading time */}
      {isPending && <button className="btn" disabled>loading</button>}
      {/* show error*/}
      {error && <div className="error">{error}</div>}
    </form>
  )
}

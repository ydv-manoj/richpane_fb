import React from 'react'
import './fbconnection.css'
import { useLogin } from '../hooks/useLogin';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

export default function FBconnection() {
    const { error, isPending ,signInWithFacebook} = useLogin();
    const {user} = useAuthContext();
    const history=useNavigate();
    const handleFacebook=async(e)=>{
        e.preventDefault();
        try{
          await signInWithFacebook();
          history('/dashboard')
          console.log(user);
        }catch(err){
          console.log(err)
        }
    }
  return (
    <div>
        <div className='fb-int'>
            <p>Facebook page integration</p>
            <button style={{cursor:"pointer"}} onClick={handleFacebook}>Connect Page</button>
            {error && <p>{error}</p>}
        </div>
    </div>
  )
}

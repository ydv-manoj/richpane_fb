import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
import './fbconnection.css'

export default function Deleteormessage() {
    const {logout,error} = useLogout();
    const {user}=useAuthContext();
    const history=useNavigate();
    const handleLogout=()=>{
        logout();
        history('/login')
    }
  return (  
    <div>
        <div className='fb-int1'>
            <p>Facebook page integration</p>
            <p>Integrated Page: <b>Amazon Business</b></p>
            <button className='btn1' onClick={handleLogout}>Delete Integration</button>
            {user && <button className='btn2'><a href='/convo'>Reply to Messages</a></button>}
            {error && <p>{error}</p>}
        </div>
    </div>
  )
}

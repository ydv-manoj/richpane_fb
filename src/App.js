import './App.css';
import Login from './login/Login';
import {useAuthContext} from './hooks/useAuthContext'
import {Routes,Route} from "react-router-dom"
import Signup from './signup/Signup';
import FBconnection from './Fbconnect/fbconnection';
import Deleteormessage from './Fbconnect/deleteormessage';
import AgentScreen from './dashboard/AgentScreen';


function App() {
  const {user} = useAuthContext();
  return (
    <div className="App">
       <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            {user && <Route path='/fbconnect' element={<FBconnection/>}/>} 
            {user && <Route path='/dashboard' element={<Deleteormessage/>}/>}
            {user && <Route path='/convo' element={<AgentScreen/>}/>}
        </Routes>     
    </div>
  );
}

export default App;

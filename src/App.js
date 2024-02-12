import './App.css';
import Login from './login/Login';
import {useAuthContext} from './hooks/useAuthContext'
import {Routes,Route} from "react-router-dom"
import Dashboard from './components/dashboard';
import Signup from './signup/Signup';


function App() {
  const {user} = useAuthContext();
  return (
    <div className="App">
       <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            {user && <Route path='/dashboard' element={<Dashboard/>}/>} 
        </Routes>     
    </div>
  );
}

export default App;

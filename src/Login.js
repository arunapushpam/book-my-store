import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navi=useNavigate();

  const handleInput = (event) => {
    if (event.target.name === "userName") {
      setUserName(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleLogin = () => {
    if (userName == "" && password == "") {
      alert("please fill the userName ");
      alert("pleace fill the password");
    } else if (userName == "") {
      alert("please fill the userName");
    } else if (password == "") {
      alert("pleace fill the password");
    } else if (userName != "" && password != "") {
      navi("/Home");
    }
  };
      
  
  return (
     
    
    <div className='inp'>
     
      <div className='logo'>
         <TextField
          id="outlined-password-input"
          label="userName"
          type="userName"
          name="userName"
          autoComplete="current-password" onChange={handleInput}
        />
         </div>
         <div className='logo'>
         <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password" 
          onChange={handleInput}
        />
         </div >
         <div className='btn'>
         <Button variant="contained" onClick={handleLogin} >Contained</Button>
         </div>
      
  </div>  
  )

}

export default Login

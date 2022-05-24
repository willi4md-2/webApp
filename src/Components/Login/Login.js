import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {login} from '../Reducers/user';
import {setActive} from '../Reducers/active';

import {db} from '../../firebase-config.js';
import { collection, getDocs } from 'firebase/firestore';

import Box from '@mui/material/Box';
import { Typography, TextField, Button, InputAdornment, IconButton, Tooltip } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import signInImage from '../../Images/logo2.png';
import './Login.css';

function Login() {

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const dispatch = useDispatch();

  const [loginSuccessful, setLoginSuccessful] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [newUsername, setUsername] = useState("");
  const [newPassword, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const usersCollectionRef = collection(db, "users");

    const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    }

    getUsers()
  },  []);

  const handleUsernameValidation = (e) => {
    // Verify Password is not blank
    if (e.target.value === "")
    {
        setUsernameError(true);
        setUsernameErrorMessage("Username cannot be empty.");
        return false;
    }

    // Attempt to verify the account based on current username and password
    try
    {
      let curUser = users.filter(user => user.username === e.target.value);

      // Verify that the given username exists and then verify that the given password matches the stored password.
      if (curUser.filter(user => user.username === e.target.value)[0].password === newPassword)
      {
        setLoginSuccessful(true);
      }
    }
    catch (error)
    {
      console.log(error);
    }

    setUsernameError(false);
  }

  const handlePasswordValidation = (e) => {
    if (e.target.value === "")
    {
        setPasswordError(true);
        setPasswordErrorMessage("Password cannot be empty.");
        return false;
    }

    // Attempt to verify the account based on current username and password
    try
    {
      let curUser = users.filter(user => user.username === newUsername);

      // Verify that the given username exists and then verify that the given password matches the stored password.
      if (curUser.filter(user => user.username === newUsername)[0].password === e.target.value)
      {
        setLoginSuccessful(true);
      }
    }
    catch (error)
    {
      console.log(error);
    }

    setPasswordError(false);
  }

  const submitForm = () => {

    if (loginSuccessful)
    {
        dispatch(login( {username: newUsername, password: newPassword}  ));
        dispatch(setActive({isActive: true}));
    }
    else
    {
      setPasswordError(true);
      setPasswordErrorMessage("Please enter a valid password.");  
    }

    if (newUsername === "")
    {
        setUsernameError(true);
        setUsernameErrorMessage("Username cannot be empty.");
    }

  }


  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
      <Box 
        component="img"
        src={signInImage}
        sx={{height: 'auto', marginBottom: '16px', mt: '16px', backgroundColor: '#1c1c1c',  width: 'auto', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '10px', pt: '10px'}}
       />
        <Typography sx={{fontSize: '23px', fontWeight: 'bold', color: 'rgb(51, 51, 51)'}}>Sign into your Best Promo account</Typography>
      
        <TextField
          sx={{marginTop: '10px', height: '45px', width: '25%', marginBottom: '40px'}}
          helperText={usernameError ? usernameErrorMessage : ""}
          error={usernameError ? true : false}
          label="Username"
          variant="outlined"
          onInput={(e) => {
            setUsername(e.target.value);
            handleUsernameValidation(e);
          }}
        />
      
        <TextField 
          sx={{height: '45px', width: '25%', marginBottom: '16px'}}
          helperText={passwordError ? passwordErrorMessage : ""}
          error={passwordError ? true : false}
          type={showPassword ? "text" : "password"}
          id="outlined-basic" 
          label="Password" 
          onInput={(e) => {
            setPassword(e.target.value);
            handlePasswordValidation(e);
          }}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />

      {/* Remember Me Section */}
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '20px', width: '25%'}}>
        <Tooltip disableInteractive title="Coming soon!">
        <input type="checkbox" value="lsRememberMe" id="rememberMe" />
        </Tooltip>
        <Typography>Remember me</Typography>
      </Box>

      <Typography sx={{width: '22.5%', textOverflow: 'wrap', fontSize: '12px', color: 'rgb(102, 102, 102)'}}>By checking this box you won't have to sign in as often on this device. For your security, we recommend only checking this box on your personal devices.</Typography>

      <Link to={loginSuccessful ? "/" : "/login"} style={{textDecoration: 'none', width: '25%', height: 'auto',}}>
        <Button onClick={submitForm} sx={{width: '100%', backgroundColor: '#40c8f4', color: 'rgb(255, 255, 255)', fontWeight: 'bold', marginTop: '16px', letterSpacing: '1px', textTransform: 'none', fontSize: '19px', "&:hover": {backgroundColor: '#0593C8'}}}>Sign in</Button>
      </Link>

      <Tooltip title="Coming soon!" disableInteractive>
        <Typography sx={{color: 'rgb(102, 102, 102)', marginTop: '16px', cursor: 'pointer', textDecoration: 'underline'}}>Forgot password?</Typography>
      </Tooltip>

      <Button sx={{width: '25%', minHeight: '46px', backgroundColor: 'white', color: 'rgb(51, 51, 51)', border: '1px solid rgb(136, 136, 136)', fontWeight: 'normal', marginTop: '16px', letterSpacing: '1px', textDecoration: 'none', textTransform: 'none', fontSize: '19px', "&:hover": {backgroundColor: 'rgb(229, 229, 229)'}}}><Link to="/signup"          style={{textDecoration: 'none', color: 'rgb(51, 51, 51)'}}>Create your Best Promo Account</Link></Button>

      <Typography sx={{width: '22.5%', fontWeight: 'bold', textOverflow: 'wrap', fontSize: '14px', color: 'rgb(51, 51, 51)', marginTop: '16px'}}><span className='importantAsterisk'>*</span>This website is still under development. Our server's security will be upgraded soon. Do not use real passwords or personal details on this site during BETA testing.</Typography>
    </Box>
  );
}

export default Login;
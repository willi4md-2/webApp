import { useState, useEffect, React } from 'react';
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import { Typography, TextField, Button } from '@mui/material';
import signInImage from '../../Images/logo2.png';
import './Login.css';
import {db} from '../../firebase-config.js';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { useSelector } from "react-redux";



function SignUp() {

  const active = useSelector((state) => state.active.value);


  const [users, setUsers] = useState([]);
  const [newUsername, setUsername] = useState("");
  const [newPassword, setPassword] = useState("");

  const userCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(userCollectionRef, { password: newPassword, username: newUsername });
  }

  const handleValidation = () => {
    // let duplicateFound = users.filter(user => user.username === newUsername);
    // if (duplicateFound.includes(newUsername)) {
    //   console.log("here");
    // }
    console.log(newUsername);
    console.log(users.filter(user => user.username === newUsername).length);
    if (users.filter(user => user.username === newUsername).length > 0) {
      alert("username taken");
    }
    console.log(users);
  }

  useEffect(() => {
    const usersCollectionRef = collection(db, "users");

    const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    }

    getUsers()
  },  []);

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',  width: '100%'}}>

      <Box 
        component="img"
        src={signInImage}
        sx={{height: 'auto', marginBottom: '15px', backgroundColor: '#1c1c1c',  width: '25%', paddingLeft: '5%', paddingRight: '5%', paddingBottom: '10px'}}
       />
        <Typography sx={{fontSize: '23px', fontWeight: 'bold', color: 'rgb(51, 51, 51)'}}>Create your Best Promo account</Typography>
      
        <TextField
          sx={{marginTop: '10px', height: '45px', width: '25%',}}
          label="Username"
          variant="outlined"
          onChange={(event) => {setUsername(event.target.value);}}
        />
      
        <TextField 
          sx={{marginTop: '25px', height: '45px', width: '25%'}} 
          id="outlined-basic" 
          label="Password" 
          onChange={(event) => {setPassword(event.target.value);}}
          variant="outlined"
        />

      {/* Remember Me Section */}
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '20px', width: '25%'}}>
        <input type="checkbox" value="lsRememberMe" id="rememberMe" />
        <Typography>Keep me signed in</Typography>
      </Box>

      <Typography sx={{width: '22.5%', textOverflow: 'wrap', fontSize: '12px', color: 'rgb(102, 102, 102)'}}>By checking this box you won't have to sign in as often on this device. For your security, we recommend only checking this box on your personal devices.</Typography>

      <Button onClick={handleValidation} sx={{width: '25%', height: '46px', backgroundColor: '#40c8f4', color: 'rgb(255, 255, 255)', fontWeight: 'bold', marginTop: '16px', letterSpacing: '1px', textTransform: 'none', fontSize: '19px', "&:hover": {backgroundColor: '#0593C8'}}}>Create Account</Button>
      <Link to="/login"          style={{textDecoration: 'none', color: 'rgb(51, 51, 51)'}}><Typography sx={{color: 'rgb(102, 102, 102)', marginTop: '16px', cursor: 'pointer', textDecoration: 'underline'}}>Return to sign in</Typography></Link>
      <Typography sx={{width: '22.5%', fontWeight: 'bold', textOverflow: 'wrap', fontSize: '14px', color: 'rgb(51, 51, 51)', marginTop: '16px'}}><span className='importantAsterisk'>*</span>This website is still under development. Our server's security will be upgraded soon. Do not use real passwords or personal details on this site during BETA testing.</Typography>

    </Box>
  );
}

export default SignUp;
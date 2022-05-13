import { useState, React } from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import { Typography, TextField, Button } from '@mui/material';
import signInImage from '../../Images/logo2.png';
import './Login.css';
import {db} from '../../firebase-config.js';
import { collection, addDoc } from 'firebase/firestore';
import { useSelector } from "react-redux";



function Login() {

  const active = useSelector((state) => state.active.value);


  // const [users, setUsers] = useState([]);
  const [newUsername, setUsername] = useState("");
  const [newPassword, setPassword] = useState("");

  const userCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(userCollectionRef, { password: newPassword, username: newUsername });
  }

  // useEffect(() => {
  //   const usersCollectionRef = collection(db, "users");

  //   const getUsers = async () => {
  //       const data = await getDocs(usersCollectionRef);
  //       setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
  //   }

  //   getUsers()
  // },  []);

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%'}}>

      <Box 
        component="img"
        src={signInImage}
        sx={{height: 'auto', marginBottom: '15px', backgroundColor: '#1c1c1c', width: '25%', paddingLeft: '5%', paddingRight: '5%', paddingBottom: '10px'}}
       />
        <Typography sx={{fontSize: '23px', fontWeight: 'bold', color: 'rgb(51, 51, 51)'}}>Sign into your Best Promo account</Typography>
      
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
        <Typography>Remember me</Typography>
      </Box>

      <Typography sx={{width: '22.5%', textOverflow: 'wrap', fontSize: '12px', color: 'rgb(102, 102, 102)'}}>By checking this box you won't have to sign in as often on this device. For your security, we recommend only checking this box on your personal devices.</Typography>

      <Button onClick={() => {console.log({newUsername})}} sx={{width: '25%', height: '46px', backgroundColor: '#40c8f4', color: 'rgb(255, 255, 255)', fontWeight: 'bold', marginTop: '16px', letterSpacing: '1px', textTransform: 'none', fontSize: '19px', "&:hover": {backgroundColor: '#0593C8'}}}>Sign in</Button>

      <Typography sx={{color: 'rgb(102, 102, 102)', marginTop: '16px', cursor: 'pointer', textDecoration: 'underline'}}>Forgot password?</Typography>

      <Button onClick={() => {console.log(active.isActive)}} sx={{width: '25%', minHeight: '46px', backgroundColor: 'white', color: 'rgb(51, 51, 51)', border: '1px solid rgb(136, 136, 136)', fontWeight: 'normal', marginTop: '16px', letterSpacing: '1px', textDecoration: 'none', textTransform: 'none', fontSize: '19px', "&:hover": {backgroundColor: 'rgb(229, 229, 229)'}}}><Link to="/signup"          style={{textDecoration: 'none', color: 'rgb(51, 51, 51)'}}>Create your Best Promo Account</Link></Button>

      <Typography sx={{width: '22.5%', fontWeight: 'bold', textOverflow: 'wrap', fontSize: '14px', color: 'rgb(51, 51, 51)', marginTop: '16px'}}><span className='importantAsterisk'>*</span>This website is still under development. Our server's security will be upgraded soon. Do not use real passwords or personal details on this site during BETA testing.</Typography>

    </Box>
  );
}

export default Login;
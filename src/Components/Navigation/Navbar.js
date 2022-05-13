import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Logo from '../../Images/logo2.png';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  return (
    <Box sx={{position: 'relative'}}>
      <AppBar position="sticky" elevation={0} sx={{backgroundColor: '#1C1C1C', display: 'flex', justifyContent: 'center', width: '100vw'}}>
        <Toolbar disableGutters>

                {/* Navbar Logo */}
                {/* <Box sx={{marginLeft: '15px'}}>
                  <Link to="/" style={{textDecoration: 'none'}}>
                    <Box 
                    component="img"
                    src={Logo}
                    sx={{height: '65px', marginTop: '5px'}}
                    />
                  </Link>
                </Box> */}
                <Box sx={{display: 'flex', flexDirection: 'row', marginLeft: '15px', position: 'absolute', left: '0'}}>
                  <Typography>Best Prom<span className='titleChar'>o</span> Empl<span className='titleChar'>o</span>yee Portal</Typography>
                </Box>

                {/* Navbar Buttons */}
                <Box sx={{marginRight: 'auto', marginLeft: 'auto', display: 'flex', flexDirection: 'row'}}>
                    <Link to="/"          style={{textDecoration: 'none'}}><Button className='navButton' sx={{textTransform: 'none', color: '#F1F1F1', "&:hover": {backgroundColor: '#1C1C1C'}}}><Typography className='navlink'>Dashboard</Typography></Button></Link>
                    <Link to="/timesheet" style={{textDecoration: 'none'}}><Button className='navButton' sx={{textTransform: 'none', color: '#F1F1F1', marginLeft: '40px', "&:hover": {backgroundColor: '#1C1C1C'}}}><Typography className='navlink'>Timesheet</Typography></Button></Link>
                    <Link to="/inventory" style={{textDecoration: 'none'}}><Button className='navButton' sx={{textTransform: 'none', color: '#F1F1F1', marginLeft: '40px', "&:hover": {backgroundColor: '#1C1C1C'}}}>                     <Typography className='navlink'>Inventory</Typography></Button></Link>
                </Box>

                {/* Navbar Login */}
                <Box sx={{marginRight: '15px', position: 'absolute', right: '0'}}>
                  <Link to="/login" style={{textDecoration: 'none'}}>
                    <IconButton aria-label="login">
                        <AdminPanelSettingsIcon id="accountIcon" sx={{height: '35px', width: '35px'}}/>
                    </IconButton>
                  </Link>
                </Box>

        </Toolbar>
      </AppBar>
      </Box>
  );
}

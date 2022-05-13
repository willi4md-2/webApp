import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../../Images/logo2.png';
import '../Navigation/Navbar.css';

export default function Footer() {
  return (
    <Box>
      <AppBar position="static" elevation={0} sx={{backgroundColor: '#1C1C1C', display: 'flex', justifyContent: 'center'}}>
        <Toolbar disableGutters>

                {/* Footer Logo */}
                <Box sx={{marginLeft: '15px'}}>
                    <Box 
                    component="img"
                    src={Logo}
                    sx={{height: '65px', marginTop: '5px'}}
                    />
                </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography  } from '@mui/material';
import ConstructionImage from '../../Images/undraw_under_construction_-46-pa.svg'
import {useSelector} from 'react-redux';
import './Dashboard.css';

function Dashboard() {

  const user = useSelector((state) => state.user.value);

  return (
    <Box sx={{ width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', mr: 'auto', ml: '5%', mt: '2%'}}>
          {user.username === "" ? "" : <Typography sx={{fontSize: '24px'}}>Welcome back, <span className='dashboardUsername'>{user.username}</span></Typography>}
        </Box>

        <Box sx={{display: 'flex', flexDirection: 'column', mb: 'auto', mt: 'auto'}}>
          <Typography sx={{fontSize: '32px', fontWeight: 'bold', letterSpacing: '1px', mt: 'auto', ml: 'auto', mr: 'auto'}}>Coming soon!</Typography>
          <Box
          component="img"
          src={ConstructionImage}
          sx={{width: 'auto', ml: 'auto', mr: 'auto'}}
          />
        </Box>
    </Box>
  );
}

export default Dashboard;
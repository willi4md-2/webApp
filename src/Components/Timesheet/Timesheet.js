import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { Typography, IconButton  } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Timesheet.css';

function Timesheet() {

  // const [time, setTime] = React.useState(new Date().toLocaleDateString());
  // let today = new Date();
  // console.log(today.get);
  const [pageNumber, setPageNumber] = React.useState(1);

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '5%'}}>

        {/* Table Title */}
       <Box sx={{width: '90%', backgroundColor: '#40c8f4', borderLeft: '1px solid #40c8f4', borderRight: '1px solid #40c8f4', borderTopRightRadius: '1px', borderTopLeftRadius: '1px'}}>
           <Typography sx={{textAlign:'left', color: 'white', paddingTop: '6px', pb: '6px', marginLeft: '16px', fontSize: '24px'}}>Timesheet Manager</Typography>
        </Box>

        {/* Edit Timesheet Options */}
        <Box sx={{width: '90%', backgroundColor: 'white', display: 'flex', flexDirection: 'row', borderLeft: '1px solid rgb(188, 188, 188)', borderRight: '1px solid rgb(188, 188, 188)', borderBottom: '1px solid rgb(188, 188, 188)', height: '125px', alignItems: 'center'}}>
          <Link to="/addTimesheet" style={{textDecoration: 'none', width: 'auto', height: 'auto',}}>
            <IconButton sx={{backgroundColor: 'green', borderRadius: '0', color: 'white', ml: '16px', height: '30%', "&:hover": {backgroundColor: '#018f01'}}}>
              <EditIcon sx={{mr: '5px'}}></EditIcon>
              <Typography sx={{fontSize: '20px'}}>Current Timesheet</Typography>
            </IconButton>
          </Link>
          <Typography sx={{flexGrow: '1', textAlign: 'right', color: 'black', mr: '16px'}}>Search Bar Here</Typography>
        </Box>

        {/* Time Table */}
        <Box sx={{position: 'relative', width: '90%', borderLeft: '1px solid rgb(188, 188, 188)', borderRight: '1px solid rgb(188, 188, 188)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid rgb(188, 188, 188)', pb: '10%', pt: '2%'}}>

          <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textTransform: 'uppercase', width: '95%', borderBottom: '1px solid rgb(188, 188, 188)', mt: '16px', mb: '16px', pb: '10px', textAlign: 'center'}}>
            <Typography className='timesheetData'>Start Date</Typography>
            <Typography className='timesheetData'>End Date</Typography>
            <Typography className='timesheetData'>Total Hours</Typography>
            <Typography className='timesheetData'>Date Submitted</Typography>
            <Typography className='timesheetData'>Status</Typography>
          </Box>

          <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textTransform: 'uppercase', width: '95%', borderBottom: '1px solid rgb(188, 188, 188)', mt: '16px', mb: '16px', pb: '10px', textAlign: 'center'}}>
            <Typography className='timesheetData'>04/22</Typography>
            <Typography className='timesheetData'>04/28</Typography>
            <Typography className='timesheetData'>32</Typography>
            <Typography className='timesheetData'>04/31</Typography>
            <Typography className='timesheetData'>Approved</Typography>
          </Box>

          <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textTransform: 'uppercase', width: '95%', borderBottom: '1px solid rgb(188, 188, 188)', mt: '16px', mb: '16px', pb: '10px', textAlign: 'center'}}>
            <Typography className='timesheetData'>04/22</Typography>
            <Typography className='timesheetData'>04/28</Typography>
            <Typography className='timesheetData'>32</Typography>
            <Typography className='timesheetData'>04/31</Typography>
            <Typography className='timesheetData'>Approved</Typography>
          </Box>

          <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textTransform: 'uppercase', width: '95%', borderBottom: '1px solid rgb(188, 188, 188)', mt: '16px', mb: '16px', pb: '10px', textAlign: 'center'}}>
            <Typography className='timesheetData'>04/22</Typography>
            <Typography className='timesheetData'>04/28</Typography>
            <Typography className='timesheetData'>32</Typography>
            <Typography className='timesheetData'>04/31</Typography>
            <Typography className='timesheetData'>Approved</Typography>
          </Box>

          <Box sx={{position: 'absolute', bottom: '0', right: '0', display: 'flex', flexDirection: 'row', mr: '16px', mb: '16px',}}>

            <IconButton onClick={() => {setPageNumber(pageNumber-1);}} sx={{backgroundColor: '#40c8f4', borderRadius: '0', color: 'white', "&:hover": {backgroundColor: '#0593C8'}}}>
              <ArrowBackIosNewIcon sx={{fontSize: '20px'}}/>
            </IconButton>

            <Typography sx={{pl: '5px', pr: '5px', alignSelf: 'center', fontSize: '20px'}}>{pageNumber}</Typography>

            <IconButton onClick={() => {setPageNumber(pageNumber+1);}} sx={{backgroundColor: '#40c8f4', borderRadius: '0', color: 'white', "&:hover": {backgroundColor: '#0593C8'}}}>
              <ArrowForwardIosIcon sx={{fontSize: '20px'}}/>
            </IconButton>

          </Box>


        </Box>

     </Box>
  );
}

export default Timesheet;
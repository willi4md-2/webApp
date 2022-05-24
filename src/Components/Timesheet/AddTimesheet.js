import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { Typography, IconButton, Button  } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Timesheet.css';

function AddTimesheet() {

  // const [time, setTime] = React.useState(new Date().toLocaleDateString());
  // let today = new Date();
  // console.log(today.get);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [dateMultiplier, setDateMultiplier] = React.useState(0);
  const [date, setDate] = React.useState(new Date().getDate().toLocaleString());

  var curDay = new Date();

  const handleDay = () => {

    var first = curDay.getDate() - curDay.getDay() + dateMultiplier;
    var last = first + 6;
    console.log(dateMultiplier);
    var firstDay = new Date(curDay.setDate(first)).toLocaleString();
    var lastDay = new Date(curDay.setDate(last)).toLocaleDateString();

    console.log(firstDay);
    console.log(lastDay);

    setDate(new Date(lastDay).getDate().toLocaleString());

  }

  const handleArrowForward = () => {

    setPageNumber(pageNumber + 1);
    setDateMultiplier(dateMultiplier + 7);

  }

  const handleArrowBack = () => {

    setPageNumber(pageNumber - 1);
    setDateMultiplier(dateMultiplier - 7);

  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '5%'}}>

        {/* Table Title */}
       <Box sx={{width: '90%', backgroundColor: '#40c8f4', borderLeft: '1px solid #40c8f4', borderRight: '1px solid #40c8f4', borderTopRightRadius: '1px', borderTopLeftRadius: '1px'}}>
           <Typography sx={{textAlign:'left', color: 'white', paddingTop: '6px', pb: '6px', marginLeft: '16px', fontSize: '24px'}}>Timesheet Details</Typography>
        </Box>

        {/* Edit Timesheet Options */}
        <Box sx={{width: '90%', backgroundColor: 'white', display: 'flex', flexDirection: 'row', borderLeft: '1px solid rgb(188, 188, 188)', borderRight: '1px solid rgb(188, 188, 188)', borderBottom: '1px solid rgb(188, 188, 188)', height: '125px', alignItems: 'center'}}>
          <Link to="/timesheet" style={{textDecoration: 'none', width: 'auto', height: 'auto',}}>
            <IconButton sx={{backgroundColor: 'red', borderRadius: '0', color: 'white', ml: '16px', height: '30%', "&:hover": {backgroundColor: '#fc2b2b'}}}>
              <ArrowBackIosNewIcon sx={{mr: '5px'}}></ArrowBackIosNewIcon>
              <Typography sx={{fontSize: '20px'}}>Timesheet Manager</Typography>
            </IconButton>
          </Link>
          <Typography sx={{flexGrow: '1', textAlign: 'right', color: 'black', mr: '16px'}}>Search Bar Here</Typography>
          <Button onClick={handleDay}>Test</Button>
        </Box>

        {/* Time Table */}
        <Box sx={{position: 'relative', width: '90%', borderLeft: '1px solid rgb(188, 188, 188)', borderRight: '1px solid rgb(188, 188, 188)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid rgb(188, 188, 188)', pb: '10%', pt: '2%'}}>

          <Box>
            <Typography>{date}</Typography>
          </Box>

          <Box>
            <Typography>Next Day</Typography>
          </Box>

          <Box>
            <Typography>Next Next Day</Typography>
          </Box>

          <Box sx={{position: 'absolute', bottom: '0', right: '0', display: 'flex', flexDirection: 'row', mr: '16px', mb: '16px',}}>

            <IconButton onClick={handleArrowBack} sx={{backgroundColor: '#40c8f4', borderRadius: '0', color: 'white', "&:hover": {backgroundColor: '#0593C8'}}}>
              <ArrowBackIosNewIcon sx={{fontSize: '20px'}}/>
            </IconButton>

            <Typography sx={{pl: '5px', pr: '5px', alignSelf: 'center', fontSize: '20px'}}>{pageNumber}</Typography>

            <IconButton onClick={handleArrowForward} sx={{backgroundColor: '#40c8f4', borderRadius: '0', color: 'white', "&:hover": {backgroundColor: '#0593C8'}}}>
              <ArrowForwardIosIcon sx={{fontSize: '20px'}}/>
            </IconButton>

          </Box>


        </Box>

     </Box>
  );
}

export default AddTimesheet;
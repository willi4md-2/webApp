import * as React from 'react';
import Box from '@mui/material/Box';
import { IconButton, TextField, Tooltip  } from '@mui/material';
import { changeFlag } from '../Reducers/inventoryFlag';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useDispatch } from "react-redux";

function AddInventory() {

  const dispatch = useDispatch();

  return (
    
    <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>

        <Box sx={{position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'center', width: '90%', backgroundColor: 'white', borderBottom: '1px solid rgb(136, 136, 136)', borderLeft: '1px solid rgb(188, 188, 188)', borderRight: '1px solid rgb(188, 188, 188)', color: '#646873', pt: '10px', pb: '10px'}}>
          
          <Tooltip title="delete" placement='left'>
            <IconButton onClick={() => {dispatch(changeFlag(    {flag: false}  ));}} sx={{position: 'absolute', left: '1%'}}>
              <DeleteIcon sx={{color: 'red'}}></DeleteIcon>
            </IconButton>
          </Tooltip>

          <Box sx={{flexBasis: '100%', ml: '5%'}}>
            <TextField sx={{width: 'auto'}} label="Product #"></TextField>
          </Box>

          <Box sx={{flexBasis: '100%',}}>
            <TextField sx={{width: 'auto'}} label="Quantity"></TextField>
          </Box>

          <Box sx={{flexBasis: '100%',}}>
            <TextField sx={{width: 'auto'}} label="Price"></TextField>
          </Box>

          <Box sx={{flexBasis: '100%', mr: '5%'}}>
            <TextField sx={{width: 'auto'}} label="Color"></TextField>
          </Box>

          <Tooltip title="finish" placement='right'>
            <IconButton sx={{position: 'absolute', right: '1%'}}>
              <CheckCircleOutlineIcon sx={{color: 'green'}}></CheckCircleOutlineIcon>
            </IconButton>
          </Tooltip>
          {/* <Typography sx={{flexBasis: '100%', textAlign: 'right', marginRight: '40px'}}>Quantity</Typography>
          <Typography sx={{flexBasis: '100%', textAlign: 'right', marginRight: '2%'}}>Price</Typography> */}

        </Box >
        
    </Box>
  );
}

export default AddInventory;
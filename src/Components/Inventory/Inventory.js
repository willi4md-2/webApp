import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, Button, IconButton  } from '@mui/material';
import LineItem from './LineItem';
import { useSelector, useDispatch } from "react-redux";
import { chooseInventory } from '../Reducers/inventory';
import { changeFlag } from '../Reducers/inventoryFlag';
import AddIcon from '@mui/icons-material/Add';
import AddInventory from './AddInventory';

function Inventory() {

  const inventory = useSelector((state) => state.inventory.value);
  const inventoryFlag = useSelector((state) => state.inventoryFlag.value);

  const dispatch = useDispatch();

  return (
    
    <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>

      {/* Content above line items */}
      <Box sx={{display: 'flex', flexDirection: 'row', marginTop: '5%', textAlign: 'center', alignItems: 'center', width : '90%', position: 'relative'}}>
      <Typography sx={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '1px', marginRight: 'auto', marginLeft: 'auto'}}>{inventory.pageName}</Typography>
        <IconButton onClick={() => {dispatch(changeFlag(    {flag: true}  ));}} sx={{backgroundColor: 'rgb(0, 168, 0)', position: 'absolute', right: '0', pl: '10px', pr: '10px', borderRadius: '2px', fontSize: '18px', color: 'white', "&:hover": {backgroundColor: 'rgb(0, 198, 0)'}}}>
            Add Item
          <AddIcon sx={{color: 'green', backgroundColor: 'white', marginLeft: '5px', borderRadius: '15px'}}/>
        </IconButton>
      </Box>
      
      {/* Column values */}
        <Box sx={{display: 'flex', flexDirection: 'row', width: '90%', marginTop: '16px', backgroundColor: '#40c8f4', borderLeft: '1px solid #0593c8', borderRight: '1px solid #0593c8', color: 'white', borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}}>
          <Typography sx={{flexBasis: '100%', marginLeft: '5%'}}>Product</Typography>
          <Typography sx={{flexBasis: '100%', textAlign: 'right', marginRight: '40px'}}>Quantity</Typography>
          <Typography sx={{flexBasis: '100%', textAlign: 'right', marginRight: '2%'}}>Price</Typography>
        </Box >

        <LineItem></LineItem>

        <Box sx={inventoryFlag.flag ? {width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'} : {display: 'none'}}>
          <AddInventory></AddInventory>
        </Box>
        
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '90%', backgroundColor: '#1C1C1C', color: 'white', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px', borderLeft: '1px solid #1C1C1C', borderRight: '1px solid #1C1C1C',}}>
          <Button onClick={() => {   dispatch(chooseInventory(    {inventoryChoice: "inventory-mai", pageName: "MAI"}           ));   }} sx={{color: 'white', flexGrow: '1', letterSpacing: '1px', borderRadius: '0', borderBottomLeftRadius: '5px', "&:hover": {backgroundColor: 'rgb(51, 51, 51)'}}}>MAI</Button>
          <Button onClick={() => {   dispatch(chooseInventory(    {inventoryChoice: "inventory-mait", pageName: "MAIT"}         ));   }} sx={{color: 'white', flexGrow: '1', letterSpacing: '1px', borderRadius: '0', "&:hover": {backgroundColor: 'rgb(51, 51, 51)'}}}>MAIT</Button>
          <Button onClick={() => {   dispatch(chooseInventory(    {inventoryChoice: "inventory-ffi", pageName: "FFI"}           ));   }} sx={{color: 'white', flexGrow: '1', letterSpacing: '1px', borderRadius: '0', "&:hover": {backgroundColor: 'rgb(51, 51, 51)'}}}>FFI</Button>
          <Button onClick={() => {   dispatch(chooseInventory(    {inventoryChoice: "inventory-ffit", pageName: "FFIT"}         ));   }} sx={{color: 'white', flexGrow: '1', letterSpacing: '1px', borderRadius: '0', "&:hover": {backgroundColor: 'rgb(51, 51, 51)'}}}>FFIT</Button>
          <Button onClick={() => {   dispatch(chooseInventory(    {inventoryChoice: "inventory-blank", pageName: "Blanks"}     ));   }} sx={{color: 'white', flexGrow: '1', letterSpacing: '1px', borderRadius: '0', textTransform: 'none', "&:hover": {backgroundColor: 'rgb(51, 51, 51)'}}}>Blanks</Button>
        </Box>

    </Box>
  );
}

export default Inventory;
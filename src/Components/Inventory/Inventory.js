import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, Button  } from '@mui/material';
import LineItem from './LineItem';
import { useSelector, useDispatch } from "react-redux";
import { chooseInventory } from '../Reducers/inventory';

function Inventory() {

  const inventory = useSelector((state) => state.inventory.value);

  const dispatch = useDispatch();

  return (
    
    <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>

      <Typography sx={{marginTop: '5%', fontSize: '24px', fontWeight: 'bold', letterSpacing: '1px',}}>{inventory.pageName}</Typography>
      <Button sx={{backgroundColor: 'rgb(0, 168, 0)', color: 'white', "&:hover": {backgroundColor: 'rgb(0, 198, 0)'}}}>Add Item</Button>
      {/* Column values */}
        <Box sx={{display: 'flex', flexDirection: 'row', width: '90%', marginTop: '16px', backgroundColor: '#0593c8', borderLeft: '1px solid #0593c8', borderRight: '1px solid #0593c8', color: 'white', borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}}>
          <Typography sx={{flexBasis: '100%', marginLeft: '5%'}}>Product</Typography>
          <Typography sx={{flexBasis: '100%', textAlign: 'right', marginRight: '40px'}}>Quantity</Typography>
          <Typography sx={{flexBasis: '100%', textAlign: 'right', marginRight: '2%'}}>Price</Typography>
        </Box >

        <LineItem></LineItem>
        
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '90%', backgroundColor: '#1C1C1C', color: 'white', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px'}}>
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
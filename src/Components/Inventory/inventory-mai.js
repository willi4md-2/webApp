import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, IconButton  } from '@mui/material';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import {db} from '../../firebase-config.js';
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';



function MaiInventory() {

  const [inventories, setInventories] = useState([]);


  useEffect(() => {
    const inventoriesRef = collection(db, "inventory-mai");

    const getInventories = async () => {
        const data = await getDocs(inventoriesRef);
        setInventories(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    }
    getInventories()
  },  []);


  return (
    
    <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>

          {inventories.sort((a, b) => a.price > b.price ? 1 : -1).map((inventory) => {
            return (
                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '90%', paddingTop: '10px', paddingBottom: '10px', backgroundColor: 'white', color: '#646873', borderBottom: '1px solid rgb(136, 136, 136)', borderLeft: '1px solid rgb(188, 188, 188)', borderRight: '1px solid rgb(188, 188, 188)'}}>

                <Typography sx={{flexBasis: '100%', marginLeft: '5%'}}>{inventory.product}</Typography>

                {/* Quantity Selector */}
                <Box sx={{position: 'relative', display: 'flex', flexBasis: '100%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>

                  <IconButton sx={{width: '25px', height: '25px', position: 'absolute', right: '0', marginRight: '76px'}}>
                      <RemoveIcon sx={{color: 'red'}}/>
                  </IconButton>

                  <Typography sx={{marginRight: '40px'}}>{inventory.quantity}</Typography>

                  <IconButton sx={{width: '25px', height: '25px', position: 'absolute', right: '0'}}>
                    <AddIcon sx={{color: 'green'}}/>
                  </IconButton>

                </Box>

                <Typography sx={{flexBasis: '100%', textAlign: 'right', marginRight: '2%'}}>${inventory.price}</Typography> 
                </Box>
            );
          })}
        
    </Box>
  );
}

export default MaiInventory;
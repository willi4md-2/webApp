import {createSlice} from '@reduxjs/toolkit';

const initialStateValue = {inventoryChoice: "inventory-mai", pageName: "MAI"};

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState: {value: initialStateValue},
    reducers: {
        chooseInventory: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { chooseInventory } = inventorySlice.actions;

export default inventorySlice.reducer;
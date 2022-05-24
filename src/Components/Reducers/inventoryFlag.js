import {createSlice} from '@reduxjs/toolkit';

const initialStateValue = {flag: false};

export const inventoryFlagSlice = createSlice({
    name: 'inventoryFlag',
    initialState: {value: initialStateValue},
    reducers: {
        changeFlag: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { changeFlag } = inventoryFlagSlice.actions;

export default inventoryFlagSlice.reducer;
import {createSlice} from '@reduxjs/toolkit';

const initialStateValue = {isActive: false};

export const activeSlice = createSlice({
    name: 'active',
    initialState: {value: initialStateValue},
    reducers: {
        isActive: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { isActive } = activeSlice.actions;

export default activeSlice.reducer;
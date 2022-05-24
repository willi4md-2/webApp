import {createSlice} from '@reduxjs/toolkit';

const initialStateValue = {isActive: false};

export const activeSlice = createSlice({
    name: 'active',
    initialState: {value: initialStateValue},
    reducers: {
        setActive: (state, action) => {
            state.value = action.payload
        },
        setInactive: (state) => {
            state.value = initialStateValue
        }
    }
});

export const { setActive, setInactive } = activeSlice.actions;

export default activeSlice.reducer;
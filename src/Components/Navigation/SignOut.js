import { ListItemText, MenuItem } from "@mui/material";
import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../Reducers/user';
import {setInactive} from '../Reducers/active';


export default function SignOut() {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);
    const active = useSelector((state) => state.active.value);

    const handleSignOut = () => {
        dispatch(logout(user));
        dispatch(setInactive(active));
        window.location.reload(false);
    }

    return (
        <MenuItem component="a" onClick={handleSignOut}>
            <ListItemText>Sign Out</ListItemText>
        </MenuItem>
    );
}
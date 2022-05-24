import React from "react";
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import {useSelector} from 'react-redux';
import "./styles.css";
import SignOut from "./SignOut";

export default function Profile() {

  const active = useSelector((state) => state.active.value);

  const loggedOutMenu = [
      {
          title: "Sign In",
          link: "/login"
      },
      {
          title: "Create Account",
          link: "/signup"
      }
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <Box>
    <>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        aria-label="Open to show more"
        title="Open to show more"
      >
        <AccountCircleIcon sx={{color: 'white'}}/>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >

        {active.isActive ? <SignOut></SignOut>
         : loggedOutMenu.map(item => (
            <MenuItem onClick={handleClose} key={item.title} value={item.title} component="a"  href={item.link} sx={{textDecoration: 'none', color: 'inherit'}}>
              {item.title}
            </MenuItem>
          ))}
      </Menu>
    </>
    </Box>
  );
}

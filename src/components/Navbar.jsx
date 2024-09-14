import React from 'react'
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CarnestLogo from '../assets/car-sharing-logo.png';


const Navbar = () => {

    const isMobile = useMediaQuery('(max-width:600px)'); // Check if the screen is mobile size

    return (
        <AppBar position="static" sx={{backgroundColor: 'background.paper', borderRadius:'30px', boxShadow: 'none'}}>
      <Toolbar>
        <img src={CarnestLogo} alt="Logo" style={{ width: '30px', marginRight: '5px' ,marginBottom: '10px'}} /> 
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'black'}}>
          CarNest
        </Typography>
        {/* Menu Items in the Center */}
        {!isMobile && (
          <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
            <Button component={Link} to="/search" color="inherit" sx={{ color: 'black' }}>
              Search
            </Button>
            <Button component={Link} to="/postRide" color="inherit" sx={{ color: 'black' }}>
              Post Ride
            </Button>
            <Button component={Link} to="/yourRides" color="inherit" sx={{ color: 'black' }}>
              Your Rides
            </Button>
            <Button component={Link} to="/messages" color="inherit" sx={{ color: 'black' }}>
              Messages
            </Button>
          </Box>
        )}

        {/* Optional Mobile Menu for smaller screens */}
        {isMobile && (
          <IconButton edge="start" color="balck" aria-label="menu">
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
    )
}

export default Navbar
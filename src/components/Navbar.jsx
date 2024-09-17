import React, { useState } from 'react'
import { AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  useMediaQuery,
  useTheme,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CarnestLogo from '../assets/car-sharing-logo.png';
import { Search, DirectionsCar, List, Message, Person } from '@mui/icons-material';

const Navbar = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Search', path: '/Search', icon: <Search /> },
    { name: 'Post Ride', path: '/PostRide', icon: <DirectionsCar /> },
    { name: 'Your Rides', path: '/YourRides', icon: <List /> },
    { name: 'Messages', path: '/Messages', icon: <Message /> },
  ];


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Implement logout logic here
    setIsLoggedIn(false);
    handleClose();
    navigate('/Login');
  };

    return (
    <AppBar position="static" sx={{backgroundColor: 'background.paper', borderRadius:'30px', boxShadow: 'none'}}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>

        {/* Logo and Brand Name */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={CarnestLogo} alt="Carnest Logo" style={{ height: '35px', marginRight: '5px', marginBottom: '10px'}} />
            <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'text.primary' }}>
              Carnest
            </Typography>
          </Box>



        {/* <img src={CarnestLogo} alt="Logo" style={{ width: '30px', marginRight: '5px' ,marginBottom: '10px'}} /> 
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'black'}}>
          CarNest
        </Typography> */}


        {/* Desktop Menu Items */}
        {!isMobile && isLoggedIn && (
            <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.name}
                  color="inherit"
                  component={Link}
                  to={item.path}
                  sx={{ mx: 1 , color: 'black'}}
                  startIcon={item.icon}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
        )}

        {/* Login/Signup or Profile Icon */}
        {isLoggedIn ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="black"
              >
                <Person />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <Box>
              <Button backgroundColor="text.secondary" component={Link} to="/Login">
                Login
              </Button>
              {/* <Button backgroundColor="black" component={Link} to="/Signup">
                Sign Up
              </Button> */}
            </Box>
          )
        }
        
        {/* Mobile Bottom Navigation */}
      {isMobile && isLoggedIn && (
        <BottomNavigation
          showLabels
          sx={{
            width: '100%',
            position: 'fixed',
            bottom: 0,
            borderTop: `1px solid ${theme.palette.divider}`,
            color : 'text.primary'
          }}
        >
          {menuItems.map((item) => (
            <BottomNavigationAction
              key={item.name}
              label={item.name}
              icon={item.icon}
              component={Link}
              to={item.path}
              sx={{color : 'text.primary'}}
            />
          ))}
        </BottomNavigation>
      )}


      </Toolbar>
    </AppBar>
    )
}

export default Navbar
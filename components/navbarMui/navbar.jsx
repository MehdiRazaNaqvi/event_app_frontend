
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { RiMenuFill } from 'react-icons/ri';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Image from 'next/image';

import "./style.css"
import { RiSearch2Line } from "react-icons/ri"












const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (


    <Box sx={{ flexGrow: 1, height: '10rem' }}>
      <AppBar style={{ backgroundColor: "#242565" }} position="static" className='navbar_appbar'>


        <Toolbar className="navbar_portion">


          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          // sx={{ mr: 2 }}
          >

            {/* <MenuIcon /> */}
            <Image src="/logonav.png" width={45} height={35} ></Image>
          </IconButton>


          <Typography
            variant="h6"
            noWrap
            component="div"
            className="navbar_logo_name"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Tickets App
          </Typography>




          <Box sx={{ flexGrow: 1 }} />

          <Box className="mui_navbar_opts" sx={{ display: { xs: 'none', md: 'flex' } }}>

            <IconButton aria-label="show 4 new mails" className='navbar_option' sx={{ fontSize: "1rem" }} color="inherit">
              {/* <Badge badgeContent={4} color="error" sx={{ fontSize: "1rem" }}> */}
              {/* <MailIcon /> */}
              Schedule
              {/* </Badge> */}
            </IconButton>



            <IconButton
              className='navbar_option'
              sx={{ fontSize: "1rem" }}
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              Event Types
              <KeyboardArrowDownOutlinedIcon fontSize='small' />



            </IconButton>


            <IconButton className='navbar_option navbar_option_pink' aria-label="show 4 new mails" sx={{ fontSize: "1rem" }} color="inherit">
              {/* <Badge badgeContent={1} color="error" sx={{ fontSize: "1rem" }}> */}
              {/* <MailIcon /> */}
              Add My Event
              {/* </Badge> */}
            </IconButton>

          </Box>


          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>

            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              {/* <MoreIcon /> */}
              <MenuIcon />
              {/* <RiMenuFill /> */}

            </IconButton>
          </Box>


        </Toolbar>



        <Toolbar className="navbar_portion" >



          <Search className="navbar_search_bar" >

            <SearchIconWrapper>
              {/* <SearchIcon /> */}

              <RiSearch2Line size={25} color="gray" />

            </SearchIconWrapper>


            <StyledInputBase
              sx={{ color: "gray", width: "100%" }}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />

          </Search>


          <Box sx={{ flexGrow: 1 }} />



          <IconButton className='navbar_option navbar_search_option' aria-label="show 4 new mails" sx={{ fontSize: "1rem" }} color="inherit">
            {/* <Badge badgeContent={1} color="error" sx={{ fontSize: "1rem" }}> */}
            {/* <MailIcon /> */}
            Search
            {/* </Badge> */}
          </IconButton>

        </Toolbar>

      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
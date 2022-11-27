import * as React from 'react';
import './Navigation.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Link, NavLink } from 'react-router-dom';

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

const drawerWidth = 240;

function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <Box sx={{ display: 'flex', marginBottom: '100px' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className='navigation_sticky'
        sx={{
            // width: { sm: `calc(100% - ${drawerWidth}px)` },
            width: { sm: `calc(100% px)` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon color='info' />
          </IconButton>
          <Link to="/"> 
            <h1 className='logo-icon'>TrescoLife</h1>
          </Link>
          <div className='desktoponly' style={{display: "flex", paddingLeft: "80px"}}>
                <NavLink 
                to="/about" 
                className="navigation_links"
                style= {({ isActive }) =>
                    isActive ? activeStyle : undefined
                }> about </NavLink>
                <NavLink 
                to="/" 
                className="navigation_links"
                style= {({ isActive }) =>
                    isActive ? activeStyle : undefined
                }> home </NavLink>
          </div>
          <div className='desktoponly' style={{display: "flex", paddingLeft: "80px", flexGrow: "1", justifyContent: "right"}}>
          <IconButton
              color="inherit"
              aria-label="open drawer"
            //   edge="start"
            //   onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <LocationOnOutlinedIcon color='info' />
            </IconButton>

            <IconButton
              color="inherit"
              aria-label="open drawer"
            //   edge="start"
            //   onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <SearchOutlinedIcon color='info' />
            </IconButton>

            <IconButton
              color="inherit"
              aria-label="open drawer"
            //   edge="start"
            //   onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <ShoppingBagOutlinedIcon color='info' />
            </IconButton>

            <IconButton
              color="inherit"
            //   edge="start"
            //   onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <PermIdentityOutlinedIcon color='info' />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* Drawer for mobile Navigation. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navigation;
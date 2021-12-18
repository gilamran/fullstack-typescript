import FetchIcon from '@mui/icons-material/CloudDownload';
import UsageIcon from '@mui/icons-material/Code';
import HomeIcon from '@mui/icons-material/Home';
import RouterIcon from '@mui/icons-material/Storage';
import StyledIcon from '@mui/icons-material/Style';
import LazyIcon from '@mui/icons-material/SystemUpdateAlt';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;

export const SideMenu: React.FC = () => {
  return (
    <Drawer
      variant='permanent'
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <List>
        <ListItem button component={RouterLink} to='/'>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
        <ListItem button component={RouterLink} to='/usage'>
          <ListItemIcon>
            <UsageIcon />
          </ListItemIcon>
          <ListItemText primary='Usage' />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={RouterLink} to='/fetch-example'>
          <ListItemIcon>
            <FetchIcon />
          </ListItemIcon>
          <ListItemText primary='Fetch' />
        </ListItem>
        <ListItem button component={RouterLink} to='/lazy-example'>
          <ListItemIcon>
            <LazyIcon />
          </ListItemIcon>
          <ListItemText primary='Lazy Loading' />
        </ListItem>
        <ListItem button component={RouterLink} to='/styled-example'>
          <ListItemIcon>
            <StyledIcon />
          </ListItemIcon>
          <ListItemText primary='Styled Components' />
        </ListItem>
        <ListItem button component={RouterLink} to='/router-example/1234'>
          <ListItemIcon>
            <RouterIcon />
          </ListItemIcon>
          <ListItemText primary='React-Router' />
        </ListItem>
      </List>
    </Drawer>
  );
};

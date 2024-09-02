import FetchIcon from '@mui/icons-material/CloudDownload';
import UsageIcon from '@mui/icons-material/Code';
import HomeIcon from '@mui/icons-material/Home';
import RouterIcon from '@mui/icons-material/Storage';
import StyledIcon from '@mui/icons-material/Style';
import LazyIcon from '@mui/icons-material/SystemUpdateAlt';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;

interface ListItemLinkProps {
  icon?: React.ReactElement<any>;
  primary: string;
  to: string;
}

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props;

  return (
    <ListItemButton component={RouterLink} to={to}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItemButton>
  );
}

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
        <ListItem disablePadding>
          <ListItemLink to='/' primary='Home' icon={<HomeIcon />} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemLink to='/usage' primary='Usage' icon={<UsageIcon />} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemLink to='/fetch-example' primary='Fetch' icon={<FetchIcon />} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemLink to='/lazy-example' primary='Lazy Loading' icon={<LazyIcon />} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemLink to='/styled-example' primary='Styled Components' icon={<StyledIcon />} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemLink to='/router-example/1234' primary='React-Router' icon={<RouterIcon />} />
        </ListItem>
      </List>
    </Drawer>
  );
};

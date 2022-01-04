import React, {useState} from 'react';
import './firebase/config';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import PreviewIcon from '@mui/icons-material/Preview';
// import Cards from './Cards'
// import AddInventory from './AddInventory';
import { Link, Routes, Route } from "react-router-dom"
import {
  Mommy
} from "./Mommy";
import {
  Work
} from "./Work";
import Signup from './pages/Signup';
// import Todo from './Todo'
// import Inventory from './Inventory'
// import Inventoryv3 from './Inventoryv3'
import Inventoryv4 from './Inventoryv4'

const drawerWidth = 200;

export default function ClippedDrawer() {
  const paraOne = "The quick brown fox jumps over the lazy dog!"
  const paraTwo = "Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Or sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit"
  const [para, setPara] = useState(paraOne);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
        <AssignmentTurnedInOutlinedIcon fontSize="large" />
          <Typography variant="h6" noWrap component="div">
            Web Household Inventory
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
          <Link to="signup"><ListItem button sx={{display: 'flex', flexDirection: 'row', columnGap: 2, paddingLeft: 1}}>
              <AppRegistrationIcon />
              <ListItemText primary="Register Now!"/>
            </ListItem></Link>
          <Link to="mommy"><ListItem button onClick={() => setPara(paraOne)} sx={{display: 'flex', flexDirection: 'row', columnGap: 2, paddingLeft: 1}}>
              <AddToPhotosIcon />
              <ListItemText primary="CLICK ME MOMMY"/>
            </ListItem></Link>
            <Link to="work"><ListItem button onClick={() => setPara(paraTwo)} sx={{display: 'flex', flexDirection: 'row', columnGap: 2, paddingLeft: 1}}>
                <PreviewIcon />
                <ListItemText primary="Work" />
            </ListItem></Link>
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
          <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" />
      </ListItem>
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Routes>
            <Route path="/mommy" element={<Mommy />} />
            <Route path="/work" element={<Work />} />
            <Route path="/signup" element={<Signup />} />
      </Routes>
        <Toolbar />
        <Inventoryv4 />
        <Typography paragraph>
            {para}
        </Typography>
      </Box>
    </Box>
  );
}
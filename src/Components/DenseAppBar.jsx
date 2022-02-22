import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';


export default function DenseAppBar() {
  return (

    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{backgroundColor: "#00bbc4"}}>
      <Container maxWidth="lg">
        <Toolbar variant="dense" sx={{justifyContent: "center"}}>
          <Typography variant="h3" color="inherit" component="div">
            GIPHIFY
          </Typography>
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
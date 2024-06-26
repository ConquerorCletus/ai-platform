import React from 'react';
// material-ui imports
import { AppBar, Button, Toolbar, Stack } from '@mui/material';

const Navbar = () => {
  return (
    <>
      <AppBar
        position='static'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          bgcolor: '#0D1117',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Stack direction={'row'} spacing={2} sx={{ mr: '20' }}>
            <Button href='#' color='inherit' sx={{ textTransform: 'none' }}>
              Features
            </Button>
            <Button href='#' color='inherit' sx={{ textTransform: 'none' }}>
              Pricing
            </Button>
            <Button href='#' color='inherit' sx={{ textTransform: 'none' }}>
              Community
            </Button>
            <Button href='#' color='inherit' sx={{ textTransform: 'none' }}>
              Support
            </Button>
          </Stack>
          <Stack direction={'row'} spacing={1} sx={{ ml: 2 }}>
            <Button
              variant='outlined'
              sx={{
                textTransform: 'none',
                borderColor: '#FF7F3E',
                textDecoration: 'none',
                color: '#FF7F3E',
              }}
            >
              Log in
            </Button>
            <Button href='#' color='inherit' sx={{ textTransform: 'none' }}>
              Sign Up
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

import React from 'react';
// Material ui imports
import { Box, Container, Typography, Button } from '@mui/material';
// Background image import
import BackgroundImage from '../images/Background.jpg';

const Hero = () => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          position: 'relative',
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography
            variant='h2'
            sx={{
              color: 'white',
              fontFamily: 'Montserrat',
              fontWeight: 'bold',
            }}
          >
            Revolutionize your App
          </Typography>
          <Typography
            variant='h3'
            sx={{
              color: 'white',
              fontFamily: 'Montserrat',
              // fontSize: '32px',
              fontWeight: 'light',
              // lineHeight: 1.2
            }}
          >
            Development with AI
          </Typography>

          <Typography
            variant='h5'
            sx={{
              fontFamily: 'Montserrat',
              color: 'white',
              fontWeight: 'light',
              wordSpacing: '5px',
            }}
          >
            Efforlessly create powerful apps in minutes with AI-driven platform.
          </Typography>
        </Box>

        <Button
          variant='contained'
          sx={{
            mt: 5,
            textTransform: 'none',
            border: 'solid none',
            width: '250px',
            bgcolor: '#FF7F3E',
          }}
        >
          Sign up
        </Button>
      </Container>
    </>
  );
};

export default Hero;

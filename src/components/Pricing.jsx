import React from 'react';
// material-ui imports
import { Container, Typography, Box, Paper, Button } from '@mui/material';
import { Check } from '@mui/icons-material';

const Pricing = () => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          position: 'static',
          backgroundColor: '#0D1117',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Typography variant='h5' sx={{ color: 'white', letterSpacing: 1 }}>
          PRICING PLANS
        </Typography>
        <Typography
          sx={{ color: 'white', mt: 4, mb: 6, letterSpacing: 1, width: '50vw' }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
          cupiditate praesentium, fugiat natus ad corporis perspiciatis repellat
          a quos
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'row',  }}>
          <Paper
            // square={false}
            sx={{
              width: 250,
              height: 250,
              display: 'flex',
              flexDirection: 'column',
              bgcolor: 'white',
              p: 4,
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}
          >
            Basic
            <br />
            $19 / month
            <Box
              sx={{
                mt: 4,
                display: 'flex',
                flexDirection: 'column',
                width: 'inherit',
              }}
            >
              <Typography
                sx={{
                  display: 'inline-block',
                  my: 'auto',
                  mx: 'auto',
                  alignItems: 'center',
                }}
              >
                <Check sx={{ color: '#FF7F3E' }} /> Lorem ipsum, dolor sit amet
              </Typography>
              <Typography
                sx={{ display: 'inline-block', my: 'auto', mx: 'auto' }}
              >
                <Check sx={{ color: '#FF7F3E' }} />
                Lorem ipsum, dolor sit amet
              </Typography>
              <Typography
                sx={{ display: 'inline-block', my: 'auto', mx: 'auto' }}
              >
                <Check sx={{ color: '#FF7F3E' }} />
                Lorem ipsum, dolor sit amet
              </Typography>
              <Button
                variant='contained'
                sx={{
                  mt: 3,
                  bgcolor: '#FFF6E9',
                  border: 'solid #FF7F3E',
                  textDecoration: 'none',
                  color: '#FF7F3E',
                }}
              >
                Get Started
              </Button>
            </Box>
          </Paper>
          <Paper
            // square={false}
            elevation={2}
            sx={{
              width: 250,
              height: 300,
              display: 'flex',
              flexDirection: 'column',
              bgcolor: 'white',
              p: 4,
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
              my: 'auto',
            }}
          >
            Basic
            <br />
            $19 / month
            <Box
              sx={{
                mt: 4,
                display: 'flex',
                flexDirection: 'column',
                width: 'inherit',
              }}
            >
              <Typography
                sx={{
                  display: 'inline-block',
                  my: 'auto',
                  mx: 'auto',
                  alignItems: 'center',
                }}
              >
                <Check sx={{ color: '#FF7F3E' }} /> Lorem ipsum, dolor sit amet
              </Typography>
              <Typography
                sx={{ display: 'inline-block', my: 'auto', mx: 'auto' }}
              >
                <Check sx={{ color: '#FF7F3E' }} />
                Lorem ipsum, dolor sit amet
              </Typography>
              <Typography
                sx={{ display: 'inline-block', my: 'auto', mx: 'auto' }}
              >
                <Check sx={{ color: '#FF7F3E' }} />
                Lorem ipsum, dolor sit amet
              </Typography>
              <Typography
                sx={{ display: 'inline-block', my: 'auto', mx: 'auto' }}
              >
                <Check sx={{ color: '#FF7F3E' }} />
                Lorem ipsum, dolor sit amet
              </Typography>
              <Typography
                sx={{ display: 'inline-block', my: 'auto', mx: 'auto' }}
              >
                <Check sx={{ color: '#FF7F3E' }} />
                Lorem ipsum, dolor sit amet
              </Typography>
              <Button
                variant='contained'
                sx={{
                  mt: 3,
                  bgcolor: '#FFF6E9',
                  border: 'solid #FF7F3E',
                  textDecoration: 'none',
                  color: '#FF7F3E',
                }}
              >
                Get Started
              </Button>
            </Box>
          </Paper>
          <Paper
            // square={false}
            sx={{
              width: 250,
              height: 250,
              display: 'flex',
              flexDirection: 'column',
              bgcolor: 'white',
              p: 4,
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}
          >
            Basic
            <br />
            $19 / month
            <Box
              sx={{
                mt: 4,
                display: 'flex',
                flexDirection: 'column',
                width: 'inherit',
              }}
            >
              <Typography
                sx={{
                  display: 'inline-block',
                  my: 'auto',
                  mx: 'auto',
                  alignItems: 'center',
                }}
              >
                <Check sx={{ color: '#FF7F3E' }} /> Lorem ipsum, dolor sit amet
              </Typography>
              <Typography
                sx={{ display: 'inline-block', my: 'auto', mx: 'auto' }}
              >
                <Check sx={{ color: '#FF7F3E' }} />
                Lorem ipsum, dolor sit amet
              </Typography>
              <Typography
                sx={{ display: 'inline-block', my: 'auto', mx: 'auto' }}
              >
                <Check sx={{ color: '#FF7F3E' }} />
                Lorem ipsum, dolor sit amet
              </Typography>
              <Button
                variant='contained'
                sx={{
                  mt: 3,
                  bgcolor: '#FFF6E9',
                  border: 'solid #FF7F3E',
                  textDecoration: 'none',
                  color: '#FF7F3E',
                }}
              >
                Get Started
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default Pricing;

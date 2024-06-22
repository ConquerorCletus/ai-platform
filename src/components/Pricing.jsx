import React from 'react';
// material-ui imports
import { Container, Typography, Box, Paper, Button } from '@mui/material';
import { Check } from '@mui/icons-material';
import BackgroundImage from '../images/Background1.jpg';

const Pricing = () => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          backgroundImage: `url(${BackgroundImage})`,
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

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100vw',
            height: 'auto',
            my: 'auto',
            py: 'auto',
          }}
        >
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
                  textTransform: 'none',
                  fontWeight: 'bold',
                }}
              >
                Get Started
              </Button>
            </Box>
          </Paper>
          <Paper
            square={false}
            elevation={12}
            sx={{
              width: 380,
              height: 400,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              // color: 'white',

              // p: 4,
              // fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
              bgcolor: '#FF7F3E',
              transform: 'translateY(-20px)',
            }}
          >
            <p style={{ color: 'white' }}>Most Popular</p>
            <Box
              square={false}
              sx={{
                border: 'solid #FF7F3E',
                width: '100%',
                height: '100%',

                bgcolor: 'white', // Background color of the inner Box
                p: 2,
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                my: 'auto',

                // color: '#FF7F3E', // Text color of the content
              }}
            >
              Essential
              <br />
              $59 / month
              <Box
                sx={{
                  // border: 'solid #DDE6ED',

                  mt: 4,
                  display: 'flex',
                  // flex: 1,
                  flexDirection: 'column',
                  width: '100%',
                  height: '100%',
                  // bgcolor: '#DDE6ED',
                }}
              >
                <Typography
                  sx={{
                    display: 'inline-block',
                    my: 'auto',
                    mx: 'auto',
                    alignItems: 'center',
                    width: '80%',
                  }}
                >
                  <Check sx={{ color: '#FF7F3E', mr: 1 }} /> Lorem ipsum, dolor
                  sit amet
                </Typography>
                <Typography
                  sx={{
                    display: 'inline-block',
                    my: 'auto',
                    mx: 'auto',
                    width: '80%',
                  }}
                >
                  <Check sx={{ color: '#FF7F3E', mr: 1 }} />
                  Lorem ipsum, dolor sit amet
                </Typography>
                <Typography
                  sx={{
                    display: 'inline-block',
                    my: 'auto',
                    mx: 'auto',
                    width: '80%',
                  }}
                >
                  <Check sx={{ color: '#FF7F3E', mr: 1 }} />
                  Lorem ipsum, dolor sit amet
                </Typography>
                <Typography
                  sx={{
                    display: 'inline-block',
                    // justifyContent: 'space-between',
                    my: 'auto',
                    mx: 'auto',
                    width: '80%',
                  }}
                >
                  <Check sx={{ color: '#FF7F3E', mr: 1 }} />
                  Lorem ipsum, dolor sit amet
                </Typography>
                <Typography
                  sx={{
                    display: 'inline-block',
                    my: 'auto',
                    mx: 'auto',
                    width: '80%',
                  }}
                >
                  <Check sx={{ color: '#FF7F3E', mr: 1 }} />
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
                    textTransform: 'none',
                    fontWeight: 'bold',
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Box>
          </Paper>
          {/* <Box
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
          </Box> */}
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
            Premium
            <br />
            $119 / month
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
                  textTransform: 'none',
                  fontWeight: 'bold',
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

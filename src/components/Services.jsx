import React from 'react';
// material-UI imports
import { Typography, Container, Box, Button } from '@mui/material';
import BackgroundImage from '../images/Background1.jpg';


const showServices = [
  {
    id: '1',
    src: './images/coding.png',
    description: 'No coding required',
  },
  {
    id: '2',
    src: './images/prototyping.png',
    description: 'Instant prototyping',
  },
  {
    id: '3',
    src: './images/integration.png',
    description: 'Seamless integration',
  },
  {
    id: '4',
    src: './images/optiimize.png',
    title: 'SEO optimization',
    description: 'Optimized performance',
  },
];
const Services = () => {
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
        <Typography
          variant='h5'
          sx={{
            textDecoration: 'None',
            color: 'white',
            fontWeight: 100,
            mt: 4,
            mb: 6,
            letterSpacing: 1,
          }}
        >
          SERVICES
        </Typography>
        <Typography
          sx={{
            color: 'white',
            width: '70vw',
            textAlign: 'center',
            lineHeight: 1.5,
          }}
        >
          Our AI-powered platform simplifies app development. Allowing you to
          build, test and deploy applications faster than ever before. perfect
          for entrereneurs, startups, and businesses looking to innovate.
        </Typography>

        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            mt: 8,
            p: 0,
          }}
        >
          {showServices.map((service) => (
            <Box
              sx={{
                justifyContent: 'center',
                m: 0,
                p: 0,
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 4,
              }}
              key={service.id}
            >
              <img
                src={service.src}
                alt={service.title}
                style={{
                  maxWidth: '280px',
                  maxHeight: '200px',
                  mb: 8,
                  alignSelf: 'center',
                }}
              />
              <Typography sx={{ color: 'white', textAlign: 'center' }}>
                {service.description}
              </Typography>
            </Box>
          ))}
        </Box>
        <Button
          variant='contained'
          sx={{
            mt: 10,
            textTransform: 'none',
            border: 'solid none',
            width: '200px',
            bgcolor: '#FF7F3E',
          }}
        >
          Get started for free
        </Button>
      </Container>
    </>
  );
};

export default Services;

import React from 'react';
// material-UI import
import { Container } from '@mui/material';
import Background from '../images/Background2.jpg';

const Footer = () => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          position: 'relative',
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
          height: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      ></Container>
    </>
  );
};

export default Footer;

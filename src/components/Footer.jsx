//import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/logo.png'
const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f3'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo} alt="logo" width='90px' height='50px' />
      </Stack>
      <Typography variant='h5' pb='40px' mt='20px' display='flex' alignItems='center' justifyContent='center'>
        Build Muscle With Rohit Fitness
      </Typography>
    </Box>
  )
}

export default Footer

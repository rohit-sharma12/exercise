import { Box, Stack, Typography } from '@mui/material';
import Background from '../assets/background.png';

const HeroBanner = () => (
  <div className='hero'>
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
    It never gets easier, <br />
    you just get stronger
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
     <img src={Background} alt="background" className="hero-banner-img" /> 
  </Box>
  </div>
);

export default HeroBanner;
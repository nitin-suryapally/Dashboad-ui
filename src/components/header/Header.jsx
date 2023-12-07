import React from 'react';
import { Typography, Box, useMediaQuery, useTheme } from '@mui/material';

const Header = ({ title }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box mb={isSmallScreen ? '20px' : '30px'}>
      <Typography
        variant={isSmallScreen ? 'h4' : 'h2'}
        color="black"
        fontWeight="bold"
        sx={{ m: '0 0 5px 0' }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Header;

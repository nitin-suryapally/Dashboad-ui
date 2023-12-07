// import { Typography, Box } from '@mui/material'
// import React from 'react'
// import {useMediaQuery} from '@mui/material';
// import { useTheme } from '@emotion/react';

// const Innerbox = () => {
//     const theme = useTheme();
//     const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
//     return (
//         <Box width="300px" display="flex" justifyContent="space-between" borderBottom="1px soild grey">
//             <Typography variant= {isSmallScreen ? 'h6' : 'h5'}>In-Service</Typography>
//             <Box width="30px" borderRadius="10px" sx={{ backgroundColor: "orange" }} display="flex" justifyContent="center" alignContent='center'>21</Box>
//         </Box>
//     )
// }

// export default Innerbox

import React from 'react';
import { Box, Typography } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';

const Innerbox = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      width={isSmallScreen ? '100%' : '100%'}
      display="flex"
      justifyContent="space-between"
      borderBottom="1px solid grey"
      p="10px"
    >
      <Typography variant={isSmallScreen ? 'h6' : 'h5'}>In-Service</Typography>
      <Box width="30px" borderRadius="10px" sx={{ backgroundColor: 'orange' }} display="flex" justifyContent="center" alignItems="center">
        <Typography variant="subtitle1" color="white">
          21
        </Typography>
      </Box>
    </Box>
  );
};

export default Innerbox;



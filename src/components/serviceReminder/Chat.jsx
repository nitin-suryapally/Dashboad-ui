import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Numberbox from './Numberbox';

const Chat = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box p={isSmallScreen ? '10px' : '20px' } width={isSmallScreen ? '100%' : '100%'}  display="flex" flexDirection="column" >
      <Typography variant={isSmallScreen ? 'h6' : 'h5'} mb={isSmallScreen ? '5px' : '10px'}>
        Service Reminder
      </Typography>
      <Box display="flex" flexDirection={isSmallScreen ? 'column' : 'row'} alignItems="center" justifyContent="space-around" width="100%">
        <Numberbox number="9" text="Due Soon" />
        <Numberbox number="7" text="Overdue" />
      </Box>
    </Box>
  );
};

export default Chat;





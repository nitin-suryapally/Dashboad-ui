
import React from 'react';
import { Box, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';

const Topbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box display="flex" justifyContent="space-between" p={2} borderBottom="1px solid grey">
      <Box display="flex">
        <Box display=" flex">
          <IconButton>
            <TimeToLeaveIcon fontSize={isMobile ? 'medium' : 'large'} />
          </IconButton>
        </Box>

        {/* Search bar */}
        <Box
          display="flex"
          borderRadius="20px"
          border="1px solid Grey"
          marginLeft={isMobile ? '0.5rem' : '2rem'}
          width={isMobile ? '15rem' : '25rem'}
        >
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        </Box>
      </Box>

      {/* Icons */}
      <Box display="flex">
        <IconButton>
          <AddCircleOutlineRoundedIcon fontSize={isMobile ? 'medium' : 'large'} />
        </IconButton>

        <IconButton>
          <HelpRoundedIcon fontSize={isMobile ? 'medium' : 'large'} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;


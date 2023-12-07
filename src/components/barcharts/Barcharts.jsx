
import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box, useMediaQuery, useTheme } from '@mui/material';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

const Barcharts = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (

    <BarChart
      width={isMobile ? '100%' : 358}
      height={isMobile ? "100%" : 160}
      series={[
        { data: pData, label: 'pv', id: 'pvId', stack: 'total' },
        { data: uData, label: 'uv', id: 'uvId', stack: 'total' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />

  );
};

export default Barcharts;


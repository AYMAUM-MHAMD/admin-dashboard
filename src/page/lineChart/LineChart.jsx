import { ResponsiveLine } from '@nivo/line'
import { Box, useTheme } from "@mui/material";
import Line from './Line';



const LineChart = () => {
    const theme = useTheme()
  return (
    <Line />
  );
};
export default LineChart;
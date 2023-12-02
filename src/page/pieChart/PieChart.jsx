import { Box, useTheme } from '@mui/material';
import { ResponsivePie } from '@nivo/pie'
import Pie from './pie';

const data = [
    {
      "id": "React",
      "label": "React",
      "value": 546,
      "color": "hsl(228, 70%, 50%)"
    },
    {
      "id": "scala",
      "label": "scala",
      "value": 305,
      "color": "hsl(78, 70%, 50%)"
    },
    {
      "id": "php",
      "label": "php",
      "value": 239,
      "color": "hsl(36, 70%, 50%)"
    },
    {
      "id": "erlang",
      "label": "erlang",
      "value": 61,
      "color": "hsl(317, 70%, 50%)"
    },
    {
      "id": "n",
      "label": "c",
      "value": 597,
      "color": "hsl(300, 70%, 50%)"
    }
  ]

const PieChart = () => {
    const theme = useTheme()

  return (
  <Pie />
  );
};
export default PieChart;
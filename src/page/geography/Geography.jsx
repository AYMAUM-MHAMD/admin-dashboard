import { Box, useTheme } from '@mui/material';
import { ResponsiveChoropleth } from '@nivo/geo'
import { geo } from './world_countries';
import { data } from './data';
import Geo from './geo';


const Geography = () => {
    const theme = useTheme()
  return (
  <Geo />
  );
};
export default Geography;
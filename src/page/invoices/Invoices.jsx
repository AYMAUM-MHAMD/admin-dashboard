import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box, Typography, useTheme } from '@mui/material';
import { columns, rows } from './data';
import Header from "../../components/Header";

const Invoices = () => {
  return (

    
    
   <Box>
      <Header title="INVOICES" subTitle="List of Invoice Balances" />

     <Box sx={{ height: 650, width: '98%', mx: "auto" }}>
     
     
     <DataGrid
     checkboxSelection
       slots={{
         toolbar: GridToolbar,
       }}
       rows={rows}
       // @ts-ignore
       columns={columns} />
    </Box>
   </Box>
  );
};
export default Invoices;
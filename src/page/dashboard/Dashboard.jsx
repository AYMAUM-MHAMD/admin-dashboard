import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { DownloadDoneOutlined } from "@mui/icons-material";
import Header from "../../components/Header";

const Dashboard = () => {
  const theme = useTheme()
  return (
  <div>




<Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
  
  <Header isDashbord={true} title={"DASHBOARD"} subTitle={"Welcome to your dashoard"} />
  
      <Box sx={{textAlign: "right", mb: 1.3 }}>
        <Button sx={{ padding: "6px 8px", textTransform: "capitalize" }} variant="contained" color="primary">
        
          <DownloadDoneOutlined />
        Downlpad Reports
        </Button>
      </Box>
</Stack>
    <Row1 />
    <Row2 />
    <Row3 />
  </div>
  );
};
export default Dashboard;
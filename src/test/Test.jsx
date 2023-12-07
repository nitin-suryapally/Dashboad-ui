import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";
import { useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Box, Grid } from "@mui/material";
import Dashboard from "./scenes/dashboard/Index";
import Header from "./components/header/Header";
import Chat from "./components/serviceReminder/Chat";
import Equipment from "./components/serviceReminder/Equipment";
import Barcharts from "./components/barcharts/Barcharts";
import Comments from "./components/Comments/Comments";

function App() {
  const theme = useMode();
  // console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box>
          {/* sidebar and top bar */}
          <Box display="flex">
            <Sidebar />

            <Box flexGrow={1}>
              <Topbar />

              <Box mt="10px">
                <Header title="Dashboard" />
              </Box>

              {/* grid */}
              <Grid container spacing={2}>
                {/* row 1 */}
                <Grid item xs={12} sm={6} md={3}>
                  <Box width="100%" m="5px" sx={{ backgroundColor: "#e7e8df" }}>
                    <Chat />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box width="100%" m="5px" sx={{ backgroundColor: "#e7e8df" }}>
                    <Equipment />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box width="100%" m="5px" sx={{ backgroundColor: "#e7e8df" }}>
                    <Barcharts />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box width="100%" m="5px" sx={{ backgroundColor: "#e7e8df" }}>
                    <Equipment />
                  </Box>
                </Grid>

                {/* Second row */}

                <Grid item xs={12} sm={6} md={3}>
                  <Box width="100%" m="5px" sx={{ backgroundColor: "#e7e8df" }}>
                    <Barcharts />
                  </Box>
                  <Box
                    width="100%"
                    height="inherit"
                    m="5px"
                    sx={{ backgroundColor: "#e7e8df" }}
                  >
                    <Equipment />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box width="100%" m="5px" sx={{ backgroundColor: "#e7e8df" }}>
                    <Comments />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box width="100%" m="5px" sx={{ backgroundColor: "#e7e8df" }}>
                    <Equipment />
                  </Box>
                  <Box width="100%" m="5px" sx={{ backgroundColor: "#e7e8df" }}>
                    <Chat />
                  </Box>
                </Grid>

                {/* Third row */}
                <Grid item xs={12} sm={6} md={3}>
                  <Box width="100%" m="5px" sx={{ backgroundColor: "#e7e8df" }}>
                    <Chat />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box width="100%" m="5px" sx={{ backgroundColor: "#e7e8df" }}>
                    <Equipment />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box width="100%" m="5px" sx={{ backgroundColor: "#e7e8df" }}>
                    <Barcharts />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box width="100%" m="5px" sx={{ backgroundColor: "#e7e8df" }}>
                    <Equipment />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;

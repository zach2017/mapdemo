import { Box, Grid, IconButton, Collapse, Typography, Paper, AppBar, Toolbar } from '@mui/material';
import "./App.css";
import type { PointData } from "./MapComponent";
import MapContainer from "./MapContainer";
import { Menu as MenuIcon, ArrowRight as ArrowRightIcon, ArrowLeft as ArrowLeftIcon } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});


const App: React.FC = () => {
  const location = {
    latitude: 32.38,
    longitude: -86.31,
    zoom: 13,
  };

  const examplePoints: PointData[] = [
    { latitude: 32.3792, longitude: -86.3077, iconSize: 64 },
    { latitude: 32.38, longitude: -86.31, iconSize: 32 },
    { latitude: 32.381, longitude: -86.312, iconSize: 16 },
  ];

  const [isRightColumnOpen, setIsRightColumnOpen] = useState(true);

  const toggleRightColumn = () => {
    setIsRightColumnOpen(!isRightColumnOpen);
  };

  return (
    <div>
   <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        {/* Navigation Bar */}
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              MUI Layout App
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Main Container */}
        <Box sx={{ p: 3, bgcolor: 'grey.100', minHeight: 'calc(100vh - 64px)' }}>
          <Grid container spacing={2} sx={{ flexWrap: 'nowrap' }}>
            {/* Left Column */}
            <Grid item xs={12} md={isRightColumnOpen ? 8 : 12} sx={{ minWidth: 0 }}>
              <Paper elevation={3} sx={{ p: 3, height: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h5" gutterBottom>
                    Main Content
                  </Typography>
                  <Typography>
                    This is the main content area. It expands to full width when the right sidebar is collapsed. Use this section for primary content, such as dashboards, articles, or forms.
                  </Typography>
                </Box>
                <IconButton
                  color="primary"
                  onClick={toggleRightColumn}
                  sx={{ alignSelf: 'center' }}
                >
                  {! isRightColumnOpen ? <ArrowLeftIcon /> : <ArrowRightIcon />}
                </IconButton>
              </Paper>
            </Grid>

            {/* Right Collapsible Column */}
            <Grid item xs={12} md={4} sx={{ minWidth: isRightColumnOpen ? 'auto' : 0 }}>
              <Collapse in={isRightColumnOpen} orientation="horizontal" sx={{ height: '100%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                 <MapContainer location={location} points={examplePoints} />
                </Box>
              </Collapse>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
     
    </div>
  );
};

export default App;
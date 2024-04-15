import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { cacheRtl, theme } from './config/theme';
import { CacheProvider } from '@emotion/react';
import { LicenseInfo } from '@mui/x-license-pro';

LicenseInfo.setLicenseKey("e0d9bb8070ce0054c9d9ecb6e82cb58fTz0wLEU9MzI0NzIxNDQwMDAwMDAsUz1wcmVtaXVtLExNPXBlcnBldHVhbCxLVj0y")

function App() {
  return (
    <BrowserRouter>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppRoutes />
        </ThemeProvider>
      </CacheProvider>
    </BrowserRouter>
  );
}

export default App;

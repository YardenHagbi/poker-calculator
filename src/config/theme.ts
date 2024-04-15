import createCache from '@emotion/cache';
import { createTheme } from '@mui/material';
import stylisRTLPlugin from 'stylis-plugin-rtl';

export const theme = createTheme({
  direction: 'rtl',
  palette: {
    // mode: 'dark',
  },
});

export const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [stylisRTLPlugin],
});


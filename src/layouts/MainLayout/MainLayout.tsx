import { Box, Typography } from '@mui/material';
import pokerChip from '@src/assets/images/poker-chip.svg';
import { Outlet } from 'react-router-dom';
import * as styles from './MainLayout.styles';

const MainLayout = () => {
  const header = (
    <Box sx={styles.header}>
      <Typography variant='subtitle1'>מחשבון פוקר</Typography>
      <Box component="img" src={pokerChip} sx={styles.headerIcon} />
    </Box>
  );

  return (
    <Box sx={styles.layout}>
      {header}
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;

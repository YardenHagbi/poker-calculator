import { SxProps } from '@mui/material';

export const layout: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  height: 1,
  width: 1,
  overflow: 'auto'
};

export const header: SxProps = {
  display: 'flex',
  height: '2rem',
  bgcolor: 'primary.main',
  alignItems: 'center',
  boxShadow: 5,
  px: '0.5rem',
};

export const headerIcon: SxProps = {
  width: '1.2rem',
  mr: 'auto',
};

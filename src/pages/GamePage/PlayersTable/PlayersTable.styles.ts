import { SxProps } from '@mui/material';

export const table: SxProps = {
  '& .MuiDataGrid-columnHeader': {
    backgroundColor: 'primary.main',
    '.MuiDataGrid-columnHeaderTitle': {
      fontWeight: 600
    }
  },
  '& .MuiDataGrid-cell:focus-within': {
    outline: 'none !important'
  }
};

export const balanceText = (balance: number): SxProps => ({
  color: balance > 0 ? 'green' : balance < 0 ? 'red' : 'canvastext',
  fontWeight: 600,
  height: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

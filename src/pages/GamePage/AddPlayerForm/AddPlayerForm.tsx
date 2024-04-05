import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';

interface Props {
  onAddPlayer: (name: string) => void;
}

const AddPlayerForm = ({ onAddPlayer }: Props) => {
  const [newPlayerName, setNewPlayerName] = useState('');

  return (
    <Box component="form" sx={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
      <TextField
        variant="outlined"
        size="small"
        value={newPlayerName}
        onChange={(e) => setNewPlayerName(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          onAddPlayer(newPlayerName);
          setNewPlayerName('');
        }}
      >
        הוסף שחקן
      </Button>
    </Box>
  );
};

export default AddPlayerForm;

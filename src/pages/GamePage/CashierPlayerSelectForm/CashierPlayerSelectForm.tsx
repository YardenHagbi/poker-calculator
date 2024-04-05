import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Player } from '@src/common/models/player.interface';

interface Props {
  players: Player[];
  onCashierChange: (name: string) => void;
  cashierName: string;
}

const CashierPlayerSelectForm = (props: Props) => {
  const { players, onCashierChange, cashierName } = props;

  return (
    <FormControl sx={{ width: '15rem' }} disabled={!players.length}>
      <InputLabel id="cashier-select-label">Select Cashier</InputLabel>
      <Select
        labelId="cashier-select-label"
        id="cashier-select"
        value={cashierName}
        label="Select Cashier"
        onChange={(event) => onCashierChange(event.target.value)}
        sx={{ mb: 2 }}
      >
        {players.map((player) => (
          <MenuItem key={player.name} value={player.name}>
            {player.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CashierPlayerSelectForm;

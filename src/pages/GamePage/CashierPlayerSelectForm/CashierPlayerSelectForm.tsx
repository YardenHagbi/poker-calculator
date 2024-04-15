import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Player } from '@src/common/models/player.interface';

interface Props {
  players: Player[];
  onCashierSelect: (name: string) => void;
  cashierName: string;
}

const placeHolder = 'ללא';

const CashierPlayerSelectForm = (props: Props) => {
  const { players, onCashierSelect, cashierName } = props;

  return (
    <FormControl sx={{ width: '7rem' }} disabled={!players.length}>
      <InputLabel id="cashier-select-label">דילר</InputLabel>
      <Select
        autoWidth
        labelId="cashier-select-label"
        label="דילר"
        value={cashierName}
        renderValue={(value) => value || placeHolder}
        MenuProps={{ sx: { maxHeight: '20rem' } }}
        onChange={(event) => onCashierSelect(event.target.value)}
      >
        <MenuItem key="none" value="">
          {placeHolder}
        </MenuItem>
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

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { Player } from '@src/common/models/player.interface';
import * as styles from './PlayersTable.styles';

interface Props {
  players: Player[];
  onPlayerMoneyEnteredChange: (playerName: string, amount: number) => void;
  onPlayerMoneyLeftChange: (playerName: string, amount: number) => void;
}

const PlayersTable = (props: Props) => {
  const { players, onPlayerMoneyEnteredChange, onPlayerMoneyLeftChange } = props;
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">שם</TableCell>
            <TableCell align="center">כמות כניסה</TableCell>
            <TableCell align="center">כמות בסוף</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player) => (
            <TableRow key={player.name} sx={styles.row(player)}>
              <TableCell component="th" scope="row">
                {player.name}
              </TableCell>
              <TableCell align="right">
                <TextField
                  type="number"
                  value={player.moneyEntered}
                  onChange={(e) => onPlayerMoneyEnteredChange(player.name, parseInt(e.target.value))}
                  size="small"
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  type="number"
                  value={player.moneyLeft}
                  onChange={(e) => onPlayerMoneyLeftChange(player.name, parseInt(e.target.value))}
                  size="small"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PlayersTable;

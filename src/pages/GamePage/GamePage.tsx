import { Box, Divider, Typography } from '@mui/material';
import { GameInfo } from '@src/common/models/game-info.interface';
import { DEFAULT_MONEY_ENTERED, Player } from '@src/common/models/player.interface';
import { calculateTransactions } from '@src/utils/game.utils';
import { useMemo, useState } from 'react';
import AddPlayerForm from './AddPlayerForm/AddPlayerForm';
import CashierPlayerSelectForm from './CashierPlayerSelectForm/CashierPlayerSelectForm';
import PlayersTable from './PlayersTable/PlayersTable';
import Transactions from './Transactions/Transactions';

const GamePage = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [cashierPlayerName, setCashierPlayerName] = useState<string>('');
  const gameInfo: GameInfo = useMemo(() => {
    const totalMoneyEntered = players.map((x) => x.moneyEntered).reduce((a, b) => a + b, 0);
    const totalMoneyLeft = players.map((x) => x.moneyLeft).reduce((a, b) => a + b, 0);
    return {
      totalMoneyEntered,
      totalMoneyLeft,
      hoser: totalMoneyEntered - totalMoneyLeft,
      transactions: calculateTransactions(players, cashierPlayerName)
    };
  }, [cashierPlayerName, players]);

  const handleAddPlayer = (name: string) => {
    const newPlayer: Player = {
      name,
      moneyEntered: DEFAULT_MONEY_ENTERED,
      moneyLeft: DEFAULT_MONEY_ENTERED
    };
    setPlayers([...players, newPlayer]);
  };

  return (
    <Box sx={{ width: 1, height: 1, overflow: 'auto', gap: '1rem', display: 'flex', flexDirection: 'column' }}>
      <PlayersTable players={players} setPlayers={setPlayers} />
      <AddPlayerForm players={players} onAddPlayer={handleAddPlayer} sx={{ mt: '1rem' }} />
      <Divider sx={{ my: '2rem' }} />
      <Box sx={{ display: 'flex', gap: '2rem', justifyContent: 'space-around' }}>
        <CashierPlayerSelectForm
          players={players}
          onCashierSelect={setCashierPlayerName}
          cashierName={cashierPlayerName}
        />
        <Box>
          <Typography>סהכ כניסות: {gameInfo.totalMoneyEntered}</Typography>
          <Typography>סהכ נשאר: {gameInfo.totalMoneyLeft}</Typography>
          <Typography color={gameInfo.hoser != 0 ? 'error' : 'inherit'}>חוסר: {gameInfo.hoser}</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mt: '2rem',
          gap: '0.5rem'
        }}
      >
        <Typography sx={{ fontSize: '2rem', fontWeight: 700 }}>העברות</Typography>
        <Transactions transactions={gameInfo.transactions} />
      </Box>
    </Box>
  );
};

export default GamePage;

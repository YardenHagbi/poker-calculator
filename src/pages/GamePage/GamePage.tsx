import { Box, Divider, Typography } from '@mui/material';
import { DEFAULT_MONEY_ENTERED, Player } from '@src/common/models/player.interface';
import { useState } from 'react';
import AddPlayerForm from './AddPlayerForm/AddPlayerForm';
import PlayersTable from './PlayersTable/PlayersTable';
import CashierPlayerSelectForm from './CashierPlayerSelectForm/CashierPlayerSelectForm';

const GamePage = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [cashierPlayerName, setCashierPlayerName] = useState<string>('');

  const handleAddPlayer = (name: string) => {
    const newPlayer: Player = {
      name,
      moneyEntered: DEFAULT_MONEY_ENTERED,
      moneyLeft: DEFAULT_MONEY_ENTERED,
    };
    console.log(newPlayer);

    setPlayers([...players, newPlayer]);
  };

  const handlePlayerMoneyEnteredChange = (playerName: string, amount: number) => {
    setPlayers(players.map((player) => (player.name === playerName ? { ...player, moneyEntered: amount } : player)));
  };

  const handlePlayerMoneyLeftChange = (playerName: string, amount: number) => {
    setPlayers(players.map((player) => (player.name === playerName ? { ...player, moneyLeft: amount } : player)));
  };

  return (
    <Box sx={{ width: 1, height: 1, overflow: 'auto' }}>
      <Typography>שחקנים:</Typography>
      <PlayersTable
        players={players}
        onPlayerMoneyEnteredChange={handlePlayerMoneyEnteredChange}
        onPlayerMoneyLeftChange={handlePlayerMoneyLeftChange}
      />
      <AddPlayerForm onAddPlayer={handleAddPlayer} />
      <Divider sx={{ my: '2rem' }} />
      <CashierPlayerSelectForm
        players={players}
        onCashierChange={setCashierPlayerName}
        cashierName={cashierPlayerName}
      />
    </Box>
  );
};

export default GamePage;

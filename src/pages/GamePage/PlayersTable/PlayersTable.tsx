import { DataGridPro, GridCellParams, GridColDef, GridRenderCellParams, GridRowModel } from '@mui/x-data-grid-pro';
import { Player } from '@src/common/models/player.interface';
import * as styles from './PlayersTable.styles';
import { Box, IconButton, Typography } from '@mui/material';
import { Balance, Delete } from '@mui/icons-material';

interface Props {
  players: Player[];
  setPlayers: (players: Player[]) => void;
}

const PlayersTable = (props: Props) => {
  const { players, setPlayers } = props;

  const handleDeletePlayer = (name: string) => {
    setPlayers(players.filter((x) => x.name !== name));
  };
  const handleUpdatePlayer = (newPlayer: Player) => {
    setPlayers(players.map((x) => (x.name !== newPlayer.name ? x : newPlayer)));
  };

  const columns: GridColDef<Player>[] = [
    {
      field: 'name',
      headerName: 'שם',
      flex: 1,
      editable: false,
      sortable: false,
      headerAlign: 'center',
      align: 'center',
      disableColumnMenu: true
    },
    {
      field: 'moneyEntered',
      headerName: 'כניסה',
      type: 'number',
      flex: 1,
      editable: true,
      sortable: false,
      headerAlign: 'center',
      align: 'center',
      disableColumnMenu: true
    },
    {
      field: 'moneyLeft',
      headerName: 'נשאר',
      type: 'number',
      flex: 1,
      sortable: false,
      editable: true,
      headerAlign: 'center',
      align: 'center',
      disableColumnMenu: true
    },
    {
      field: 'balance',
      headerName: 'מאזן',
      sortable: false,
      flex: 1,
      valueGetter: (_, row) => row.moneyLeft - row.moneyEntered,
      editable: false,
      disableColumnMenu: true,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params: GridCellParams) => {
        const balance = Number(params.value);
        return (
          <Typography sx={styles.balanceText(balance)}>{balance}</Typography>
        );
      }
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: '',
      flex: 0.2,
      renderCell: (params: GridRenderCellParams<Player>) => (
        <IconButton onClick={() => handleDeletePlayer(params.row.name)}>
          <Delete />
        </IconButton>
      )
    }
  ];

  return (
    <Box>
      <DataGridPro
        rows={players}
        processRowUpdate={(newRow: Player, _: Player) => {
          handleUpdatePlayer(newRow);
          return newRow;
        }}
        columns={columns}
        disableRowSelectionOnClick
        hideFooter
        disableColumnMenu
        disableColumnFilter
        autoHeight
        getRowId={(row) => row.name}
        initialState={{
          density: 'compact'
        }}
        sx={styles.table}
      />
    </Box>
  );
};

export default PlayersTable;

import { SxProps } from '@mui/material';
import { Player } from '@src/common/models/player.interface';

export const row = (player: Player): SxProps => ({
  bgcolor:
    player.moneyEntered > player.moneyLeft
      ? 'lightgreen'
      : player.moneyEntered < player.moneyLeft
      ? 'lightgoldenrodyellow'
      : 'transparent',
});

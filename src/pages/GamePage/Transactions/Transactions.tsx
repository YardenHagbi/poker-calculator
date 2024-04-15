import { Box, Typography } from '@mui/material';
import { Transaction } from '@src/common/models/transaction.interface';

interface Props {
  transactions: Transaction[];
}

const Transactions = ({ transactions }: Props) => {
  return (
    <Box>
      {transactions.map((transaction: Transaction) => (
        <Typography key={JSON.stringify(transaction)}>
          {transaction.fromPlayer} מעביר ל{transaction.toPlayer} - {transaction.amount}
        </Typography>
      ))}
    </Box>
  );
};

export default Transactions;

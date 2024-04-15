import { Transaction } from './transaction.interface';

export interface GameInfo {
  totalMoneyEntered: number;
  totalMoneyLeft: number;
  hoser: number;
  transactions: Transaction[];
}

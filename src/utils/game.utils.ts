import { Player } from '@src/common/models/player.interface';
import { Transaction } from '@src/common/models/transaction.interface';
import { cloneDeep } from 'lodash';

const DEALER_FEE = 0.05;

interface PlayerBalance {
  name: string;
  balance: number;
}

export const calculateTransactions = (players: Player[], cashierPlayerName?: string): Transaction[] => {
  const playersBalance: PlayerBalance[] = cloneDeep(players).map((x) => ({
    name: x.name,
    balance: x.moneyLeft - x.moneyEntered,
  }));

  const cashier = playersBalance.find((x) => x.name === cashierPlayerName);
  if (cashier) {
    playersBalance.forEach((player) => {
      if (player.balance > 0) {
        const fee = player.balance * DEALER_FEE;
        cashier.balance += fee;
        player.balance -= fee;
      }
    });
  }

  let winners = playersBalance.filter((player) => player.balance > 0).sort((a, b) => b.balance - a.balance);
  let losers = playersBalance
    .filter((player) => player.balance < 0)
    .map((x) => ({ ...x, balance: Math.abs(x.balance) }))
    .sort((a, b) => b.balance - a.balance);

  const transactions: Transaction[] = [];

  // find exact combinations
  winners.forEach((winner) => {
    const combinations = findCombinations(winner.balance, losers);
    if (combinations.length > 0) {
      const match = combinations[0]; // Use the first matching combination
      match.forEach((loser) => {
        transactions.push({ fromPlayer: loser.name, toPlayer: winner.name, amount: loser.balance });
      });

      winner.balance = 0;
      losers = losers.filter((loser) => !match.map((x) => x.name).includes(loser.name));
    }
  });
  winners = winners.filter((winner) => winner.balance > 0);

  // greedy
  winners.forEach((winner) => {
    losers.forEach((loser) => {
      if (winner.balance === 0 || loser.balance === 0) return;
      const payment = Math.min(winner.balance, loser.balance);
      transactions.push({ fromPlayer: loser.name, toPlayer: winner.name, amount: payment });
      winner.balance -= payment;
      loser.balance -= payment;
    });
  });

  return transactions;
};

const findCombinations = (
  target: number,
  candidates: PlayerBalance[],
  start: number = 0,
  path: PlayerBalance[] = [],
  result: PlayerBalance[][] = []
): PlayerBalance[][] => {
  if (target === 0) {
    result.push([...path]);
    return result;
  }
  for (let i = start; i < candidates.length; i++) {
    if (candidates[i].balance > target) continue; // Skip if the current candidate exceeds the target
    path.push(candidates[i]);
    findCombinations(target - candidates[i].balance, candidates, i + 1, path, result);
    path.pop();
  }
  return result;
};

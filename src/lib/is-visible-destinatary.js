import { getNumberPlayers } from './get-number-players';
import { getPlayerNumber } from '@/lib/get-player-number';

export const isVisibleForMe = (destinataries) => {
  if (!destinataries) return true;
  const numberPlayers = getNumberPlayers();
  const playerNumber = getPlayerNumber();
  if (numberPlayers === 2) {
    return destinataries.ifTwo.indexOf(playerNumber) < 0;
  } else if (numberPlayers === 3) {
    return destinataries.ifThree.indexOf(playerNumber) < 0;
  } else {
    return destinataries.ifFour.indexOf(playerNumber) < 0;
  }
};


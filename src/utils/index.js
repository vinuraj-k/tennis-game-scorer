import {
  SCORE_SYSTEM,
  POINT,
  MATCH_COMPLETE,
  DEUCE,
  DEUCE_POINTS,
  GAME
} from '../constants';

export const getUmpireDecision = (winnerPoints, loserPoints, isTieBreaker) => {
  if(isTieBreaker) {
    return winnerPoints >= 6 && (winnerPoints-loserPoints >= 2) ? MATCH_COMPLETE : POINT;
  }

  if((loserPoints - winnerPoints === 1)  && (loserPoints >= 3)) {
    return DEUCE;
  }

  if(winnerPoints >= 3 && (winnerPoints - loserPoints >= 1)) {
    return GAME;
  }

  return POINT;
}

export const translateGameScore = (player1Points, player2Points, isTieBreak, scoreBoardLeaderName) => {

  let score = '';

  if(player1Points + player2Points === 0){
    return score;
  }

  if(isTieBreak){
    score = `${player1Points}-${player2Points}`;
  }

  if(!isTieBreak){
    score = (player1Points === DEUCE_POINTS && player2Points === DEUCE_POINTS) ? DEUCE : `${SCORE_SYSTEM[player1Points]}-${SCORE_SYSTEM[player2Points]}`;
  }

  if(!isTieBreak && (player1Points + player2Points === 7)){
    score =  `Advantage ${scoreBoardLeaderName}`;
  }

  return `${score}`;
}

export const isMatchComplete = (games1, games2) => Math.abs(games1-games2) === 2 && (games1 >= 6 || games2 >= 6);

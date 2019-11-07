import Player from '../Player';
import {
  getUmpireDecision,
  translateGameScore,
  isMatchComplete
} from '../../utils';
import {
  POINT,
  MATCH_COMPLETE,
  DEUCE, GAME,
  DEUCE_POINTS,
  RESET_GAME_POINTS,
  TIE_BREAK_SCORE
} from '../../constants';

export default class Match {
  constructor(player1, player2){
    this.player1 = new Player(player1);
    this.player2 = new Player(player2);
    this.isTieBreak = false;
    this.isMatchCompleted = false;
  }

  identifyPlayers(player){
    return player === this.player1.getName() ? [this.player1, this.player2] : [this.player2, this.player1];
  }

  getLeadingScorePlayer(){
    return this.player1.points > this.player2.points ? this.player1.name : this.player2.name;
  }

  setPlayerPoints(points){
    this.player1.points = points;
    this.player2.points = points;
  }

  checkForTieBreak(){
    this.isTieBreak = this.player1.games === TIE_BREAK_SCORE && this.player2.games === TIE_BREAK_SCORE;
  }

  updateScoreBoard(umpireDecision, pointWinner, pointLoser){
    switch(umpireDecision){
      case POINT:
        pointWinner.addPoint();
        break;
      case GAME:
        pointWinner.addGame();
        this.checkForTieBreak();
        if(!isMatchComplete(pointWinner.games, pointLoser.games)){
          this.setPlayerPoints(RESET_GAME_POINTS);
        }
        break;
      case DEUCE:
        this.setPlayerPoints(DEUCE_POINTS);
        break;
      case MATCH_COMPLETE:
        pointWinner.addGame();
        this.isMatchCompleted = true;
        break;
      default:
        break;
    }
  }

  pointWonBy(player){
    if(this.isMatchCompleted){
      this.score();
      return;
    }

    const [pointWinner, pointLoser] = this.identifyPlayers(player);

    const umpireDecision = getUmpireDecision(pointWinner.points, pointLoser.points, this.isTieBreak);

    this.updateScoreBoard(umpireDecision, pointWinner, pointLoser);

    if(this.isMatchCompleted || isMatchComplete(pointWinner.games, pointLoser.games)){
      this.isMatchCompleted = true;
      return;
    }
    console.log(`Point ${player}`);
  }

  score(){

    const setScore = `${this.player1.games}-${this.player2.games}`;

    let gameScore = translateGameScore(this.player1.points, this.player2.points, this.isTieBreak, this.getLeadingScorePlayer());
    gameScore = gameScore ? `, ${gameScore}` : gameScore;

    if(this.isMatchCompleted){
      console.log(`Match won by ${this.getLeadingScorePlayer()}\nScore ${setScore}\n`);
      return;
    }

    console.log(`${setScore}${gameScore}\n`);
  }
}

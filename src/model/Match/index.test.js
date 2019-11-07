import Match from '.';
import { isMatchComplete, getUmpireDecision } from '../../utils';

jest.mock('../../utils');

describe('Match', () => {
  let match;

  beforeEach(() => {
    match = new Match("player_one", "player_two");
  });
  it('should identifyPlayers', () => {
    const [pointWinner, pointLoser] = match.identifyPlayers("player_two");
    expect(pointWinner.getName()).toBe("player_two");
    expect(pointLoser.getName()).toBe("player_one");
  });

  it('should getLeadingScorePlayer', () => {
    match.player1.points = 3;
    match.player2.points = 1;
    expect(match.getLeadingScorePlayer()).toBe("player_one");
  });

  it('should setPlayerPoints', () => {
    match.setPlayerPoints(2)
    expect(match.player1.points).toBe(2);
    expect(match.player2.points).toBe(2);
  });

  it('should return true for tie break', () => {
    match.player1.games = 6;
    match.player2.games = 6;
    match.checkForTieBreak()
    expect(match.isTieBreak).toBeTruthy();
  });

  it('should return false when not tie break', () => {
    match.player1.games = 6;
    match.player2.games = 5;
    match.checkForTieBreak()
    expect(match.isTieBreak).not.toBeTruthy();
  });

  describe('updateScoreBoard', () => {

    beforeEach(() => {
      match = new Match("player_one", "player_two");
    });

    it('should increment point', () => {
      match.updateScoreBoard('POINT', match.player1, match.player2);
      expect(match.player1.points).toBe(1);
      expect(match.player2.points).toBe(0);
    });

    it('should increment game', () => {
      match.updateScoreBoard('GAME', match.player1, match.player2);

      expect(match.player1.games).toBe(1);
      expect(match.player2.games).toBe(0);
    });

    it('should set tie break', () => {
      match.player1.games = 5;
      match.player2.games = 6;
      match.updateScoreBoard('GAME', match.player1, match.player2);

      expect(match.isTieBreak).toBeTruthy();
    });

    it('should reset points for new game', () => {
      //given
      match.player1.points = 3;
      match.player2.points = 2;
      //when
      isMatchComplete.mockReturnValue(false);
      //then
      match.updateScoreBoard('GAME', match.player1, match.player2);
      expect(match.player1.points).toBe(0);
      expect(match.player2.points).toBe(0);
    });

    it('should not reset points when match is complete', () => {
      //given
      match.player1.points = 3;
      match.player2.points = 2;
      match.player1.games = 5;
      match.player2.games = 2;
      //when
      isMatchComplete.mockReturnValue(true);
      //then
      match.updateScoreBoard('GAME', match.player1, match.player2);
      expect(match.player1.points).toBe(3);
      expect(match.player2.points).toBe(2);
    });

    it('should set deuce', () => {
      match.player1.points = 3;
      match.player2.points = 4;
      match.updateScoreBoard('DEUCE', match.player1, match.player2);

      expect(match.player1.points).toBe(3);
      expect(match.player2.points).toBe(3);
    });

    it('should set match complete and increment games', () => {
      match.isMatchCompleted = false;
      match.updateScoreBoard('MATCH_COMPLETE', match.player1, match.player2);

      expect(match.isMatchCompleted).toBeTruthy();
      expect(match.player1.games).toBe(1);
      expect(match.player2.games).toBe(0);
    });

  });

  describe('pointWonBy', () => {

    beforeEach(() => {
      match = new Match("player_one", "player_two");
    });
    it('should update score board correctly', () => {
      match.player1.games = 3;
      match.player2.games = 2;
      match.player1.points = 1;
      match.player2.points = 3;

      getUmpireDecision.mockReturnValue("GAME")

      match.pointWonBy("player_two");

      expect(match.player2.games).toBe(3);
    });

    it('should not update score board if match is complete', () => {
      match.isMatchCompleted = true;

      match.pointWonBy("player_two");

      expect(getUmpireDecision).not.toHaveBeenCalled();
    });

  });

});

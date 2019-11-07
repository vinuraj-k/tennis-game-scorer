import {
  getUmpireDecision,
  translateGameScore,
  isMatchComplete
} from '.';

const TIE_BREAK = true;

describe('getUmpireDecision', () => {
  it('should return POINT when tieBreaker is 2-1', () => {
    expect(getUmpireDecision(2, 1, TIE_BREAK)).toBe('POINT');
  });

  it('should return POINT when tieBreaker is 10-9', () => {
    expect(getUmpireDecision(10, 9, TIE_BREAK)).toBe('POINT');
  });

  it('should return MATCH_COMPLETE when tieBreaker is 9-7', () => {
    expect(getUmpireDecision(9, 7, TIE_BREAK)).toBe('MATCH_COMPLETE');
  });

  it('should return MATCH_COMPLETE when tieBreaker is 6-4', () => {
    expect(getUmpireDecision(6, 4, TIE_BREAK)).toBe('MATCH_COMPLETE');
  });

  it('should return DEUCE when score is 40-Adv', () => {
    expect(getUmpireDecision(3, 4, !TIE_BREAK)).toBe('DEUCE');
  });

  it('should return DEUCE when score is 30-40', () => {
    expect(getUmpireDecision(2, 3, !TIE_BREAK)).toBe('DEUCE');
  });

  it('should return GAME when score is 40-30', () => {
    expect(getUmpireDecision(3, 2, !TIE_BREAK)).toBe('GAME');
  });

  it('should return GAME when score is Adv-40', () => {
    expect(getUmpireDecision(4, 3, !TIE_BREAK)).toBe('GAME');
  });

  it('should return GAME when score is 40-15', () => {
    expect(getUmpireDecision(3, 1, !TIE_BREAK)).toBe('GAME');
  });

  it('should return POINT when score is 30-15', () => {
    expect(getUmpireDecision(3, 1, !TIE_BREAK)).toBe('GAME');
  });

  it('should return POINT when score is LOVE ALL', () => {
    expect(getUmpireDecision(0, 0, !TIE_BREAK)).toBe('POINT');
  });
});

describe('translateGameScore', () => {
  const name = 'mockPlayerName';

  it('should return "0-1" for game score for 0-1 during tieBreaker', () => {
    expect(translateGameScore(0, 1, TIE_BREAK, name)).toBe('0-1');
  });

  it('should return empty for game score for 0-0 during tieBreaker', () => {
    expect(translateGameScore(0, 0, TIE_BREAK, name)).toHaveLength(0);
  });

  it('should return empty for game score for 0-0', () => {
    expect(translateGameScore(0, 0, !TIE_BREAK, name)).toHaveLength(0);
  });

  it('should return "0-15" for game score for 0-1', () => {
    expect(translateGameScore(0, 1, !TIE_BREAK, name)).toBe('0-15');
  });

  it('should return "Advantage mockPlayerName" for game score for Adv-40', () => {
    expect(translateGameScore(4, 3, !TIE_BREAK, name)).toBe('Advantage mockPlayerName');
  });

  it('should return "Advantage mockPlayerName" for game score for 40-Adv', () => {
    expect(translateGameScore(3, 4, !TIE_BREAK, name)).toBe('Advantage mockPlayerName');
  });

  it('should return "Deuce" for game score for 40-40', () => {
    expect(translateGameScore(3, 3, !TIE_BREAK, name)).toBe('DEUCE');
  });
});

describe('isMatchComplete', () => {
  it('should return false when score board is 1-2', () => {
    expect(isMatchComplete(1, 2)).toBe(false);
  });

  it('should return false when score board is 6-6', () => {
    expect(isMatchComplete(6, 6)).toBe(false);
  });

  it('should return true when score board is 6-4', () => {
    expect(isMatchComplete(6, 4)).toBe(true);
  });

  it('should return true when score board is 7-5', () => {
    expect(isMatchComplete(7, 5)).toBe(true);
  });
});

import Player from '.';

describe('Player', () => {
  let player;
  beforeEach(() => {
    player = new Player("playerName");
  });
  it('should initialize with default values', () => {
    expect(player.points).toBe(0);
    expect(player.games).toBe(0);
    expect(player.name).toBe("playerName");
  });

  it('should get player name', () => {
    expect(player.getName()).toBe("playerName");
  });

  it('should increment points', () => {
    player.addPoint();
    expect(player.points).toBe(1);
  });

  it('should increment games', () => {
    player.addGame();
    expect(player.games).toBe(1);
  });
});
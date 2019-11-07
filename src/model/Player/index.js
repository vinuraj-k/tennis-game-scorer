export default class Player {
  constructor(player){
    this.name = player;
    this.points = 0;
    this.games = 0;
  }

  getName(){
    return this.name;
  }

  addPoint(){
    this.points++;
  }

  addGame(){
    return this.games++;
  }
}

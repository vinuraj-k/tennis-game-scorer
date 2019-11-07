import Match from './model/Match';

console.log('Ready...play');

const match = new Match('Rafa', 'FedX');

const MATCH_TYPE = ['TieBreaker', 'Easy', 'Hard'];

const matchSelected = MATCH_TYPE[0]; // current Selection: TieBreaker

match.score();                     // | Rafa || 0 |   0  |
                                   // | FedX || 0 |   0  |

match.pointWonBy('Rafa');          // | Rafa || 0 |  15  |
match.score();                     // | FedX || 0 |   0  |

match.pointWonBy('FedX');          // | Rafa || 0 |  15  |
match.score();                     // | FedX || 0 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 0 |  30  |
match.score();                     // | FedX || 0 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 0 |  40  |
match.score();                     // | FedX || 0 |  15  |

match.pointWonBy('FedX');          // | Rafa || 0 |  40  |
match.score();                     // | FedX || 0 |  30  |

match.pointWonBy('FedX');          // | Rafa || 0 |  40  |
match.score();                     // | FedX || 0 |  40  |

match.pointWonBy('Rafa');          // | Rafa || 0 | Adv  |
match.score();                     // | FedX || 0 |  40  |

match.pointWonBy('FedX');          // | Rafa || 0 |  40  |
match.score();                     // | FedX || 0 |  40  |

match.pointWonBy('FedX');          // | Rafa || 0 |  40  |
match.score();                     // | FedX || 0 | Adv  |

match.pointWonBy('Rafa');          // | Rafa || 0 |  40  |
match.score();                     // | FedX || 0 |  40  |

match.pointWonBy('Rafa');          // | Rafa || 0 | Adv  |
match.score();                     // | FedX || 0 |  40  |

match.pointWonBy('Rafa');          // | Rafa || 1 |   0  |
match.score();                     // | FedX || 0 |   0  |

console.log("---------\n");
//--------------------------------------------------------

match.pointWonBy('Rafa');          // | Rafa || 1 |  15  |
match.score();                     // | FedX || 0 |   0  |

match.pointWonBy('FedX');          // | Rafa || 1 |  15  |
match.score();                     // | FedX || 0 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 1 |  30  |
match.score();                     // | FedX || 0 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 1 |  40  |
match.score();                     // | FedX || 0 |  15  |

match.pointWonBy('FedX');          // | Rafa || 1 |  40  |
match.score();                     // | FedX || 0 |  30  |

match.pointWonBy('Rafa');          // | Rafa || 2 |   0  |
match.score();                     // | FedX || 0 |   0  |

console.log("---------\n");
//--------------------------------------------------------

match.pointWonBy('FedX');          // | Rafa || 2 |   0  |
match.score();                     // | FedX || 0 |  15  |

match.pointWonBy('FedX');          // | Rafa || 2 |   0  |
match.score();                     // | FedX || 0 |  30  |

match.pointWonBy('FedX');          // | Rafa || 2 |   0  |
match.score();                     // | FedX || 0 |  40  |

match.pointWonBy('FedX');          // | Rafa || 2 |   0  |
match.score();                     // | FedX || 1 |   0  |

console.log("---------\n");
//--------------------------------------------------------

match.pointWonBy('Rafa');          // | Rafa || 2 |  15  |
match.score();                     // | FedX || 1 |   0  |

match.pointWonBy('FedX');          // | Rafa || 2 |  15  |
match.score();                     // | FedX || 1 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 2 |  30  |
match.score();                     // | FedX || 1 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 2 |  40  |
match.score();                     // | FedX || 1 |  15  |

match.pointWonBy('FedX');          // | Rafa || 2 |  40  |
match.score();                     // | FedX || 1 |  30  |

match.pointWonBy('FedX');          // | Rafa || 2 |  40  |
match.score();                     // | FedX || 1 |  40  |

match.pointWonBy('Rafa');          // | Rafa || 2 | Adv  |
match.score();                     // | FedX || 1 |  40  |

match.pointWonBy('Rafa');          // | Rafa || 3 |   0  |
match.score();                     // | FedX || 1 |   0  |

console.log("---------\n");
//--------------------------------------------------------

match.pointWonBy('FedX');          // | Rafa || 3 |   0  |
match.score();                     // | FedX || 1 |  15  |

match.pointWonBy('FedX');          // | Rafa || 3 |   0  |
match.score();                     // | FedX || 1 |  30  |

match.pointWonBy('FedX');          // | Rafa || 3 |   0  |
match.score();                     // | FedX || 1 |  40  |

match.pointWonBy('Rafa');          // | Rafa || 3 |  15  |
match.score();                     // | FedX || 1 |  40  |

match.pointWonBy('Rafa');          // | Rafa || 3 |  30  |
match.score();                     // | FedX || 1 |  40  |

match.pointWonBy('Rafa');          // | Rafa || 3 |  40  |
match.score();                     // | FedX || 1 |  40  |

match.pointWonBy('FedX');          // | Rafa || 3 |  40  |
match.score();                     // | FedX || 1 | Adv  |

match.pointWonBy('FedX');          // | Rafa || 3 |   0  |
match.score();                     // | FedX || 2 |   0  |

console.log("---------\n");
//--------------------------------------------------------

match.pointWonBy('FedX');          // | Rafa || 3 |   0  |
match.score();                     // | FedX || 2 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 3 |  15  |
match.score();                     // | FedX || 2 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 3 |  30  |
match.score();                     // | FedX || 2 |  15  |

match.pointWonBy('FedX');          // | Rafa || 3 |  30  |
match.score();                     // | FedX || 2 |  30  |

match.pointWonBy('FedX');          // | Rafa || 3 |  30  |
match.score();                     // | FedX || 2 |  40  |

match.pointWonBy('FedX');          // | Rafa || 3 |   0  |
match.score();                     // | FedX || 3 |   0  |

console.log("---------\n");
//--------------------------------------------------------

match.pointWonBy('FedX');          // | Rafa || 3 |   0  |
match.score();                     // | FedX || 3 |  15  |

match.pointWonBy('FedX');          // | Rafa || 3 |   0  |
match.score();                     // | FedX || 3 |  30  |

match.pointWonBy('FedX');          // | Rafa || 3 |   0  |
match.score();                     // | FedX || 3 |  40  |

match.pointWonBy('FedX');          // | Rafa || 3 |   0  |
match.score();                     // | FedX || 4 |   0  |

console.log("---------\n");
//--------------------------------------------------------

match.pointWonBy('Rafa');          // | Rafa || 3 |  15  |
match.score();                     // | FedX || 4 |   0  |

match.pointWonBy('FedX');          // | Rafa || 3 |  15  |
match.score();                     // | FedX || 4 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 3 |  30  |
match.score();                     // | FedX || 4 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 3 |  40  |
match.score();                     // | FedX || 4 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 4 |   0  |
match.score();                     // | FedX || 4 |   0  |

console.log("---------\n");
//--------------------------------------------------------

match.pointWonBy('Rafa');          // | Rafa || 4 |  15  |
match.score();                     // | FedX || 4 |   0  |

match.pointWonBy('FedX');          // | Rafa || 4 |  15  |
match.score();                     // | FedX || 4 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 4 |  30  |
match.score();                     // | FedX || 4 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 4 |  40  |
match.score();                     // | FedX || 4 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 5 |   0  |
match.score();                     // | FedX || 4 |   0  |

console.log("---------\n");
//--------------------------------------------------------

if(matchSelected === MATCH_TYPE[0]){

match.pointWonBy('FedX');          // | Rafa || 5 |   0  |
match.score();                     // | FedX || 4 |  15  |

match.pointWonBy('FedX');          // | Rafa || 5 |   0  |
match.score();                     // | FedX || 4 |  30  |

match.pointWonBy('FedX');          // | Rafa || 5 |   0  |
match.score();                     // | FedX || 4 |  40  |

match.pointWonBy('FedX');          // | Rafa || 5 |   0  |
match.score();                     // | FedX || 5 |   0  |

console.log("---------\n");
//--------------------------------------------------------

match.pointWonBy('FedX');          // | Rafa || 5 |   0  |
match.score();                     // | FedX || 5 |  15  |

match.pointWonBy('FedX');          // | Rafa || 5 |   0  |
match.score();                     // | FedX || 5 |  30  |

match.pointWonBy('FedX');          // | Rafa || 5 |   0  |
match.score();                     // | FedX || 5 |  40  |

match.pointWonBy('FedX');          // | Rafa || 5 |   0  |
match.score();                     // | FedX || 6 |   0  |

console.log("---------\n");
//--------------------------------------------------------

match.pointWonBy('Rafa');          // | Rafa || 5 |  15  |
match.score();                     // | FedX || 6 |   0  |

match.pointWonBy('FedX');          // | Rafa || 5 |  15  |
match.score();                     // | FedX || 6 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 5 |  30  |
match.score();                     // | FedX || 6 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 5 |  40  |
match.score();                     // | FedX || 6 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 6 |   0  |
match.score();                     // | FedX || 6 |   0  |

console.log("---------\n");
//--------------------------------------------------------

match.pointWonBy('Rafa');          // | Rafa || 6 |   1  |
match.score();                     // | FedX || 6 |   0  |

match.pointWonBy('FedX');          // | Rafa || 6 |   1  |
match.score();                     // | FedX || 6 |   1  |

match.pointWonBy('Rafa');          // | Rafa || 6 |   2  |
match.score();                     // | FedX || 6 |   1  |

match.pointWonBy('Rafa');          // | Rafa || 6 |   3  |
match.score();                     // | FedX || 6 |   1  |

match.pointWonBy('FedX');          // | Rafa || 6 |   3  |
match.score();                     // | FedX || 6 |   2  |

match.pointWonBy('FedX');          // | Rafa || 6 |   3  |
match.score();                     // | FedX || 6 |   3  |

match.pointWonBy('Rafa');          // | Rafa || 6 |   4  |
match.score();                     // | FedX || 6 |   3  |

match.pointWonBy('Rafa');          // | Rafa || 6 |   5  |
match.score();                     // | FedX || 6 |   3  |

match.pointWonBy('FedX');          // | Rafa || 6 |   5  |
match.score();                     // | FedX || 6 |   4  |

match.pointWonBy('FedX');          // | Rafa || 6 |   5  |
match.score();                     // | FedX || 6 |   5  |

match.pointWonBy('Rafa');          // | Rafa || 6 |   6  |
match.score();                     // | FedX || 6 |   5  |

match.pointWonBy('Rafa');          // | Rafa || 6 |   7  |
match.score();                     // | FedX || 6 |   5  |

match.pointWonBy('FedX');          // | Rafa || 6 |   7  |
match.score();                     // | FedX || 6 |   6  |

match.pointWonBy('Rafa');          // | Rafa || 6 |   8  |
match.score();                     // | FedX || 6 |   6  |

match.pointWonBy('Rafa');          // | Rafa || 7 |   8  |
match.score();                     // | FedX || 6 |   6  |

}

if(matchSelected === MATCH_TYPE[1]){

match.pointWonBy('Rafa');          // | Rafa || 5 |  15  |
match.score();                     // | FedX || 4 |   0  |

match.pointWonBy('FedX');          // | Rafa || 5 |  15  |
match.score();                     // | FedX || 4 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 5 |  30  |
match.score();                     // | FedX || 4 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 5 |  40  |
match.score();                     // | FedX || 4 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 6 |   0  |
match.score();                     // | FedX || 4 |   0  |

}

if(matchSelected === MATCH_TYPE[2]){

match.pointWonBy('FedX');          // | Rafa || 5 |   0  |
match.score();                     // | FedX || 4 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 5 |  15  |
match.score();                     // | FedX || 4 |  15  |

match.pointWonBy('FedX');          // | Rafa || 5 |  15  |
match.score();                     // | FedX || 4 |  30  |

match.pointWonBy('FedX');          // | Rafa || 5 |  15  |
match.score();                     // | FedX || 4 |  15  |

match.pointWonBy('FedX');          // | Rafa || 5 |   0  |
match.score();                     // | FedX || 5 |   0  |

console.log("---------\n");
//--------------------------------------------------------

match.pointWonBy('Rafa');          // | Rafa || 5 |  15  |
match.score();                     // | FedX || 5 |   0  |

match.pointWonBy('FedX');          // | Rafa || 5 |  15  |
match.score();                     // | FedX || 5 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 5 |  30  |
match.score();                     // | FedX || 5 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 5 |  40  |
match.score();                     // | FedX || 5 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 6 |   0  |
match.score();                     // | FedX || 5 |   0  |

console.log("---------\n");
//--------------------------------------------------------

match.pointWonBy('Rafa');          // | Rafa || 6 |  15  |
match.score();                     // | FedX || 5 |   0  |

match.pointWonBy('FedX');          // | Rafa || 6 |  15  |
match.score();                     // | FedX || 5 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 6 |  30  |
match.score();                     // | FedX || 5 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 6 |  40  |
match.score();                     // | FedX || 5 |  15  |

match.pointWonBy('Rafa');          // | Rafa || 7 |   0  |
match.score();                     // | FedX || 5 |   0  |

}

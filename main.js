const team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    },
    {
      firstName: 'Pete',
      lastName: 'Wheeler',
      age: 54
    }
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Broccoli',
      teamPoints: 50,
      opponentPoints: 20
    },
    {
      opponent: 'Spinach',
      teamPoints: 80,
      opponentPoints: 81
    },
  ],
  get players () {
    return this._players;
  },
  get games () {
    return this._games;
  },
  addPlayer (firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this._players.push(player);
  },
  addGame (opponent, teamPoints, opponentPoints) {
    let game = {
      oppoonent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this._games.push(game);
  },
}

team.addPlayer('Steph', 'Curry', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)

console.log(team._players)

team.addGame('Carrots', 45, 23)
team.addGame('Potato', 52, 21)
team.addGame('Tomato', 55, 20)

console.log(team._games)
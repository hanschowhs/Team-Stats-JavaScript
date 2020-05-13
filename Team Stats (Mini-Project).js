// Tasks 1 to 8:

const team = {
  _players : [
    {
      firstName: 'Lionel',
      lastName: 'Messi',
      age: new Date().getFullYear() - 1987 // new Date() creates a new date object with the current date and time. The getFullYear() method returns the year of a date as a four-digit number. Hence, new Date().getFullYear() returns the current year as a four-digit number. console.log(typeof new Date().getFullYear()) returns 'number' so you can perform arithmetic operation on it. Here, we use it to return the current age of the player.
    }, {
      firstName: 'Cristiano', 
      lastName: 'Ronaldo', 
      age: new Date().getFullYear() - 1985
    }, {
      firstName: 'David', 
      lastName: 'Beckham', 
      age: new Date().getFullYear() - 1975
    }
  ],
  _games : [
    {
      opponent: 'Real Madrid',
      teamPoints: 3,
      opponentPoints: 2
    }, {
      opponent: 'Barcelona',
      teamPoints: 1,
      opponentPoints: 0
    }, {
      opponent: 'Liverpool',
      teamPoints: 5,
      opponentPoints: 4
    }
  ], 
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player =  {
      firstName: firstName, 
      lastName: lastName,
      age: age 
    }; // NOTE: Use 'let' instead of 'const' declared variable probably because this 'player' variable will be reassigned a different player object each time this method is called.
    this._players.push(player);
  },
  addGame(opp, ourPts, oppPts) {
    let game = {
      opponent: opp,
      teamPoints: ourPts,
      opponentPoints: oppPts
    };
    this._games.push(game);
  }
};
// To check if the above object is functional by accessing the initial properties' values.
console.log(team._games[0])
// 3 ways to access the properties values:
console.log('\n', team['_players']); // Bracket notation. Always works but keys must be in quotation marks. And the ONLY way when accessing keys that have numbers, spaces, or special characters in them. 
console.log('\n', team._players); // Dot notation.
console.log('\n', team.players); // Getter method - players() - for the '_players' property / key, which returns "return this._players" where "this" is the calling object 'team' here. Getter methods do NOT need to be called with a set of parentheses. Syntactically, it looks like we’re accessing a property. NOTE: When using getter (and setter) methods, properties cannot share the same name as the getter/setter method. If we do so, then calling the property's getter method will result in an infinite call stack error. One workaround is to add an underscore before the property name as it's done here.

// Adding 3 players (REMEMBER to input strings with 'quotation marks'!!!):
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
// To check if these 3 players have been successfully 'pushed' / appended to the '_players' array.
console.log('\n', team.players); // Successful!!! Using the getter method - players() - for the '_players' property / key, which returns "return this._players" where "this" is the calling object 'team' here. 

// Task 9:

// Adding 3 games (REMEMBER to input strings with 'quotation marks'!!!):
team.addGame('Man U', 2, 5);
team.addGame('Arsenal', 3, 1);
team.addGame('Everton', 4, 5);
// To check if these 3 players have been successfully 'pushed' / appended to the '_players' array.
console.log('\n', team.games); // Successful!!! Using the getter method - games() - for the '_games' property / key, which returns "return this._games" where "this" is the calling object 'team' here. 


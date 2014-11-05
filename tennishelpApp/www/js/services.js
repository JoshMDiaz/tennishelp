angular.module('tennishelp.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Players', function() {
  // Might use a resource here that returns a JSON array

  var players = [
    { id: 0, name: 'Michael Smith', score: '6-1, 6-2', result: 'W', firstServe: 58, aces: 5, doubleFaults: 1, unforcedErrors: 7, winOnFirst: 81, winOnSecond: 66, winners: 8, receiving: 87, breakPoints: "5 of 6 = 83", net: "7 of 8 = 88", totalPoints: 25 },

    { id: 1, name: 'Sean Peterson', score: '6-4, 7-5', result: 'W', firstServe: 65, aces: 1, doubleFaults: 0, unforcedErrors: 9, winOnFirst: 80, winOnSecond: 56, winners: 18, receiving: 59, breakPoints: "2 of 3 = 66", net: "8 of 8 = 100", totalPoints: 45 },

    { id: 2, name: 'Yuki Asari', score: '6-2, 1-6, 6-2', result: 'L', firstServe: 45, aces: 0, doubleFaults: 5, unforcedErrors: 17, winOnFirst: 61, winOnSecond: 36, winners: 5, receiving: 45, breakPoints: "2 of 4 = 50", net: "7 of 8 = 88", totalPoints: 25 },

    { id: 3, name: 'Roger Federer', score: '6-4, 6-4', result: 'W', firstServe: 58, aces: 1, doubleFaults: 1, unforcedErrors: 7, winOnFirst: 81, winOnSecond: 46, winners: 8, receiving: 57, breakPoints: "0 of 3 = 0", net: "7 of 8 = 88", totalPoints: 25 },

    { id: 4, name: 'Travis Rychen', score: '6-2, 6-1', result: 'W', firstServe: 58, aces: 1, doubleFaults: 1, unforcedErrors: 7, winOnFirst: 81, winOnSecond: 46, winners: 8, receiving: 57, breakPoints: "0 of 3 = 0", net: "7 of 8 = 88", totalPoints: 25 },

    { id: 5, name: 'Andre Agassi', score: '6-2, 6-4', result: 'L', firstServe: 58, aces: 1, doubleFaults: 1, unforcedErrors: 7, winOnFirst: 81, winOnSecond: 46, winners: 8, receiving: 57, breakPoints: "0 of 3 = 0", net: "7 of 8 = 88", totalPoints: 25 },

    { id: 6, name: 'Rob Korich', score: '6-2, 3-6, 6-2', result: 'W', firstServe: 58, aces: 1, doubleFaults: 1, unforcedErrors: 7, winOnFirst: 81, winOnSecond: 46, winners: 8, receiving: 57, breakPoints: "0 of 3 = 0", net: "7 of 8 = 88", totalPoints: 25 },

    { id: 7, name: 'Shane Medina', score: '6-1, 6-4', result: 'W', firstServe: 58, aces: 1, doubleFaults: 1, unforcedErrors: 7, winOnFirst: 81, winOnSecond: 46, winners: 8, receiving: 57, breakPoints: "0 of 3 = 0", net: "7 of 8 = 88", totalPoints: 25 },

    { id: 8, name: 'Rafael Nadal', score: '6-4, 6-3', result: 'L', firstServe: 58, aces: 1, doubleFaults: 1, unforcedErrors: 7, winOnFirst: 81, winOnSecond: 46, winners: 8, receiving: 57, breakPoints: "0 of 3 = 0", net: "7 of 8 = 88", totalPoints: 25 },

    { id: 9, name: 'Andy Roddick', score: '1-6, 6-2, 6-4', result: 'W', firstServe: 58, aces: 1, doubleFaults: 1, unforcedErrors: 7, winOnFirst: 81, winOnSecond: 46, winners: 8, receiving: 57, breakPoints: "0 of 3 = 0", net: "7 of 8 = 88", totalPoints: 25 }

  ];

  return {
    all: function() {
      return players;
    },
    get: function(playerId) {
      // Simple index lookup
      return players[playerId];
    }
  }
});

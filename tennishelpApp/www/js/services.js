angular.module('tennishelp.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Players', function() {
  // Might use a resource here that returns a JSON array

  var players = [
    { id: 0, name: 'Michael Smith', score: '6-1, 6-2', result: 'W' },
    { id: 1, name: 'Sean Peterson', score: '6-4, 7-5', result: 'W' },
    { id: 2, name: 'Yuki Asari', score: '6-2, 1-6, 6-2', result: 'L' },
    { id: 3, name: 'Roger Federer', score: '6-4, 6-4', result: 'W' },
    { id: 4, name: 'Travis Rychen', score: '6-2, 6-1', result: 'W' },
    { id: 5, name: 'Andre Agassi', score: '6-2, 6-4', result: 'L' },
    { id: 6, name: 'Rob Korich', score: '6-2, 3-6, 6-2', result: 'W' },
    { id: 7, name: 'Shane Medina', score: '6-1, 6-4', result: 'W' },
    { id: 8, name: 'Rafael Nadal', score: '6-4, 6-3', result: 'L' },
    { id: 9, name: 'Andy Roddick', score: '1-6, 6-2, 6-4', result: 'W' }
  ];

  return {
    all: function() {
      return players;
    },
    get: function(friendId) {
      // Simple index lookup
      return players[playerId];
    }
  }
});

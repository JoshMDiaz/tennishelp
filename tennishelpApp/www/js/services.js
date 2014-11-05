angular.module('tennishelp.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Players', function() {
  // Might use a resource here that returns a JSON array

  var players = [
    { id: 0, name: 'Michael Smith' },
    { id: 1, name: 'Sean Peterson' },
    { id: 2, name: 'Yuki Asari' },
    { id: 3, name: 'Roger Federer' },
    { id: 4, name: 'Travis Rychen' },
    { id: 5, name: 'Andre Agassi' },
    { id: 6, name: 'Rob Korich' },
    { id: 7, name: 'Shane Medina' },
    { id: 8, name: 'Rafael Nadal' },
    { id: 9, name: 'Andy Roddick' }
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

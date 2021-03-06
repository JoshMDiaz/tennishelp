angular.module("tennishelp.services", [])

/**
 * A simple example service that returns some data.
 */
.factory("Players", function() {
  // Might use a resource here that returns a JSON array

  var players = [
    { id: 0, name: "Michael Smith", score: "6-1, 6-2", result: "W", firstServe: 58, aces: 5, doubleFaults: 1, unforcedErrors: 7, winOnFirst: 81, winOnSecond: 66, winners: 8, receiving: 87, breakPoints: "5 of 6 = 83", net: "7 of 8 = 88", totalPoints: 25, image: "img/cat.png" },

    { id: 1, name: "Sean Peterson", score: "6-4, 7-5", result: "W", firstServe: 65, aces: 1, doubleFaults: 0, unforcedErrors: 9, winOnFirst: 80, winOnSecond: 56, winners: 18, receiving: 59, breakPoints: "2 of 3 = 66", net: "8 of 8 = 100", totalPoints: 45, image: "img/cat.png" },

    { id: 2, name: "Yuki Asari", score: "6-2, 1-6, 6-2", result: "L", firstServe: 45, aces: 0, doubleFaults: 5, unforcedErrors: 17, winOnFirst: 61, winOnSecond: 36, winners: 5, receiving: 45, breakPoints: "3 of 4 = 75", net: "7 of 8 = 88", totalPoints: 25, image: "img/cat.png" },

    { id: 3, name: "Roger Federer", score: "6-4, 6-4", result: "W", firstServe: 68, aces: 3, doubleFaults: 1, unforcedErrors: 7, winOnFirst: 82, winOnSecond: 46, winners: 8, receiving: 57, breakPoints: "2 of 6 = 33", net: "18 of 20 = 90", totalPoints: 40, image: "img/cat.png" },

    { id: 4, name: "Travis Rychen", score: "6-2, 6-1", result: "W", firstServe: 54, aces: 6, doubleFaults: 3, unforcedErrors: 7, winOnFirst: 65, winOnSecond: 35, winners: 8, receiving: 57, breakPoints: "5 of 10 = 50", net: "12 of 13 = 92", totalPoints: 31, image: "img/cat.png" },

    { id: 5, name: "Andre Agassi", score: "6-2, 6-4", result: "L", firstServe: 48, aces: 2, doubleFaults: 2, unforcedErrors: 7, winOnFirst: 69, winOnSecond: 47, winners: 8, receiving: 57, breakPoints: "1 of 3 = 33", net: "1 of 5 = 20", totalPoints: 35, image: "img/cat.png" },

    { id: 6, name: "Rob Sty", score: "6-2, 3-6, 6-2", result: "W", firstServe: 67, aces: 5, doubleFaults: 1, unforcedErrors: 7, winOnFirst: 75, winOnSecond: 66, winners: 8, receiving: 57, breakPoints: "4 of 4 = 100", net: "14 of 15 = 93", totalPoints: 33, image: "img/cat.png" },

    { id: 7, name: "Shane Medina", score: "6-1, 6-4", result: "W", firstServe: 69, aces: 7, doubleFaults: 3, unforcedErrors: 7, winOnFirst: 80, winOnSecond: 26, winners: 14, receiving: 57, breakPoints: "4 of 7 = 57", net: "12 of 15 = 8", totalPoints: 31, image: "img/cat.png" },

    { id: 8, name: "Rafael Nadal", score: "6-4, 6-3", result: "L", firstServe: 42, aces: 0, doubleFaults: 5, unforcedErrors: 7, winOnFirst: 77, winOnSecond: 25, winners: 12, receiving: 57, breakPoints: "0 of 3 = 0", net: "9 of 18 = 50", totalPoints: 36, image: "img/cat.png" },

    { id: 9, name: "Andy Yip", score: "1-6, 6-2, 6-4", result: "W", firstServe: 57, aces: 10, doubleFaults: 0, unforcedErrors: 7, winOnFirst: 70, winOnSecond: 39, winners: 18, receiving: 57, breakPoints: "3 of 6 = 50", net: "10 of 12 = 83", totalPoints: 29, image: "img/cat.png" }

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



// .factory("Videos", function() {
//   // Might use a resource here that returns a JSON array
//
//   var videos = [
//     { id: 0, name: "Michael Smith" },
//
//     { id: 0, name: "Michael Smith" },
//
//     { id: 0, name: "Michael Smith" },
//
//     { id: 0, name: "Michael Smith" },
//
//     { id: 0, name: "Michael Smith" },
//
//     { id: 0, name: "Michael Smith" },
//
//     { id: 0, name: "Michael Smith" }
//   ];
//
//   return {
//     all: function() {
//       return videos;
//     },
//     get: function(videoId) {
//       // Simple index lookup
//       return videos[videoId];
//     }
//   }
// });

angular.module('tennishelp.controllers', [])

.controller('HomeCtrl', function($scope) {
})

.controller('StatsCtrl', function($scope) {
  $scope.myScore = function() {
    alert('Player 1');
  };

  $scope.opponentScore = function() {
    alert('Player 2');
  };

  $scope.undo = function() {
    alert('Undo');
  };
})






.controller('ResultsCtrl', function($scope, Players) {
  $scope.players = Players.all();
})

.controller('StatsResultsCtrl', function($scope, $stateParams, Players) {
  $scope.player = Players.get($stateParams.playerId);
})






.controller('InProgressCtrl', function($scope) {
  $scope.submit = function() {
    alert('submit');
  };

})

.controller('MatchStatsCtrl', function($scope) {
  $scope.switch = function() {
    alert('Switch');
  };

  $scope.firstServe = function() {
    alert('First Serve');
  };

  $scope.secondServe = function() {
    alert('Second Serve');
  };

  $scope.ace = function() {
    alert('Ace');
  };

  $scope.doubleFault = function() {
    alert('Double Fault');
  };

  $scope.forehandWinner = function() {
    alert('forehandWinner');
  };

  $scope.forehandError = function() {
    alert('forehandError');
  };

  $scope.backhandWinner = function() {
    alert('backhandWinner');
  };

  $scope.backhandError = function() {
    alert('backhandError');
  };

  $scope.netWinner = function() {
    alert('netWinner');
  };

  $scope.netError = function() {
    alert('netError');
  };

  $scope.breakWin = function() {
    alert('breakWin');
  };

  $scope.breakLose = function() {
    alert('breakLose');
  };

  $scope.undo = function() {
    alert('Undo');
  };

})

.controller('GalleryCtrl', function($scope, Videos) {
  $scope.players = Players.all();
})

// .controller('PlayVideoCtrl', function($scope, $stateParams, Videos) {
//   $scope.video = Videos.get($stateParams.videoId);
// });


.controller('SettingsCtrl', function($scope) {
})

.controller('VideoCtrl', function($scope) {
});

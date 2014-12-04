angular.module('tennishelp.controllers', [])

.controller('HomeCtrl', function($scope) {
})

.controller('StatsCtrl', function($scope) {
  var point = 15;
  $scope.pointValue = point;

  var opponentPoint = 15;
  $scope.opponentPointValue = opponentPoint;

  $scope.myScore = function() {
    $scope.point = point++;
    return $scope.point;
  };

  $scope.opponentScore = function() {
    $scope.opponentPoint = opponentPoint++;
    return $scope.opponentPoint;
  };

  $scope.undo = function() {
    $scope.point = point--;
    return $scope.point;
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
    alert('Forehand Winner');
  };

  $scope.forehandError = function() {
    alert('Forehand Error');
  };

  $scope.backhandWinner = function() {
    alert('Backhand Winner');
  };

  $scope.backhandError = function() {
    alert('Backhand Error');
  };

  $scope.netWinner = function() {
    alert('Net Winner');
  };

  $scope.netError = function() {
    alert('Net Error');
  };

  $scope.breakWin = function() {
    alert('Break Point Win');
  };

  $scope.breakLose = function() {
    alert('Break Point Lose');
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

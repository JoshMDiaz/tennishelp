angular.module('tennishelp.controllers', [])

.controller('HomeCtrl', function($scope) {
})

.controller('StatsCtrl', function($scope) {
  $scope.myScore = function() {
    alert('It Works!');
  };
})






.controller('ResultsCtrl', function($scope, Players) {
  $scope.players = Players.all();
})

.controller('StatsResultsCtrl', function($scope, $stateParams, Players) {
  $scope.player = Players.get($stateParams.playerId);
})






.controller('InProgressCtrl', function($scope) {

})

.controller('MatchStatsCtrl', function($scope) {
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

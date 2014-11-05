angular.module('tennishelp.controllers', [])

.controller('HomeCtrl', function($scope) {
})

.controller('StatsCtrl', function($scope) {

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

.controller('GalleryCtrl', function($scope) {
})

.controller('SettingsCtrl', function($scope) {
})

.controller('VideoCtrl', function($scope) {
});

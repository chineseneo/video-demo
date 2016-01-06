angular.module('starter.controllers', [])

.filter('trustUrl', function($sce) {
  return function(url) {
    return $sce.trustAsResourceUrl(url);
  }
})
.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($rootScope, $scope, $stateParams, Chats, $timeout) {
  $scope.video = {
    url: "http://7xloz0.com2.z0.glb.qiniucdn.com/video%2Ftronclass.mp4"
  }

  $timeout(function(){
    $('video')[0].play()
  }, 1000);

  $scope.$on('$ionicView.enter', function(){
    screen.lockOrientation('landscape');
  });
  $scope.$on('$ionicView.leave', function(){
    screen.lockOrientation('primary');
  });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

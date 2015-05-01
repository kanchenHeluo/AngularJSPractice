mapApp.controller('naviTopicCtrl', ['$scope', naviTopicCtrl]);
function naviTopicCtrl($scope) {
    $scope.myInterval = 3000;
    $scope.slides = [
      {
          image: '/Images/mach1.jpg',
          description: 'We are the one'
      },
      {
          image: '/Images/mach2.jpg',
          description: 'we view the world'
      },
      {
          image: "/Images/mach3.jpg",
          description: '世界辣么大，我想去看看'
      }
    ];
}
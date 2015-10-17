popularListApp.controller('MainController', ['$mdSidenav', '$log', function($mdSidenav, $log) {
  var vm = this;
  vm.title = 'Popular Stuff';

  vm.toggleRight = buildToggler('right');
   vm.isOpenRight = function(){
     return $mdSidenav('right').isOpen();
   };

  function buildToggler(navId) {
    return function() {
      console.log('we are in the right', navId);
      $mdSidenav(navId)
        .toggle()
        .then(function() {
          $log.debug("toggle " + navId + " is done");
        })
    }
  }
}]);

//sidenav popout
popularListApp.controller('RightCtrl', function ($timeout, $mdSidenav, $log) {
  var vm = this;
  vm.close = function () {
    $mdSidenav('right').close()
      .then(function () {
        $log.debug("close RIGHT is done");
    });
  };
});

popularListApp.controller('moviesController', ['popularInfoService','$routeParams', function(popularInfoService, $routeParams) {
  var vm = this;
  vm.title = 'Movies'

  //fetch movies
  vm.movies = popularInfoService.getPopularMovies();
  vm.movies.then(function(results) {
    vm.movieResults = results.results;
  })

  //order function
  vm.orders = [
      {
          id: 1, title: 'Older Movies', key: 'release_date', reverse: false
      },
      {
          id: 2, title: 'Newer Movies', key: 'release_date', reverse: true
      }
  ];
  vm.order =  vm.orders[1];
}]);

popularListApp.controller('tvShowsController', ['popularInfoService','$routeParams', function(popularInfoService, $routeParams) {
  var vm = this;
  vm.title = 'Shows'

  //fetch tv shows
  vm.shows = popularInfoService.getPopularShows();
  vm.shows.then(function(results) {
    vm.showsResults = results.results;
  });

  vm.orders = [
      {
          id: 1, title: 'Older Shows', key: 'first_air_date', reverse: false
      },
      {
          id: 2, title: 'Newer Shows', key: 'first_air_date', reverse: true
      }
  ];
  vm.order =  vm.orders[1];
}]);

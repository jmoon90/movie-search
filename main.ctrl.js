popularListApp.controller('MainController', ['$mdSidenav', '$log', '$timeout', function($mdSidenav, $log, $timeout) {
  var vm = this;
  vm.title = 'Popular Stuff';

  vm.toggleRight = buildToggler('right');
  vm.isOpenRight = function(){
    return $mdSidenav('right').isOpen();
  };

  function debounce(func, wait, context) {
    var timer;

    return function debounced() {
      var context = vm,
          args = Array.prototype.slice.call(arguments);
      $timeout.cancel(timer);
      timer = $timeout(function() {
        timer = undefined;
        func.apply(context, args);
      }, wait || 10);
    };
  }

  function buildDelayedToggler(navID) {
    return debounce(function() {
      $mdSidenav(navID)
        .toggle()
        .then(function () {
          $log.debug("toggle " + navID + " is done");
        });
    }, 200);
  }

  function buildToggler(navId) {
    return function() {
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


//MOVIE API pages
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

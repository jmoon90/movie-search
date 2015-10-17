popularListApp.controller('MainController', [function() {
  var vm = this;
  vm.title = 'Popular Stuff';
  vm.searchInput = '';

  vm.new = {};
  vm.addShow = function() {
    vm.shows.push(vm.new)
    vm.new = {};
  }

}]);

popularListApp.controller('moviesController', ['popularInfoService','$routeParams', function(popularInfoService, $routeParams) {
  var vm = this;
  vm.title = 'Popular Movies'

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
      // {
      //     id: 3, title: 'Title Ascending', key: 'title', reverse: false
      // },
      // {
      //     id: 4, title: 'Title Descending', key: 'title', reverse: true }
  ];
  vm.order =  vm.orders[1];
}]);

popularListApp.controller('tvShowsController', ['popularInfoService','$routeParams', function(popularInfoService, $routeParams) {
  var vm = this;
  vm.title = 'Popular Shows'

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
      // {
      //     id: 3, title: 'Title Ascending', key: 'title', reverse: false
      // },
      // {
      //     id: 4, title: 'Title Descending', key: 'title', reverse: true }
  ];
  vm.order =  vm.orders[1];
}]);

movieApp.controller('MainController', ['movieService', function(movieService) {
  var vm = this;
  vm.title = 'Movie Search';
  vm.searchInput = '';

  vm.movies = movieService.GetPopularMovies();

  vm.movies.then(function(results) {
    vm.movieResults = results.results;
  })




  vm.shows = [
         {
             title: 'Game of Thrones', year: 2011, favorite: true
         },
         {
             title: 'Walking Dead', year: 2010, favorite: false
         },
         {
             title: 'Firefly', year: 2002, favorite: true
         },
         {
             title: 'Banshee', year: 2013, favorite: true
         },
         {
             title: 'Greys Anatomy', year: 2005, favorite: false
         }
     ];

  vm.orders = [
      {
          id: 1, title: 'Year Ascending', key: 'release_date', reverse: false
      },
      {
          id: 2, title: 'Year Descending', key: 'release_date', reverse: true
      },
      {
          id: 3, title: 'Title Ascending', key: 'title', reverse: false
      },
      {
          id: 4, title: 'Title Descending', key: 'title', reverse: true }
  ];

  vm.new = {};
  vm.addShow = function() {
    vm.shows.push(vm.new)
    vm.new = {};
  }

}]);

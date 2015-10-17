popularListApp.config(function ($routeProvider) {
  $routeProvider
    .when('/shows', {
      templateUrl: 'pages/shows.html',
      controller:  'tvShowsController'
    })

    .when('/movies', {
      templateUrl: 'pages/movies.html',
      controller:  'moviesController'
    })
});

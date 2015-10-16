movieApp.service('movieService', ['$resource', '$q', function($resource, $q) {
  this.GetPopularMovies = function(ms) {
    var deferred = $q.defer();
    var movieApi = $resource('http://api.themoviedb.org/3/discover/movie');
    var movieObjects = movieApi.get({ api_key: 'decf83e2cd8a1b5c235fd06df82d1387', sort_by: 'popularity.desc', certification: 'R', certification_country: 'US' })
      .$promise.then(function(response){
        deferred.resolve(response);
      });
    return deferred.promise;
  }
}])

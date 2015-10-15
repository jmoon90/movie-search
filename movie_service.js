movieApp.service('movieService', ['$http', '$q', function($http, $q) {
  this.GetPopularMovies = function() {
    var movieApi = 'http://api.themoviedb.org/3/discover/movie';
    var movieData = { api_key: 'decf83e2cd8a1b5c235fd06df82d1387', sort_by: 'popularity.desc', certification: 'R', certification_country: 'US' };

      var deferred = $q.defer();
        var results = $http({
          method : 'get',
          url    : movieApi,
          params : movieData
        })

        deferred.resolve(results);
        return deferred.promise;
    //return a promise ^
  }
}])

popularListApp.service('popularInfoService', ['$resource', '$q', function($resource, $q) {
  this.getPopularMovies = function() {
    var deferred = $q.defer();
    var movie = $resource('http://api.themoviedb.org/3/discover/movie').get({ api_key: 'decf83e2cd8a1b5c235fd06df82d1387',
                                                                              sort_by: 'popularity.desc',
                                                                              certification: 'R',
                                                                              certification_country: 'US' })
                 .$promise.then(function(response){
                   deferred.resolve(response);
                 });
                 return deferred.promise;
  }

  this.getPopularShows = function() {
    var deferred = $q.defer();
    var shows = $resource('http://api.themoviedb.org/3/discover/tv').get({ api_key: 'decf83e2cd8a1b5c235fd06df82d1387',
                                                                            sort_by: 'popularity.desc',
                                                                            certification: 'R',
                                                                            certification_country: 'US' })

                 .$promise.then(function(response) {
                    deferred.resolve(response);
                 });
                 return deferred.promise;
    }
}])

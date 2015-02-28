app.factory('imgService', ['$http', function ($http) {
  return {
    upload: function (img) {
      // The $http.post method takes additional parameters
      // which allow us to specify http headers and many
      // other things.
      return $http.post('/api/imgs', img, {

        // We need to set the http content-type
        // header to undefined in order for Angular to allow
        // the browser to automatically calculate the
        // content-type when sending our file to the server.
        headers: { 'content-type': undefined },

        // This is a short way of telling angular
        // not to transform our data in any way.
        // angular.identity is simply a function that
        // returns whatever is passed to it, so
        // transformRequest will not actually do anything.
        transformRequest: angular.identity
      });
    }
  };
}]);

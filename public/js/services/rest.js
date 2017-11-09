angular.module('app.restServices', ['ngResource'])
    .factory('Users', function($resource, ENV)
    {
        return $resource(ENV.apiEndpoint + "/users/:id", null, { 'update': { method: 'PUT' }})
    })
;
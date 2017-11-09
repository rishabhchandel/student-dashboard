/**
 * App configuration.
 */
angular.module('app.config', [])
    .constant('ENV', {name:'local',apiEndpoint:'http://localhost:9999/api/v1',enableDebug:true});
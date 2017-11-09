// /**
//  * App module.
//  */
//
// var states = [
// 	{
// 		name: 'base',
// 		state: {
// 			abstract: true,
// 			url: '',
// 			templateUrl: 'views/base.html',
// 			data: {
// 				text: "Base",
// 				visible: false
// 			}
// 		}
// 	}, {
// 		name: 'login',
// 		state: {
// 			url: '/login',
// 			parent: 'base',
// 			templateUrl: 'views/login.html',
// 			controller: 'LoginCtrl',
// 			data: {
// 				text: "Login",
// 				visible: false
// 			}
// 		}
// 	}
// ];
// var app = angular.module('app', [
// 	'ngSanitize',
// 	'ngResource',
// 	'ui.router',
// 	'app.config',
// 	'app.constants',
// 	'app.user-list',
// 	'xeditable'
// ]).config(function($urlRouterProvider, $stateProvider) {
// 	$urlRouterProvider.when('/users1', '/users');
// 	$urlRouterProvider.otherwise('/login');
//
// 	$stateProvider.state('app', {
// 		abstract: true,
// 		template: '<ui-view/>'
// 	});
// }).run(function(editableOptions) {
// 	editableOptions.theme = 'bs3';
// });

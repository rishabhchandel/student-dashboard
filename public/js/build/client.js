var app = angular.module('app', [
	'ngSanitize',
	'ngResource',
	'ui.router',
	'angularUtils.directives.dirPagination',
	'app.user-signup',
	'app.user-login',
	'app.user-list',
	'xeditable'
]).config([
	'$urlRouterProvider',
	'$stateProvider',
	function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.when('/signup', '/signup');
		$urlRouterProvider.when('/users', '/users');
		$urlRouterProvider.otherwise('/login');
	}
]).run([
	'editableOptions',
	function(editableOptions) {
		editableOptions.theme = 'bs3';
	}
]);

angular.module('app.user-login', []).config([
	'$stateProvider',
	function($stateProvider) {
		$stateProvider.state('login', {
			url: '/login',
			templateUrl: 'components/user/login.html',
			controller: 'userLoginCtrl'
		});
	}
]).controller('userLoginCtrl', [
	'$scope',
	'$http',
	'$filter',
	'$location',
	function($scope, $http, $filter, $location) {
		$scope.submit = function() {
			var ep = $scope.ep;
			var pwd = $scope.pwd;
			var data = {
				ep : ep,
				pwd: pwd
			}
			if(ep && pwd){
				$http.post('/signin', data).then(function succ(res){
						$location.path('/users');
						console.log(1);
				}, function fail(res){
					console.log(2);
					alert("please sign up! wrong user name and password");
				});

			}

		}

		$scope.signup = function() {
			$location.path('/signup');
			return;
		}
	}
]);
angular.module('app.user-signup', []).config([
	'$stateProvider',
	function($stateProvider) {
		$stateProvider.state('signup', {
			url: '/signup',
			templateUrl: 'components/user/signup.html',
			controller: 'userSignupCtrl'
		});
	}
]).controller('userSignupCtrl', [
	'$scope',
	'$http',
	'$filter',
	'$location',
	function($scope, $http, $filter, $location) {
		$scope.submit = function() {
			$scope.submit = function() {
				var ep = $scope.ep;
				var pwd = $scope.pwd;
				var data = {
					ep : ep,
					pwd: pwd
				}
				if(ep && pwd){
					$http.post('/signup', data).then(function succ(res){
							$location.path('/users');
							console.log(1);
					}, function fail(res){
						console.log(2);
					});

				}
		}
	}
}
]);
angular.module('app.user-list', []).config([
	'$stateProvider',
	function($stateProvider) {
		$stateProvider.state('users', {
			url: '/users',
			templateUrl: 'components/user/user-list.html',
			controller: 'userListCtrl'
		});
	}
]).controller('userListCtrl', [
	'$scope',
	'$http',
	'$filter',
	function($scope, $http, $filter) {

		$scope.users = $http.get('/users').success(function(data) {
			console.log(data);
			$scope.users = data;
		});
		console.log($scope.users);
		$scope.statuses = [
			{
				value: 1,
				text: 'status1'
			}, {
				value: 2,
				text: 'status2'
			}, {
				value: 3,
				text: 'status3'
			}, {
				value: 4,
				text: 'status4'
			}
		];

		$scope.groups = [
			{
				value: "admin",
				text: "Admin"
			}, {
				value: "vip",
				text: 'Vip'
			}, {
				value: "guest",
				text: 'Guest'
			}, {
				value: "owner",
				text: 'Owner'
			}
		];

		$scope.sort = function(keyname){
			console.log(keyname);
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }


		$scope.showGroup = function(user) {
			if (user.group && $scope.groups.length) {
				var selected = $filter('filter')($scope.groups, {value: user.group});
				return selected.length
					? selected[0].text
					: 'Not set';
			} else {
				return user.groupName || 'Not set';
			}
		};

		$scope.showAge = function(date) {
			var ageDifMs = Date.now() - new Date(date);
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
		};

		$scope.checkName = function(data, id) {

		};

		$scope.saveUser = function(data, id) {
			//$scope.user not updated yet
			console.log("data ", id);
			angular.extend(data, {id: id});
			return $http.post('/saveUser', data);
		};

		$scope.updateUser = function(data,id, _id) {
			if(!_id && id){
				angular.extend(data, {id: id});
			} else {
				data._id = _id;
			}
			return $http.put('/users/'+_id, data);
		};
		// remove user
		$scope.removeUser = function(index) {
			var l = $scope.users.length;
			console.log("ind",index,"\nusers" ,$scope.users);
			$http.delete('/users/'+$scope.users[l-index-1]._id);

			$scope.users.splice(l-index-1, 1);
		};

		// add user
		$scope.addUser = function(data) {
			var len = $scope.users?$scope.users.length:0;
			console.log(len);

			$scope.inserted = {
				id: $scope.users[len-1]?$scope.users[len-1].id + 1:1,
				name: '',
				status: null,
				group: null
			};
			$scope.users.push($scope.inserted);
		};

	}
]);

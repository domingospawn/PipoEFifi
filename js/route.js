App.config(['$routeProvider',
	function($routeProvider){
		$routeProvider
		.when('/first', {
			templateUrl: 'partials/first.html',
			controller: 'firstController'
		})
		.otherwise({
			redirectTo: '/first'
		});
}]);
(function(){
	'use strict';

	var appDemo = function(){
		return {
			restrict: 'E',
			templateUrl: 'app.html',
			controller: controller,
			controllerAs: 'vm',
		}
	};

	angular
		.module('demo', [])
		.directive('appDemo', appDemo);

})();
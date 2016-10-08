angular.module('timeApp').directive('showTime', function(){
	return {
		restrict: 'E',
		template: '<div> The current time is {{time}} </div>', //templateUrl: can be used if you want the html in a separate file
		link: function($scope, element, attr) {
			var currentTime = new Date();
			$scope.time = currentTime.toString();
		}

	}

})
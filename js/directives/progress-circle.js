taskmanApp.directive('progressCircle', function() {
	return {
		restrict: 'A',
		scope: {
			percentageComplete: '=',
			circleSize: '=',
			circleColorA: '=',
			circleColorB: '='
		},
		templateUrl: 'js/directives/progress-circle.html',
		link: function(scope, element, attrs, controllers) {
			var c4 = $('#circle');
			c4.circleProgress({
				// startAngle: -Math.PI / 4 * 3,
				value: 0,
				size: scope.circleSize,
				fill: {
					gradient: [scope.circleColorA, scope.circleColorB]
				},
				lineCap: 'round'
			});
		}
	};
});
window.scrollModule = angular.module('home.dir', ['main']);
scrollModule.directive('showAlert', function($timeout) {
	return {
		restrict: 'A',
		template: '<p ng-bind="name"><a>我的年龄是<span ng-bind="age"></span></a></p>',
		require: 'ngModel',
		scope: {
			age: '@myAge',
			name:'=',
		},
		link: function(scope, element, attr, ctrls) {
			element.bind('click', function(event) {
				element.css('background-color', '#ccc');
			});
			element.bind('mouseover', function(event) {
				element.css('cursor', 'pointer');
			});
			console.log(scope);
			console.log(element);
			console.log(attr);
			console.log(ctrls);
			/*if (scope.$last === true) {
				$timeout(function() {
					scope.$emit('ngRepeatFinished');
				});
			}*/
		}
	};
});
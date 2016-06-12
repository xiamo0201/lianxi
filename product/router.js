mainModule.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
	$urlRouterProvider.otherwise('/index');
	$stateProvider
		.state("index", {
			url: '/index',
			views: {
				'main@': {
					templateUrl: 'tpl/index.html',
					controller: 'homeCtrl'
				}
			}
		})
		.state("lists", {
			url: '/lists',
			views: {
				'main@': {
					templateUrl: 'tpl/goodLists.html',
					controller: 'goodListsCtrl'
				}
			}
		})
		.state("detail", {
			url: '/detail',
			views: {
				'main@': {
					templateUrl: 'tpl/goodDetail.html',
					controller: 'goodDetailCtrl'
				}
			}
		})
		.state("confirmOrder", {
			url: '/confirmOrder',
			views: {
				'main@': {
					templateUrl: 'tpl/confirmOrder.html',
					controller: 'confirmOrderCtrl'
				}
			}
		})

}])
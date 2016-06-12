//详情页
configModule.controller('goodDetailCtrl', ['$scope', '$uibModal', function($scope, $uibModal) {
	$scope.turn = false;
	$scope.show=false;
	//分页
	$scope.totalItems = 64;
	$scope.currentPage = 4;

	$scope.setPage = function(pageNo) {
		$scope.currentPage = pageNo;
	};
}])
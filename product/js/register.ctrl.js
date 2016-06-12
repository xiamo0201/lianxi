//注册
configModule.controller('ModalRegisterCtrl', ['$scope', '$uibModalInstance', '$uibModal',function($scope, $uibModalInstance,$uibModal) {
	$scope.close = function() {
		$uibModalInstance.close();
	};
	$scope.loginTo = function() {
		$uibModalInstance.dismiss();
		var modalRegister = $uibModal.open({
			templateUrl: '../person/tpl/dialogs/login.html',
			controller: 'ModalLoginCtrl'
		})
	}
}])
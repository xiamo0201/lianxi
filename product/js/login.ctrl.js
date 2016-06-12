//登录
configModule.controller('ModalLoginCtrl', ['$scope', '$uibModalInstance','$uibModal', function($scope, $uibModalInstance,$uibModal) {
	$scope.close = function() {
		$uibModalInstance.close();
	};

	$scope.registerTo = function() {
		$uibModalInstance.dismiss();
		var modalRegister = $uibModal.open({
			templateUrl: '../person/tpl/dialogs/register.html',
			controller: 'ModalRegisterCtrl'
		})
	}
}])

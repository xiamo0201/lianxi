//二级页面
configModule.controller('goodListsCtrl', ['$scope', '$uibModal', function($scope, $uibModal) {
    //top-nav数据
	$scope.topNavData=[{'title':'校园代步','subtitle':['电动车','自行车']},
	                   {'title':'电器设备','subtitle':['电风扇','吹风机','电水壶','台灯']},
	                   {'title':'数码影音','subtitle':['手机','电脑','耳机','电脑配件']},
	                   {'title':'文体用品','subtitle':['文具','书籍','乐器','运动器材']},
	                   {'title':'美妆个护','subtitle':['洗浴用品','美妆','乐器','运动器材']},
	                   {'title':'服饰箱包','subtitle':['上衣','裤子','鞋','饰品']}
	                  ]
	$scope.goodlists=[{'src':'../../resource/img/phone.jpg','title':'带挂绳公主风指环支架苹果6s手机壳','price':'79.5','collectNum':567},
                      {'src':'../../resource/img/phone.jpg','title':'带挂绳公主风指环支架苹果6s手机壳','price':'79.5','collectNum':567},
                      {'src':'../../resource/img/phone.jpg','title':'带挂绳公主风指环支架苹果6s手机壳','price':'79.5','collectNum':567},
                      {'src':'../../resource/img/phone.jpg','title':'带挂绳公主风指环支架苹果6s手机壳','price':'79.5','collectNum':567},
                      {'src':'../../resource/img/phone.jpg','title':'带挂绳公主风指环支架苹果6s手机壳','price':'79.5','collectNum':567},
                      {'src':'../../resource/img/phone.jpg','title':'带挂绳公主风指环支架苹果6s手机壳','price':'79.5','collectNum':567}

	                 ]
 
  //分页
  $scope.totalItems = 64;
  $scope.currentPage = 4;

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

}])
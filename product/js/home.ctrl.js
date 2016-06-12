window.configModule = angular.module('home.ctrl', ['main']);
configModule.controller('homeCtrl', ['$scope', '$uibModal', function($scope, $uibModal) {
	//左侧列表数据
	$scope.leftListGoods = [{
			'title': '校园代步',
			'subtitle': ['电动车', '自行车']
		}, {
			'title': '电器设备',
			'subtitle': ['电风扇', '吹风机', '电水壶', '台灯']
		}, {
			'title': '数码影音',
			'subtitle': ['手机', '电脑', '耳机', '电脑配件']
		}, {
			'title': '文体用品',
			'subtitle': ['文具', '书籍', '乐器', '运动器材']
		}, {
			'title': '美妆个护',
			'subtitle': ['洗浴用品', '美妆', '乐器', '运动器材']
		}, {
			'title': '服饰箱包',
			'subtitle': ['上衣', '裤子', '鞋', '饰品']
		}]
		//楼层数据
	$scope.floorList = [{
		'floor': 1,
		'title': '校园代步',
		'subtitle': ['电动车', '自行车'],
		'lists': [{
			'gimg': '../resource/img/good1.png',
			'gtitle': '出99新 苹果iphone6 4.7英寸 64G',
			'gprice': '3299'
		}]
	}, {
		'floor': 2,
		'title': '电器设备',
		'subtitle': ['电风扇', '吹风机', '电水壶', '台灯']
	}, {
		'floor': 3,
		'title': '数码影音',
		'subtitle': ['手机', '电脑', '耳机', '电脑配件']
	}, {
		'floor': 4,
		'title': '文体用品',
		'subtitle': ['文具', '书籍', '乐器', '运动器材']
	}, {
		'floor': 5,
		'title': '美妆个护',
		'subtitle': ['洗浴用品', '美妆', '乐器', '运动器材']
	}, {
		'floor': 6,
		'title': '服饰箱包',
		'subtitle': ['上衣', '裤子', '鞋', '饰品']
	}]

	//tab初始化和切换                   
	for (var i = 0; i < $scope.floorList.length; i++) {
		$scope.floorList[i].tab = [true, false];
	}
	$scope.change = function(data, $index) {
		data.tab = [false];
		data.tab[$index] = true;
	}

	var tempdate = jQuery('.l-floor'); //floor数组
	var temp = jQuery('.floor-nav>li'); //右侧nav
	var templength = tempdate.length;
	var temp_top = [];
	for (var i = 0; i < templength; i++) {
		temp_top[i] = tempdate.eq(i).offset().top - 150;
	}
	//滚动条事件
	jQuery(window).scroll(function() {
		var win_top = jQuery(window).scrollTop();
		for (var i = 0; i < templength; i++) {
			if (win_top < temp_top[templength - 1]) {
				if (win_top >= temp_top[i] && win_top < temp_top[i + 1]) {
					temp.eq(i).addClass('active').siblings().removeClass('active');
				}
			} else {
				temp.eq(templength - 1).addClass('active').siblings().removeClass('active');
			}
		}
		var floor_top = jQuery('.floor-content').offset().top;
		if (win_top >= floor_top) {
			jQuery('.floor-nav').css({
				position: 'fixed'
			});
		} else {
			jQuery('.floor-content>.floor-nav').css({
				position: 'absolute'
			});
		}
	});

	//右侧nav点击切换
	temp.click(function(event) {
		var _index = $(this).index();
		jQuery("html,body").clearQueue().animate({
			scrollTop: temp_top[_index]
		}, 1000, "swing");
	});

	//登录
	$scope.login = function() {
		var modalLogin = $uibModal.open({
			templateUrl: 'tpl/dialogs/login.html',
			controller: 'ModalLoginCtrl'
		})
	};

	//注册
	$scope.register = function() {
		var modalRegister = $uibModal.open({
			templateUrl: 'tpl/dialogs/register.html',
			controller: 'ModalRegisterCtrl'
		})
	};


	$scope.data = [{
		'name': 'xiamo'
	}];
	$scope.name = "linda";
	$scope.age = 23;
	$scope.p = 'ha';

}])
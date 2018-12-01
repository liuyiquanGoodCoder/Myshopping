angular.module('app.controllers', [])
  
.controller('ladiesItemsCtrl', ['$scope', '$stateParams', 'Store', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,Store) {

		$scope.items = Store.getLadiesItems();
		$scope.department = "Ladies Items";

}])
   
.controller('menItemsCtrl', ['$scope', '$stateParams', 'Store', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,Store) {
	$scope.items = Store.getMenItems();
	$scope.department = "Men Items";

}])
   
.controller('myCartCtrl', ['$scope', '$stateParams', 'Store', '$state','$http',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,Store,$state,$http) {

	$scope.$on("$ionicView.beforeEnter", function() {
		var items = Store.getSelected();
		console.log(items);
		    var sum = 0;
		    items.forEach( function (item) {
		        sum += item.quantity * item.price;
		    });
		    $scope.items = items;
		    $scope.total = sum;
	});
	$scope.emptyCart = function() {
	    Store.clearSelected();
		$state.go($state.current, {}, { reload: true }); 

	};
	$scope.placeOrder = function () {
		$http.post('https://httpbin.org/post', Store.getSelected()) 
			 .then(function (response) {

		      console.log(response.data);
		}); 
	};
}])
      
.controller('itemDetailsCtrl', ['$scope', '$stateParams', 'Store','$ionicHistory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,Store, $ionicHistory) {

	//stateParams
	$scope.item = Store.getItem($stateParams.id);
	$scope.data = {};

	$scope.data.quantity = $scope.item.quantity;
	$scope.data.showAdd = $stateParams.showAdd;


	var eventListener = function() {
		debugger;
		$scope.item.quantity = $scope.data.quantity;
		$ionicHistory.goBack();
	};
	$scope.addCartItem = function() {
		eventListener();
	};
	$scope.updateCartItem = function() {
		eventListener();
	};
	$scope.removeCartItem = function() {
		$scope.item.quantity = 0;
		$ionicHistory.goBack();
	}




}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('landingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 
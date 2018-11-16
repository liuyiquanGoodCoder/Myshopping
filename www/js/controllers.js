angular.module('app.controllers', [])
  
.controller('ladiesItemsCtrl', ['$scope', '$stateParams', 'Store',
function ($scope, $stateParams, Store) {
		$scope.items = Store.getLadiesItems();
		$scope.department = "Ladies Items";
}])
   
.controller('menItemsCtrl', ['$scope', '$stateParams', 'Store',
function ($scope, $stateParams, Store) {
		$scope.items = Store.getMenItems();
		$scope.department = "Men Items";
	
}])
   
.controller('myCartCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('itemDetailsCtrl', ['$scope', '$stateParams', 'Store',
function ($scope, $stateParams, Store, $ionicHistory) {

	//stateParams
	$scope.item = Store.getItem($stateParams.id);
	$scope.data = {};

	$scope.data.quantity = $scope.item.quantity;
	$scope.data.showAdd = $stateParams.showAdd;


	var eventListener = function() {
		$scope.item.quantity = $scope.data.quantity;
		$ionicHistory.goback();
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
 
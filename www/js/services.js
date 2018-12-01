angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.service('Store',[function() {
	var fashion_items = [
        {
			id: '1',
			department: 'Gentlemen',
			name: 'Galvanic Down',
			desc: 'Galvanic Down',
			image: 'https://img.alicdn.com/imgextra/i1/1638981783/O1CN011P2eeAKm4nUNqBU_!!1638981783.jpg_430x430q90.jpg',
			price: 120,
            quantity: 0
        },
		{
			id: '2',
			department: 'Ladies',
			name: 'Burberry',
			desc: 'This well known American brand is synonymous with a classic and sophisticated style. They have a wide range of petite clothing.',
			image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542370001860&di=04d5a94bea54563dfc536c40b72bd1e9&imgtype=0&src=http%3A%2F%2Fp4.qhimg.com%2Ft01286b22816a525150.jpg%3Fsize%3D1920x960',
			price: 2000,
            quantity: 0
        },
		{
			id: '3',
		    department: 'Gentlemen',
		    name: 'Delta LT Zip',
		    desc: 'Delta LT Zip',
			image: 'https://img.alicdn.com/imgextra/i3/1638981783/TB2wtulGL5TBuNjSspmXXaDRVXa_!!1638981783.jpg_430x430q90.jpg',
			price: 250,
		    quantity: 0
		},
		{
			id: '4',
			department: 'Ladies',
			name: 'Joel Round Simple Knit Best ',
			desc: 'Simple, Layered to Good Hajji woven Knit Vest!', 
			image: 'http://styleberry.cdn.smart-img.com/2014_img/img/glob-img1.jpg', 
			price: 240,
			quantity: 0 
		}
	];
	this.getLadiesItems = function() {
		return fashion_items.filter(function(item) {
			return item.department === 'Ladies'
		})
	}
	this.getMenItems = function() {
		return fashion_items.filter(function(item) {
			return item.department === 'Gentlemen'
		})
	}
	this.getItem = function(id) {
		return fashion_items.filter(function(item) {
			return item.id === id;
		})[0] || null;
	}
	this.getSelected = function() {
		return fashion_items.filter(function(item) { 
			return item.quantity > 0;
		}); 
	}
	this.clearSelected = function() {
		fashion_items.forEach(function(item){ 
			item.quantity = 0;
		}); 
	}


}]);
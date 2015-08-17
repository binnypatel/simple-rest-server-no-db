var app=angular.module("angapp",["ngRoute"]);

app.controller("angcon",function($scope,myFactory){
	$scope.items=[
		// {item:"aaaa",des:"cccc",price:"10",Quanty:"10"},
		// {item:"sssss",des:"bbbb",price:"4",Quanty:"5"}
		];

var abc = myFactory.get_factory();
		console.log("hello");
	// 	function abc(){
	// 	$scope.items=myFactory.get_factory();
	// 	console.log($scope.items);
	// };

		// $http.get("/products").success(function(data){
		// 	$scope.x = data;
		// 	console.log(data);
		// })


	$scope.add=function(item){
		$scope.items.push(item);
		console.log(items);
	 	$scope.item={};
	}

	// $http.get("/products").success(function(data){
	// 		$scope.x = data;
	// 		console.log(data);
	// 	})


	$scope.total=function(){
		var sub=0;
		for(var i=0;i<$scope.items.length;i++){
			sub += $scope.items[i].price*$scope.items[i].Quanty;
		}
		return sub;
	}

	$scope.removeitem=function(rem){
		$scope.items.splice(rem,1);
	}

});

app.config(['$routeProvider',
	function($routeProvider){
		$routeProvider
		.when('/',{
			templateUrl:'views/Home_page.html',
			controller:'Homecontroller'
		})
		.when('/About',{
			templateUrl:'views/About_page.html',
			controller:'Aboutcontroller'
		})
		.when('/Catalog',{
			templateUrl:'views/Catalog_page.html',
			controller:'Catalogcontroller'
		})
		.when('/Contact',{
			templateUrl:'views/Contact_page.html',
			controller:'Contactcontroller'
		})
		.otherwise({
			redirectTo:'/'
		})
	
	}]);

	app.controller('Homecontroller', function($scope) {
	     
	    $scope.message = 'This is Home page';
	     
	});
	app.controller('Aboutcontroller', function($scope) {
	     console.log("HELLO")
	    $scope.message = 'This is About page';
	     
	});
	app.controller('Catalogcontroller', function($scope) {
	     
	    $scope.message = 'This is Catalog page';
	     
	});
	app.controller('Contactcontroller', function($scope) {
	     
	    $scope.message = 'This is Contact page';
	     
	});


	app.factory('myFactory',function($http){
		var profac={};
		profac.get_factory=function(){
			$http.post('/products/',{
				//type:'JSON',
			}).success(function(data,status){
				return data;
			}).error(function(data,status){
			});
		};
		return profac;
	});
	
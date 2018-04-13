
var app = angular.module("demoModule", []);

 	app.controller("test",["$log","$scope","factoryService",function($log,$scope,factoryService){

 		$scope.a=10;
 		$scope.b=20;

 		$scope.DoSum = function(){
 				
 			factoryService.CalSum($scope.a,$scope.b,function(result){
 				$scope.sum = result;
 			});

 		};

 	}]);

 	app.factory('factoryService',['$http','$log',function($http,$log){

 		var factoryObj= {};

 		factoryObj.CalSum= function(a,b,callback){				
 					var s = parseInt(a)+parseInt(b);
 					callback(s);
 			
 		};
 		return factoryObj;

 	}]);
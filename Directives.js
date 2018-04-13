
var app = angular.module("demoModule", []);

 	app.controller("test",function(){

 	});


 	app.directive('myFirstDirective', function(){
 		return {
 			compile: function(tEle, tAttr){
 				console.log(tAttr.text + " in compile phase");

 				return {
 					pre: function($scope,iElement,iAttr){
 						console.log(iAttr.text + "- In pre link");

 					},
 					post: function($scope,iElement,iAttribute){
 						console.log(iAttribute.text + "- In post link");

 					}
 				};
 			},
 			controller: function($scope,$element, $attrs){
 				console.log($attrs.text+ " in controller phase");
 			}
 		}
 	})
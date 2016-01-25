"use strict";angular.module("cctApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("cctApp").controller("MainCtrl",["$scope",function(a){a.shows=[{name:"The Piano Lesson",author:"August Wilson",icon:"/images/piano.jpg",details:"Details about the Piano Lesson"},{name:"The Women",author:"Clare Boothe Luce",icon:"images/women.jpg",details:"Details about the Women"},{name:"Inherit the Wind",author:"Jerome Lawrence and Robert Edwin Lee",icon:"images/inherit.jpg",details:"Details about Inherit the Wind"}]}]),angular.module("cctApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("cctApp").directive("showInfo",function(){return{restrict:"E",scope:{info:"="},templateUrl:"views/showinfo.html"}});
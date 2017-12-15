var weatherApp = angular.module('weatherApp',['ngRoute','ngResource']);
weatherApp.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'pages/home.html',
        controller:'homeController'
    })
    .when('/forecast',{
        templateUrl:'pages/forecast.html',
        controller:'forecastController'
    })
    .when('/forecast/:days',{
        templateUrl:'pages/forecast.html',
        controller:'forecastController'
    })
})
weatherApp.service('cityService',function(){
    //var self = this;
    this.city = "Indore"
})
weatherApp.controller("homeController",function($scope,$log,cityService){
    $scope.city = cityService.city;
    $scope.$watch('city',function(){
        cityService.city = $scope.city;
        //$log.log(cityService.city);
    })
});

weatherApp.controller("forecastController",function($scope,$log,$resource,cityService,$routeParams){
    //$log.log(cityService.city);
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2';
    var url = "http://api.openweathermap.org/data/2.5/forecast";
    $scope.weatherAPI = $resource(url,{appid:"3e6cce65d4a6f4c92c4724dd228277a1"});
    
    $scope.weatherResult = $scope.weatherAPI.get({q:$scope.city,cnt:$scope.days});
    $log.log($scope.weatherResult);
    //console.log($scope.weatherResult); // A promise is returned
   /* result.$promise.then(function(weather){
       $scope.weatherResult =  weather;
        //$log.log($scope.weatherResult);
    }).catch(function(e){
        $log.log(e);
    })*/
   $scope.convertToFahrenheit = function(tempK){
        return Math.round((1.8*(tempK-273))+32);
    }
   $scope.convertToDate = function(date){
       return new Date(date*1000);
   }
})
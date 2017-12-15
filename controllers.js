weatherApp.controller("homeController",function($scope,$log,$location,cityService){
    $scope.city = cityService.city;
    $scope.$watch('city',function(){
        cityService.city = $scope.city;
        //$log.log(cityService.city);
    })
    $scope.submit = function(){
        $location.path('/forecast');
    }
});

weatherApp.controller("forecastController",function($scope,$log,cityService,weatherService,$routeParams){
    //$log.log(cityService.city);
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2';
    $scope.weatherResult = weatherService.getWeatherdata($scope.city,$scope.days);
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

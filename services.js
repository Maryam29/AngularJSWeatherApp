weatherApp.service('cityService',function(){
    //var self = this;
    this.city = "Indore"
});

weatherApp.service('weatherService',['$resource',function($resource){
    this.getWeatherdata = function(city,days){
        var url = "http://api.openweathermap.org/data/2.5/forecast";
        var weatherAPI = $resource(url,{appid:"3e6cce65d4a6f4c92c4724dd228277a1"});
        return weatherAPI.get({q:city,cnt:days});   
    }
}])
weatherApp.directive('weatherReport',function(){
    return{
        restrict:"AECM",
        templateUrl:'Directives/weatherReport.html',
        replace:true,
        scope:{
            resultObject: "=",
            convertToFahrenheit: "&",
            convertToDate: "&",
            dateFormat:"@"
        }
    }
})
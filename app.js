var app=angular.module("myApp",['mainController','mainDirective','ngAnimate', 'ui.router','CommonData','ngMaterial','ngMessages','SharedServiceFactoryModule','mainService'])


.config(function($stateProvider, $urlRouterProvider,$httpProvider)
       {
    
      $stateProvider
        .state('/', {
            url: '/',
            templateUrl:'app/components/Main/main.html',
            controller:'MainController',
            controllerAs:'main'
        });



         

       $urlRouterProvider.otherwise('/');
    
  


    // $httpProvider.interceptors.push('AuthInterceptor'); 
    
})





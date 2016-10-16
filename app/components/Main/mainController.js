angular.module('mainController',[])

.controller('MainController',function($rootScope,$state,$location,CommonDataFactory,$mdDialog, $mdMedia,SharedServiceFactory,callService)
           {
    
	 var vm=this;
	
	  vm.query = {'name':'','category':''};
    vm.queryBy = 'name';
    vm.sortIt='category';
    

	 vm.results=callService.doServiceCall(callback);
	

	 function callback(data){
	 	//Callback called when we get the Main Data containing code and everything
	 	console.log("Data is "+data.products);
	 	CommonDataFactory.setActualData(data.products);
	 	vm.results=data;
	 	vm.products=data.products;


	 	


	 }




  
  	
    
    
    
      
    

  
   
  
    
    
   
    
    
})


















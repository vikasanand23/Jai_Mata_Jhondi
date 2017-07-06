var cities = [
	/************************ NORTH AMERICA ****************************/
	{
		city : 'Hamirpur',
		desc : 'Contact Us: +1.212.619.5200',
		lat : 31.620257,
		long : 76.673969
	} 
];

( function() {
	angular.module("app")
	.controller("contactController", function($scope, $compile) {
//		$scope.bgImage = 'images/contactUs.jpg';
		$scope.bgImage = "images/Social_01.png";
		$scope.innerBtn ="Growing Fast"
		
	   /* $scope.title = 'Pune'; 
		$scope.address ='CEDAR Building, Ascendas IT Park, Rajiv Gandhi Infotech Park, Hinjewadi Phase III, Pune 411057';
 		$scope.phone = '+91.20.42901000'
 		
 		$scope.title1 = 'Mumbai'; 
		$scope.address1 ='The Capital, Plot No. C-70, G Block, 7th Floor, Bandra Kurla Complex, Bandra (E), Mumbai 400051';
 		$scope.phone1 = 'Tel.:020-27488628'
 		
 		$scope.title2 = 'Bengaluru'; 
		$scope.address2 ='Global Technology Park, Tower B- 1st Floor, Devarabeesanahalli, Marathahalli-Sarjapur Ring Road, Varthur Hobli, Bangalore-560103';
 		$scope.phone2 = 'Tel.:020-26686162'
 		
 		$scope.title3 = 'Hyderabad'; 
		$scope.address3 ='5th Floor, Wing No.1, Block D - Cyber Gateway, Hitech City, Madhapur Village, Serilingampally Municipality, RR District - Hyderabad, Telangana - 500081';
 		$scope.phone3 = 'Tel.: 020-27488628'*/
 		
 		var mapOptions = {
	        zoom: 3,
	        minZoom: 3, maxZoom: 15,
	        center: new google.maps.LatLng(31.620257, 76.673969),
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    }
	
	    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
	    $scope.markers = [];
	    var infoWindow = new google.maps.InfoWindow();
	    var createMarker = function (info){
	        
	        var marker = new google.maps.Marker({
	            map: $scope.map,
	            position: new google.maps.LatLng(info.lat, info.long),
	            title: info.city
	        });
	        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
	        
	        google.maps.event.addListener(marker, 'click', function(){
	            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
	            infoWindow.open($scope.map, marker);
	        });
	        
	        $scope.markers.push(marker);
	        
	    }  
	    
	    for (i = 0; i < cities.length; i++){
	        createMarker(cities[i]);
	    }
	
	    $scope.openInfoWindow = function(e, selectedMarker){
	        e.preventDefault();
	        google.maps.event.trigger(selectedMarker, 'click');
	    }
	    
	    $scope.groups = [
	    	{
	    		
	    		Address:{
	    			first: {
	    				name: 'Deva Nand Sharma',
						designation: 'Designation: ABC',
						occuptation: 'Occupation: XYZ',
	    				address: 'Village - Lag',
						address1: 'P.O - LagManwin',
	    				address2: 'Tehsil - Bhoranj',
	    				area: 'Distt - Hamirpur',
	    				postel: 'Pin - 177118',
	    				contact: '+919418046852'
	    				},
	    			second: {
	    				name: 'Om Sagar Sharma',
	    				designation: 'Designation: ABC',
						occuptation: 'Occupation: XYZ',
	    				address: 'Village - Lag',
						address1: 'P.O - LagManwin',
	    				address2: 'Tehsil - Bhoranj',
	    				area: 'Distt - Hamirpur',
	    				postel: 'Pin - 177118',
	    				contact: '+919418046852'
	    				},
	    			third: {
	    				name: 'Lalit Sharma',
	    				designation: 'Designation: ABC',
						occuptation: 'Occupation: XYZ',
	    				address: 'Village - Lag',
						address1: 'P.O - LagManwin',
	    				address2: 'Tehsil - Bhoranj',
	    				area: 'Distt - Hamirpur',
	    				postel: 'Pin - 177118',
	    				contact: '+919418046852'
	    				},
	    			fourth: {
	    				name: 'Kuldeep Sharma',
	    				designation: 'Designation: ABC',
						occuptation: 'Occupation',
	    				address: 'Village - Lag',
						address1: 'P.O - LagManwin',
	    				address2: 'Tehsil - Bhoranj',
	    				area: 'Distt - Hamirpur',
	    				postel: 'Pin - 177118',
	    				contact: '+919418046852'
	    				},
	    			fifth: {
	    				name: 'Pankaj Sharma',
	    				designation: 'Designation: ABC',
						occuptation: 'Occupation: XYZ',
	    				address: 'Village - Lag',
						address1: 'P.O - LagManwin',
	    				address2: 'Tehsil - Bhoranj',
	    				area: 'Distt - Hamirpur',
	    				postel: 'Pin - 177118',
	    				contact: '+918847085689'	    				
	    				},
	    			sixth: {
	    				name: 'Devinder Anand',
	    				designation: 'Designation: ABC',
						occuptation: 'Occupation: XYZ',
	    				address: 'Village - Lag',
						address1: 'P.O - LagManwin',
	    				address2: 'Tehsil - Bhoranj',
	    				area: 'Distt - Hamirpur',
	    				postel: 'Pin - 177118',
	    				contact: '+919418046852'
	    				},
	    			seventh: {
	    				name: 'Suresh Sharma',
	    				designation: 'Designation: ABC',
						occuptation: 'Occupation: XYZ',
	    				address: 'Village - Lag',
						address1: 'P.O - LagManwin',
	    				address2: 'Tehsil - Bhoranj',
	    				area: 'Distt - Hamirpur',
	    				postel: 'Pin - 177118',
	    				contact: '+919418046852'
	    				},
	    			eighth: {
	    				name: 'Vinod Sharma',
	    				designation: 'Designation: ABC',
						occuptation: 'Occupation: XYZ',
	    				address: 'Village - Lag',
						address1: 'P.O - LagManwin',
	    				address2: 'Tehsil - Bhoranj',
	    				area: 'Distt - Hamirpur',
	    				postel: 'Pin - 177118',
	    				contact: '+919418046852'
	    				},
	    			ninth: {
						name: 'Vikas Anand',
	    				designation: 'Designation: ABC',
						occuptation: 'Occupation: XYZ',
	    				address: 'Village - Lag',
						address1: 'P.O - LagManwin',
	    				address2: 'Tehsil - Bhoranj',
	    				area: 'Distt - Hamirpur',
	    				postel: 'Pin - 177118',
	    				contact: '+918975766814'
	    				},
	    		}
	    	}
	    ];
	    $scope.ind = '';
	    $scope.countryDetails = $scope.groups[0].Address;
	    
	    $scope.showhide = function(pickIndex){
			$scope.isShow = false;
			$scope.ind=pickIndex;
			$scope.isShow=!$scope.isShow;
			$scope.countryDetails = $scope.groups[pickIndex].Address;
			
		};

		
		// angular.forEach($scope.groups, function(value, key) {
		  // //document.write(value.gender);
		  // //console.log(value.Address);
		  // var dtls ='';
		  // angular.forEach(value.Address, function(value, key) {
		  	// //console.log(value.first);
		  	// dtls = value;
		  	// console.log(dtls);
		  	// //console.log($scope.countryDetails);		  	
		  // });
		  // $scope.countryDetails = dtls;
		 // // document.write("</br>");
		 // //console.log($scope.countryDetails);
		// });
		// //console.log($scope.countryDetails);

 	});
}());




  var gridModule = angular.module('gridDemo', []);
  sampleManagers = [{"companyName" : "TacoBell", "managerFName" : "Harris", "managerLName" : "Loyd", "salary" : "$8000", "state" : "Alaska"},
                {"companyName" : "McDonalds", "managerFName" : "Chris", "managerLName" : "Theil", "salary" : "$7222", "state" : "Georgia"},
                {"companyName" : "KFC", "managerFName" : "Jonathan", "managerLName" : "Port", "salary" : "$6330", "state" : "Massachusetts"},
                {"companyName" : "Pizzahut", "managerFName" : "Laura", "managerLName" : "Jackson", "salary" : "$4793", "state" : "Texas"},
                {"companyName" : "Dominos", "managerFName" : "Peter", "managerLName" : "Thomas", "salary" : "$7300", "state" : "New York"},
				{"companyName" : "PhoHong", "managerFName" : "Yen", "managerLName" : "Lee", "salary" : "$5613", "state" : "New Jersey"},
				{"companyName" : "Starbucks", "managerFName" : "Alex", "managerLName" : "Steve", "salary" : "$7130", "state" : "California"},
				{"companyName" : "Chiportle", "managerFName" : "Robert", "managerLName" : "Mannings", "salary" : "$8035", "state" : "New York"},
				{"companyName" : "IndianDoor", "managerFName" : "Rama", "managerLName" : "Sethu", "salary" : "$8090", "state" : "South Carolina"},
				{"companyName" : "TajMahal", "managerFName" : "Subash", "managerLName" : "Chandra", "salary" : "$7099", "state" : "Florida"}
                ];

  
  function GridController($scope, $location) {
	  
	  	$scope.managers = sampleManagers;
        $scope.gotoHire = function (relativePath) { 
        	$location.path(relativePath);
        };
  }
  
  
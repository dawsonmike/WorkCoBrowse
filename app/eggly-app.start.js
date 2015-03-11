angular.module('Eggly', [

])
    .controller('MainCtrl', function ($scope) {
    	$scope.hello='world';
        $scope.categories = [
            {"id": 0, "name": "Agent"},
            {"id": 1, "name": "Client"},
          ];

        $scope.bookmarks = [
            {"id": 0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Agent" },
            {"id": 1, "title": "Egghead.io", "url": "http://angularjs.org", "category": "Client" },
            {"id": 2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
            {"id": 3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
            {"id": 4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
            {"id": 5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
            {"id": 6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
            {"id": 7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
            {"id": 8, "title": "Dump", "url": "http://dump.com", "category": "Humor" }
        ];

        $scope.currentCategory = null;
        $scope.firstname = 'mike';
    $scope.lastname = 'dee';
    $scope.mike = function(text,field){
    alert($scope.firstname);
    textChange('hi');
    
};

        function isCurrentCategory(category) {
            return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
        }

        function setCurrentCategory(category) {
            $scope.currentCategory = category;
        }

        $scope.isCurrentCategory = isCurrentCategory;
        $scope.setCurrentCategory = setCurrentCategory;
    })
;
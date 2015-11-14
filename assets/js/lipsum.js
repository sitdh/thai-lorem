angular.module('tipsum', ['ui.bootstrap']).controller('GoldenMountain', ['$scope', '$log', '$http', function($scope, $log, $http) {

    $scope.title = "ไทยลิปซั่ม";

    var content = null;
    $http.get('assets/data/data.json').success(function(response){
        a = JSON.parse(response);
        content = a;
    });

    $scope.generateType = 'plain';
    $scope.repitation = 5;
    $scope.dataGenerated = '';

    $scope.generated = function() {
        $log.log(content[0]);
        $scope.dataGenerated = content[0];
    }

}]);

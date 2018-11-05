// var app = angular.module("uigridApp", ["ui.grid", "ui.grid.pagination"]);
var app = angular.module("uigridApp", ["ui.grid"]);
    app.controller("uigridCtrl", function ($scope, $http) {
    $scope.gridOptions = {
        enableFiltering: true,

        // // uncomment 2 lines below for pagination & uncomment enableFiltering & uncomment top line...
        // paginationPageSizes: [3, 6, 9],
        // paginationPageSize: 3,
        columnDefs: [
        { field: 'name' },
        { field: 'brewery_type' },
        { field: 'street', enableFiltering: false },
        { field: 'city' },
        { field: 'state' },
        { field: 'postal_code' },
        { field: 'country' },
        { field: 'phone' },
        { field: 'website_url' },
        ],
        onRegisterApi: function (gridApi) {
        $scope.grid1Api = gridApi;
        }
    };




        $scope.users =[];
        console.log("Making API call...");  
        $http.get("https://api.openbrewerydb.org/breweries")
            .then(function successCallback(response){
                console.log('api call successful')
                res = response['data']

                for (i=0; i < res.length; i++) {
                    delete res[i].id
                    delete res[i].updated_at
                    delete res[i].latitude
                    delete res[i].longitude
                    $scope.users.push(res[i])
                }

                console.log($scope.users)

            }, function errorCallback(response){
                console.log("Unable to perform get request");
            });
        $scope.gridOptions.data = $scope.users;


    });


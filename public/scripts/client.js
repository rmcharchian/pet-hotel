var app = angular.module('PetHotelApp', []);

app.controller('PetHotelController', ['$http', function ($http) {
    console.log('Pet Hotel Controller has been loaded');

    self.pets = [];
    self.owners = [];


    self.getPets = function(){
       $http({
            method: 'GET',
            url: '/petRoutes'
        }).then(function (response) {
            console.log(response.data);
            self.pets = response.data;
        }); // end of $http
    }; // end of getMessages
}]);//appController
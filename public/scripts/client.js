var myApp = angular.module('myApp', ['ngRoute']);

//config to take users between the profile info and the portolio info
myApp.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/partials/profile.html',
    controller:'MyProfile as mp'
  }).when('/portfolio', {
    templateUrl: 'views/partials/portfolio.html',
  }); //end submit
}); //end config

myApp.controller('MyProfile', function(GithubAPI){
  var vm = this;

  //get request to github profile API
  vm.getProfile = function(){
    GithubAPI.githubProfile().then(function(response){
    vm.profileData = response;

    }); //end call to service
  }; //end getProfile

  //get portfolio info from GithubAPI
  vm.getPortfolio = function(){
    console.log('in getPortfolio');
    GithubAPI.githubRepos().then(function(response){
      console.log('back from controller with', response);
    vm.repoData = response;

    }); // end then
  }; //end githubRepo
});

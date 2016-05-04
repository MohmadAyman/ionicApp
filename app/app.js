// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module("eliteApp", ['ionic','btford.socket-io'])

.run(function($ionicPlatform,$rootScope, $state, AuthService, AUTH_EVENTS) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('outside', {
    url: '/outside',
    abstract: true,
    templateUrl: 'app/home/outside.html'
  })
  .state('outside.login', {
    url: '/login',
    templateUrl: 'app/home/signin.html',
    controller: 'LoginCtrl'
  })
  .state('outside.register', {
    url: '/register',
    templateUrl: 'app/home/register.html',
    controller: 'RegisterCtrl'
  })
  .state('inside', {
    url: '/inside',
    templateUrl: 'app/home/inside.html',
    controller: 'InsideCtrl'
  })


  .state('home', {
    abstract: true,
    url: "/home",
    templateUrl: "app/home/home.html"
  })

  .state('home.login', {
    url: "/login",
    views: {
      "tab-auth": {
        templateUrl: "app/home/login.html"
      }
    }
  })
  .state('home.signup', {
    url: "/signup",
    views: {
      "tab-auth": {
        templateUrl: "app/home/signup.html"
      }
    }
  })

  
  .state('home.places', {
    url: "/places",
    views: {
      "tab-auth": {
        templateUrl: "app/home/places.html"
      }
    }
  })

  .state('home.hamza', {
    url: "/hamza",
    views: {
      'tab-auth': {
        templateUrl: "app/places/hamzaPlace.html"
      }
    }
  })

  .state('places', {
    abstract: true,
    url: "/places",
    templateUrl: "app/layout/places-layout.html"
  })

  .state('places.hamza', {
    url: "/hamza",
    views: {
      'mainContent': {
        templateUrl: "app/places/hamzaPlace.html"
      }
    }
  })

  .state('clients', {
    abstract: true,
    url: "/clients",
    templateUrl: "app/layout/places-layout.html"
  })

  .state('clients.hamza', {
    url: "/hamza",
    views: {
      'mainContent': {
        templateUrl: "app/clients/hamzaClient.html"
      }
    }
  })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('outside/register');
  });
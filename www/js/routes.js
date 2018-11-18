angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('labies.ladiesItems', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/ladiesItems.html',
        controller: 'ladiesItemsCtrl'
      }
    }
  })

  .state('labies.menItems', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/ladiesItems.html',
        controller: 'menItemsCtrl'
      }
    }
  })

  .state('labies.myCart', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/myCart.html',
        controller: 'myCartCtrl'
      }
    }
  })

  .state('labies', {
    url: '/page1',
    templateUrl: 'templates/labies.html',
    abstract:true
  })

  .state('labies.itemDetails', {
    url: '/page5/:id/:showAdd',
    views: {
      'tab1': {
        templateUrl: 'templates/itemDetails.html',
        controller: 'itemDetailsCtrl'
      },
      'tab2': {
        templateUrl: 'templates/itemDetails.html',
        controller: 'itemDetailsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/itemDetails.html',
        controller: 'itemDetailsCtrl'
      }
    }
  })

  .state('labies.login', {
    url: '/page6',
    views: {
      'tab3': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('landing', {
    url: '/page7',
    templateUrl: 'templates/landing.html',
    controller: 'landingCtrl'
  })




$urlRouterProvider.otherwise('/page1/page2')


});
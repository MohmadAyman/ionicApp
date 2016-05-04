// (function () {
//   'use strict';

//   angular.module('eliteApp').controller('solrCreatorCtrl', ['$scope','$http', solrCreatorCtrl]);

//   var Facets = {};
//   var sandwitches = [{
//     name: 'Batates',
//     price: '5'
//   },
//   {
//     name: 'Batates',
//     price: '5'
//   },{
//     name: 'Batates',
//     price: '5'
//   },{
//     name: 'Shawrma',
//     price: '5'
//   }];
//     var pizza = [{
//     name: 'Batates',
//     price: '5'
//   },
//   {
//     name: 'Batates',
//     price: '5'
//   },{
//     name: 'Batates',
//     price: '5'
//   },{
//     name: 'Shawrma',
//     price: '5'
//   }];
//       var drinks = [{
//     name: 'Batates',
//     price: '5'
//   },
//   {
//     name: 'Batates',
//     price: '5'
//   },{
//     name: 'Batates',
//     price: '5'
//   },{
//     name: 'Shawrma',
//     price: '5'
//   }];
//       var sori = [{
//     name: 'Batates',
//     price: '5'
//   },
//   {
//     name: 'Batates',
//     price: '5'
//   },{
//     name: 'Batates',
//     price: '5'
//   },{
//     name: 'Shawrma',
//     price: '5'
//   }];
//   Facets.menu = [{name: 'sandwitches' ,menu: sandwitches},{name: 'Pizza' ,menu: pizza},
//   {name: 'Sori' ,menu: sori},{name: 'Drinks' ,menu: drinks}];

//   function solrCreatorCtrl($scope,$http){

//     $scope.placeOrder = function() {
//       var toBeSent = ['Ayman', $scope.services];
//       $http.post('http://mynodeaecookup-cookformeeg.rhcloud.com/Client/api/order', toBeSent)
//       .success(function(data) {
//         console.log(data);
//         // Why is nth being logged??
//         console.log('user posted on apu/order');
//       })
//       .error(function(data) {
//         console.log('Error: ' + data);
//       });
//     }  

//     $scope.placeOrder = function() {
//       toBeSent = [$scope.username, $scope.services];
//       // $http.post('/client/api/order', toBeSent)
//       // .success(function(data) {
//       //   console.log(data);
//       //   // Why is nth being logged??
//       //   console.log('user posted on apu/order');
//       // })
//       // .error(function(data) {
//       //   console.log('Error: ' + data);
//       // });

//     }

//     $scope.menu = Facets.menu;
//     $scope.total = function(){
//       var total = 0;
//     // Use the angular forEach helper method to
//     // loop through the services array:
//     angular.forEach($scope.menu, function(s){
//       angular.forEach(s.menu, function(b){
//         if (b.isActive){
//           total+= Number(b.price);
//         }
//       });
//     });
//     return total;
//   };
//   $scope.data = Facets.menu;
//   $scope.data.filterLimit = 4;

//   $scope.toggleActive = function(creator){
//     creator.isActive = !creator.isActive;
//   }  
// }

// })();


'use strict';
app.controller('solrCreatorCtrl',function($scope,$timeout,socket) {


  $scope.order = [{name: 'username TODO'}];
  var Facets = {};
  var sandwitches = [{
    name: 'Batates',
    price: '5'
  },
  {
    name: 'Batates',
    price: '5'
  },{
    name: 'Batates',
    price: '5'
  },{
    name: 'Shawrma',
    price: '5'
  }];
  var pizza = [{
    name: 'Batates',
    price: '5'
  },
  {
    name: 'Batates',
    price: '5'
  },{
    name: 'Batates',
    price: '5'
  },{
    name: 'Shawrma',
    price: '5'
  }];
  var drinks = [{
    name: 'Batates',
    price: '5'
  },
  {
    name: 'Batates',
    price: '5'
  },{
    name: 'Batates',
    price: '5'
  },{
    name: 'Shawrma',
    price: '5'
  }];
  var sori = [{
    name: 'Batates',
    price: '5'
  },
  {
    name: 'Batates',
    price: '5'
  },{
    name: 'Batates',
    price: '5'
  },{
    name: 'Shawrma',
    price: '5'
  }];
  Facets.menu = [{name: 'sandwitches' ,menu: sandwitches},{name: 'Pizza' ,menu: pizza},
  {name: 'Sori' ,menu: sori},{name: 'Drinks' ,menu: drinks}];


  $scope.placeOrder = function() {
    angular.forEach($scope.menu, function(s){
      angular.forEach(s.menu, function(b){
        if (b.isActive){
            $scope.order.push(b);
        }
      });
    });
    socket.emit('orderFromIonic', $scope.order)
    console.log('ordered')
  }  

  $scope.menu = Facets.menu;
  $scope.total = function(){
    var total = 0;
    // Use the angular forEach helper method to
    // loop through the services array:
    angular.forEach($scope.menu, function(s){
      angular.forEach(s.menu, function(b){
        if (b.isActive){
          total+= Number(b.price);
        }
      });
    });
    return total;
  };
  $scope.data = Facets.menu;
  $scope.data.filterLimit = 4;
  
  $scope.toggleActive = function(creator){
    creator.isActive = !creator.isActive;
  }  

})
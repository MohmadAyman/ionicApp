// (function () {
//   'use strict';

// angular.module('eliteApp').controller('client', ['$scope',socket,client]);


// var Facets = {};
// var sandwitches = [{
//   name: 'Batates',
//   price: '5'
// },
// {
//   name: 'Batates',
//   price: '5'
// },{
//   name: 'Batates',
//   price: '5'
// },{
//   name: 'Shawrma',
//   price: '5'
// }];
// Facets.menu = [{name: 'sandwitches' ,menu: sandwitches},{name: 'Pizza' ,menu: sandwitches},
// {name: 'Sori' ,menu: sandwitches},{name: 'Drinks' ,menu: sandwitches},{name: 'Drinks' ,menu: sandwitches}];

// function client($scope){

//  io.connect('http://localhost:5082');

//  $scope.menu = Facets.menu;
//  $scope.total = function(){
//   var total = 0;
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
app.controller('client',function($scope,$timeout,socket) {
  $scope.services = [];
  $scope.recivedOrder = [];
  $scope.try = {name: 'HEllo'};
  $scope.Orders = [];
  $scope.usersOrders = [];
  $scope.names = [];
  function pad(n) { return n < 10 ? '0' + n : n };

  var upView = function () {
    $scope.$apply();
  };


// I Will recive the order with a fomat as follows
  socket.on('reciveOrder', function (data) {
  $scope.recivedOrder= data;
    // $scope.names.push(data[0].name);
    //   $scope.recivedOrder.splice(0, 1);
      $scope.Orders.push(data);
      console.log($scope.Orders)
    console.log('recived  order');
    upView();
  });

    socket.on('order', function (data) {
    console.log('recived  order from ionic' + data);
  });

  // Weired bug, had to do two loops.
// TODO
// Add the orders to the collection.
var menuToOrderes = function (data) {
     $scope.services = data[1];
     angular.forEach($scope.services, function(s){
      if (s.isActive){
      }
      else{
        $scope.removeOrder(s);
      }
    });
     angular.forEach($scope.services, function(s){
      if (s.isActive){
      }
      else{
        $scope.removeOrder(s);
      }
    });
     // TODO, add have been waiting for feild.
     var d = new Date();
     var s = pad(d.getHours()) + ":"
     + pad(d.getMinutes()) + "\n";
     data[0] = data[0] + " ----- " + "Ordered @ " + s;
     $scope.usersOrders.push(data);
     console.log($scope.usersOrders[0].name);
}
// TODO 
// remove the order from the collection.
$scope.removeOrder = function(s) {
  $scope.services.splice($scope.services.indexOf(s), 1);
}

// TODO 
// remove the order from the collection.
$scope.userDone = function(s) {
  console.log('Orders for this user: ' + s[1].length + 'at postion: ' + $scope.usersOrders.indexOf(s));
  $scope.usersOrders.splice($scope.usersOrders.indexOf(s), s[1].length);
}

})
// // var solrFacetsApp = angular.module('eliteApp', ['ngAnimate']);
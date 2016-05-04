(function () {
    'use strict';

    angular.module('eliteApp').controller('HamzaCtrl', ['hamza', HamzaCtrl]);

    function HamzaCtrl(hamza) {
        var vm = this;
        
        var data = hamza.getLeagueData();
        console.log(data);
        vm.cats = data.categories;
        vm.items = data.items;

    };
})();


(function () {
    'use strict';

    angular.module('eliteApp').factory('hamza', [hamza]);

    function hamza() {
        
        var leagues = JSON.parse('[{"id":1005,"name":"5th Grade Saturday 2013-14 League","isDirty":false,"isArchived":false},{"id":1004,"name":"6th Grade Friday 2013-14 League","isDirty":false,"isArchived":false},{"id":2008,"name":"7th Grade HYBA Spring 2014","isDirty":false,"isArchived":false},{"id":1,"name":"7th Grade MS JV Friday 2013-14 League","isDirty":false,"isArchived":false},{"id":2,"name":"7th Grade MS JV Saturday 2013-14 League","isDirty":false,"isArchived":false},{"id":3,"name":"8th Grade MS Varsity Friday 2013-14 League","isDirty":false,"isArchived":false},{"id":1003,"name":"8th Grade MS Varsity Saturday 2013-14 League","isDirty":false,"isArchived":false},{"id":2007,"name":"Friday Spring 6th Grade","isDirty":false,"isArchived":false},{"id":2005,"name":"March Madness Tournament 2014","isDirty":false,"isArchived":false},{"id":2010,"name":"Metro Classic 2014","isDirty":false,"isArchived":false},{"id":2009,"name":"Spring Fling Tournament 2014","isDirty":false,"isArchived":false},{"id":2011,"name":"Summer Showdown 2014","isDirty":false,"isArchived":false}]');
        var leagueData = {"items": [
        {
            "name":"coke",
            "qty": 20,
            "category":"drinks",
            "sizes":["small","large"]
        },
        {
            "name":"pepsi",
            "qty": 20,
            "category":"drinks",
            "sizes":["small","large"]
        },
        {
            "name":"water",
            "qty": 20,
            "category":"drinks",
            "sizes":["small","large"]
        },
        {
            "name":"hamburger",
            "qty": 40,
            "category":"junk food",
            "sizes":["small","large"]
        },
        {
            "name":"fries",
            "qty": 20,
            "category":"junk food",
            "sizes":["small","large"]
        },
        {
            "name":"pizza",
            "qty": 20,
            "category":"junk food",
            "sizes":["small","large"]
        }
    ]
};
        
        function getLeagues(){
            return leagues;
        }

        function getLeagueData(){
            return leagueData;
        };

        //revealing module pattern
        return {
            getLeagues: getLeagues,
            getLeagueData: getLeagueData
        };
    };
})();
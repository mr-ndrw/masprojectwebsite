var films = [
	{
		id: 1,
		title: "Up!",
		genre: "Animated",
		director: "Joss Whedon",
		actors: [{name: "Tony Stark"}, {name: "Bruce Banner"}, {name: "Natasha Romanova"}],
		esrb: "Kids",
		posterpath: "images/up!.jpg"
	},
	{
		id: 2,
		title: "Iron Man",
		genre: "Superhero",
		director: "Joss Whedon",
		actors: [{name: "Robert Downey Jr."}, {name: "Gwyneth Paltrow"}, {name: "Jeff Bridges"}],
		esrb: "Kids",
		posterpath: "images/ironman.jpg"
	},
	{
		id: 3,
		title: "Star Wars IV: New Hope",
		genre: "Sci-Fi",
		director: "George Lucas",
		actors: [{name: "Mark Hamill"}, {name: "Harrison Ford"}, {name: "Kenny Baker"}],
		esrb: "Kids",
		posterpath: "images/newhope.jpg"
	},
	{
		id: 4,
		title: "Les Miserables",
		genre: "Musical",
		director: "Alfie Bowe",
		actors: [{name: "Hugh Jackman"}, {name: "Anne Hathaway"}, {name: "Russel Crowe"}],
		esrb: "Mids",
		posterpath: "images/lesmiserbles.jpg"
	},
	{
		id: 5,
		title: "pulpfiction",
		genre: "Thriller",
		director: "Quentin Tarantino",
		actors: [{name: "John Travolta"}, {name: "Samuel L. Jackson"}, {name: "Bruce Willis"}],
		esrb: "Mids",
		posterpath: "images/pulpfiction.jpg"
	},
	{
		id: 6,
		title: "Hitchhiker's Guide to Galaxy",
		genre: "Sci-Fi",
		director: "Garth Jennings",
		actors: [{name: "Martin Freeman"}, {name: "Mos Def"}, {name: "Zooey Deschanel"}, {name: "Sam Rockwell"}],
		esrb: "Mids",
		posterpath: "images/hitchhiker.jpg"
	}
];

var projections = [
	{
		id: 1,
		cinemaId: 1,
		filmId: 1,
		datetime: "2015-07-10T15:30:00",	
	},
	{
		id: 2,
		cinemaId: 1,
		filmId: 2,
		datetime: "2015-07-10T18:30:00",	
	},
	{
		id: 3,
		cinemaId: 1,
		filmId: 3,
		datetime: "2015-07-11T15:30:00",	
	},
	{
		id: 4,
		cinemaId: 1,
		filmId: 4,
		datetime: "2015-07-12T15:30:00",	
	},
	{
		id: 5,
		cinemaId: 2,
		filmId: 5,
		datetime: "2015-07-10T15:30:00",	
	},
	{
		id: 6,
		cinemaId: 2,
		filmId: 6,
		datetime: "2015-07-10T15:30:00",	
	},
	{
		id: 7,
		cinemaId: 3,
		filmId: 3,
		datetime: "2015-07-10T15:30:00",	
	},
	{
		id: 8,
		cinemaId: 3,
		filmId: 4,
		datetime: "2015-07-10T15:30:00",	
	},
	{
		id: 9,
		cinemaId: 4,
		filmId: 1,
		datetime: "2015-07-10T15:30:00",	
	},
	{
		id: 10,
		cinemaId: 4,
		filmId: 6,
		datetime: "2015-07-11T15:30:00",	
	}
];

var regions = [{
    id: 1,
    regionName: "East"
}, {
    id: 2,
    regionName: "West"
}, {
    id: 3,
    regionName: "North"
}, {
    id: 4,
    regionName: "South"
}];

var cinemas = [{
    id: 1,
    regionId: 1,
    cinemaName: "Nice Cinema",
    address: {
        city: "Warsaw",
        street: "2034 Nice Street"
    }
}, {
    id: 2,
    regionId: 2,
    cinemaName: "Best Cinema",
    address: {
        city: "Cracow",
        street: "3450 Bad Street"
    }
}, {
    id: 3,
    regionId: 3,
    cinemaName: "Friendly Cinema",
    address: {
        city: "Danzig",
        street: "1st Alley"
    }
}, {
    id: 4,
    regionId: 4,
    cinemaName: "Second Best Cinema",
    address: {
        city: "Stettin",
        street: "34 Worst Street"
    }
}, ];

var app = angular.module('CineOsApp', ['ui.bootstrap']);
app.controller('ReservationController', ['$scope',
    function($scope) {
        $scope.regions = regions;
        $scope.cinemas = cinemas;

        /*	Event handlers	*/
        $scope.userCredentialsEntered = function(){
        	//	validate
        	$(window).scrollTo('#region-cinema-section', {
        	    duration: 1000,
        	    easing: 'swing'
        	});
        	//	then scroll down
        };

        $scope.scrollToUserRegistration = function(){
        	$(window).scrollTo('#user-credentials-section', {
        	    duration: 1000,
        	    easing: 'swing'
        	});
        };

        $scope.regionSelected = function() {
            $scope.selectedCinema = cinemas[0];
        };

        $scope.cinemaSelected = function() {
        	$('#cinema-details').slideToggle({
        		duration: 400, 
        		easing: 'easeInQuad',
        		done: function(){
        			$('#cinema-selection-yes-no-buttons').slideToggle({
        				duration: 200,
        				easing: 'easeInQuad'
        			});
        		}
        	});
        	
        };
        $scope.cinemaSelectionNo = function()
        {
        	$('#cinema-selection-yes-no-buttons').slideToggle({
        		duration: 400, 
        		easing: 'easeInQuad',
        		done: function(){
        			$('#cinema-details').slideToggle({
        				duration: 200,
        				easing: 'easeInQuad'
        			});
        		}
        	});
        	$('#region-select').prop('disabled', false);
        	$('#cinema-select').prop('disabled', false);
        	$('#yes-button').prop('disabled', false);
        	$scope.selectedCinema = null;
        };

        $scope.cinemaSelectionYes = function(){
        	$('#region-select').prop('disabled', true);
        	$('#cinema-select').prop('disabled', true);
        	$('#yes-button').prop('disabled', true);

        	//	Move the user to film selection
        	$(window).scrollTo('#film-selection-section', {
        		duration: 1000,
        		easing: 'swing'
    });

        };

        /*	End event handlers*/
    }
]);

app.filter('filterCinemasInSelectedRegion', function() {
    return function(input, selectedRegion) {
        var out = [];
        angular.forEach(input, function(cinema) {
            if (cinema.regionId == selectedRegion.id) {
                out.push(cinema);
            }
        });
        return out;
    };
});
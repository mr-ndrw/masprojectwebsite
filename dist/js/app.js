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
        // Using the angular.forEach method, go through the array of data and perform the operation of figuring out if the language is statically or dynamically typed.
        angular.forEach(input, function(cinema) {
            if (cinema.regionId == selectedRegion.id) {
                out.push(cinema);
            }
        });
        return out;
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlZ2lvbnMgPSBbe1xuICAgIGlkOiAxLFxuICAgIHJlZ2lvbk5hbWU6IFwiRWFzdFwiXG59LCB7XG4gICAgaWQ6IDIsXG4gICAgcmVnaW9uTmFtZTogXCJXZXN0XCJcbn0sIHtcbiAgICBpZDogMyxcbiAgICByZWdpb25OYW1lOiBcIk5vcnRoXCJcbn0sIHtcbiAgICBpZDogNCxcbiAgICByZWdpb25OYW1lOiBcIlNvdXRoXCJcbn1dO1xuXG52YXIgY2luZW1hcyA9IFt7XG4gICAgaWQ6IDEsXG4gICAgcmVnaW9uSWQ6IDEsXG4gICAgY2luZW1hTmFtZTogXCJOaWNlIENpbmVtYVwiLFxuICAgIGFkZHJlc3M6IHtcbiAgICAgICAgY2l0eTogXCJXYXJzYXdcIixcbiAgICAgICAgc3RyZWV0OiBcIjIwMzQgTmljZSBTdHJlZXRcIlxuICAgIH1cbn0sIHtcbiAgICBpZDogMixcbiAgICByZWdpb25JZDogMixcbiAgICBjaW5lbWFOYW1lOiBcIkJlc3QgQ2luZW1hXCIsXG4gICAgYWRkcmVzczoge1xuICAgICAgICBjaXR5OiBcIkNyYWNvd1wiLFxuICAgICAgICBzdHJlZXQ6IFwiMzQ1MCBCYWQgU3RyZWV0XCJcbiAgICB9XG59LCB7XG4gICAgaWQ6IDMsXG4gICAgcmVnaW9uSWQ6IDMsXG4gICAgY2luZW1hTmFtZTogXCJGcmllbmRseSBDaW5lbWFcIixcbiAgICBhZGRyZXNzOiB7XG4gICAgICAgIGNpdHk6IFwiRGFuemlnXCIsXG4gICAgICAgIHN0cmVldDogXCIxc3QgQWxsZXlcIlxuICAgIH1cbn0sIHtcbiAgICBpZDogNCxcbiAgICByZWdpb25JZDogNCxcbiAgICBjaW5lbWFOYW1lOiBcIlNlY29uZCBCZXN0IENpbmVtYVwiLFxuICAgIGFkZHJlc3M6IHtcbiAgICAgICAgY2l0eTogXCJTdGV0dGluXCIsXG4gICAgICAgIHN0cmVldDogXCIzNCBXb3JzdCBTdHJlZXRcIlxuICAgIH1cbn0sIF07XG5cbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnQ2luZU9zQXBwJywgWyd1aS5ib290c3RyYXAnXSk7XG5hcHAuY29udHJvbGxlcignUmVzZXJ2YXRpb25Db250cm9sbGVyJywgWyckc2NvcGUnLFxuICAgIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICAgICAkc2NvcGUucmVnaW9ucyA9IHJlZ2lvbnM7XG4gICAgICAgICRzY29wZS5jaW5lbWFzID0gY2luZW1hcztcblxuICAgICAgICAvKlx0RXZlbnQgaGFuZGxlcnNcdCovXG4gICAgICAgICRzY29wZS51c2VyQ3JlZGVudGlhbHNFbnRlcmVkID0gZnVuY3Rpb24oKXtcbiAgICAgICAgXHQvL1x0dmFsaWRhdGVcbiAgICAgICAgXHQkKHdpbmRvdykuc2Nyb2xsVG8oJyNyZWdpb24tY2luZW1hLXNlY3Rpb24nLCB7XG4gICAgICAgIFx0ICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICBcdCAgICBlYXNpbmc6ICdzd2luZydcbiAgICAgICAgXHR9KTtcbiAgICAgICAgXHQvL1x0dGhlbiBzY3JvbGwgZG93blxuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5zY3JvbGxUb1VzZXJSZWdpc3RyYXRpb24gPSBmdW5jdGlvbigpe1xuICAgICAgICBcdCQod2luZG93KS5zY3JvbGxUbygnI3VzZXItY3JlZGVudGlhbHMtc2VjdGlvbicsIHtcbiAgICAgICAgXHQgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgIFx0ICAgIGVhc2luZzogJ3N3aW5nJ1xuICAgICAgICBcdH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5yZWdpb25TZWxlY3RlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQ2luZW1hID0gY2luZW1hc1swXTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuY2luZW1hU2VsZWN0ZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgXHQkKCcjY2luZW1hLWRldGFpbHMnKS5zbGlkZVRvZ2dsZSh7XG4gICAgICAgIFx0XHRkdXJhdGlvbjogNDAwLCBcbiAgICAgICAgXHRcdGVhc2luZzogJ2Vhc2VJblF1YWQnLFxuICAgICAgICBcdFx0ZG9uZTogZnVuY3Rpb24oKXtcbiAgICAgICAgXHRcdFx0JCgnI2NpbmVtYS1zZWxlY3Rpb24teWVzLW5vLWJ1dHRvbnMnKS5zbGlkZVRvZ2dsZSh7XG4gICAgICAgIFx0XHRcdFx0ZHVyYXRpb246IDIwMCxcbiAgICAgICAgXHRcdFx0XHRlYXNpbmc6ICdlYXNlSW5RdWFkJ1xuICAgICAgICBcdFx0XHR9KTtcbiAgICAgICAgXHRcdH1cbiAgICAgICAgXHR9KTtcbiAgICAgICAgXHRcbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLmNpbmVtYVNlbGVjdGlvbk5vID0gZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgIFx0JCgnI2NpbmVtYS1zZWxlY3Rpb24teWVzLW5vLWJ1dHRvbnMnKS5zbGlkZVRvZ2dsZSh7XG4gICAgICAgIFx0XHRkdXJhdGlvbjogNDAwLCBcbiAgICAgICAgXHRcdGVhc2luZzogJ2Vhc2VJblF1YWQnLFxuICAgICAgICBcdFx0ZG9uZTogZnVuY3Rpb24oKXtcbiAgICAgICAgXHRcdFx0JCgnI2NpbmVtYS1kZXRhaWxzJykuc2xpZGVUb2dnbGUoe1xuICAgICAgICBcdFx0XHRcdGR1cmF0aW9uOiAyMDAsXG4gICAgICAgIFx0XHRcdFx0ZWFzaW5nOiAnZWFzZUluUXVhZCdcbiAgICAgICAgXHRcdFx0fSk7XG4gICAgICAgIFx0XHR9XG4gICAgICAgIFx0fSk7XG4gICAgICAgIFx0JCgnI3JlZ2lvbi1zZWxlY3QnKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgXHQkKCcjY2luZW1hLXNlbGVjdCcpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICBcdCQoJyN5ZXMtYnV0dG9uJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgIFx0JHNjb3BlLnNlbGVjdGVkQ2luZW1hID0gbnVsbDtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuY2luZW1hU2VsZWN0aW9uWWVzID0gZnVuY3Rpb24oKXtcbiAgICAgICAgXHQkKCcjcmVnaW9uLXNlbGVjdCcpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIFx0JCgnI2NpbmVtYS1zZWxlY3QnKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICBcdCQoJyN5ZXMtYnV0dG9uJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcblxuICAgICAgICBcdC8vXHRNb3ZlIHRoZSB1c2VyIHRvIGZpbG0gc2VsZWN0aW9uXG4gICAgICAgIFx0JCh3aW5kb3cpLnNjcm9sbFRvKCcjZmlsbS1zZWxlY3Rpb24tc2VjdGlvbicsIHtcbiAgICAgICAgXHRcdGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICBcdFx0ZWFzaW5nOiAnc3dpbmcnXG4gICAgfSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICAvKlx0RW5kIGV2ZW50IGhhbmRsZXJzKi9cbiAgICB9XG5dKTtcblxuYXBwLmZpbHRlcignZmlsdGVyQ2luZW1hc0luU2VsZWN0ZWRSZWdpb24nLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oaW5wdXQsIHNlbGVjdGVkUmVnaW9uKSB7XG4gICAgICAgIHZhciBvdXQgPSBbXTtcbiAgICAgICAgLy8gVXNpbmcgdGhlIGFuZ3VsYXIuZm9yRWFjaCBtZXRob2QsIGdvIHRocm91Z2ggdGhlIGFycmF5IG9mIGRhdGEgYW5kIHBlcmZvcm0gdGhlIG9wZXJhdGlvbiBvZiBmaWd1cmluZyBvdXQgaWYgdGhlIGxhbmd1YWdlIGlzIHN0YXRpY2FsbHkgb3IgZHluYW1pY2FsbHkgdHlwZWQuXG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaChpbnB1dCwgZnVuY3Rpb24oY2luZW1hKSB7XG4gICAgICAgICAgICBpZiAoY2luZW1hLnJlZ2lvbklkID09IHNlbGVjdGVkUmVnaW9uLmlkKSB7XG4gICAgICAgICAgICAgICAgb3V0LnB1c2goY2luZW1hKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfTtcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
$(document).ready(function(){


// REGULAR GET REQUEST //

// Just a regular AJAX GET request from omdb
// function getMyMovie(title, div){

var queryURL = "http://www.omdbapi.com/?t=batman+begins&y=&plot=short&r=json";
        $.ajax({ url: queryURL, method: 'GET'}).done(function(response) {
                console.log(response);
                $('#one').html(JSON.stringify(response));              
            });
// getMyMovie('batman+begins', '#one');
// getMyMovie('superman', '#two');


// REGULAR GET REQUEST //


// CODE FROM MovieJSONDump.hmtl //
// MOVIE SEARCH BAR //

// This .on("click") function will trigger the AJAX Call
	$('#findMovie').on('click', function(){

		// Here we grab the text from the input box 
		var movie = $('#movie-input').val();

		// Here we assemble our URL 
		var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json";


		//------
		$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
		$('#movieView').html(JSON.stringify(response));
	});
		// Write code between the dashes below to hit the queryURL with $ajax, then take the response data and display it in the div with an id of movieView
		// YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY TOUCH THE HTML ABOVE.

		//------

		return false;
	})


// CODE FROM MovieJSONDump.hmtl //
// MOVIE SEARCH BAR //


//<!-- MovieButtonLayout_Easier -->
//<!-- MOVIE SEARCH FORM WITH BUTTONS -->

// Initial array of movies
	var movies = ['The Matrix', 'The Notebook', 'Mr. Nobody', 'The Lion King'];

	// ========================================================

	// Generic function for displaying movie data 
	function renderButtons(){ 
		$('#moviesView').empty();//empty div

			for(var x = 0; x<=movies.length-1;x++)//looping array
				{$('#moviesView').prepend('<button>' + movies[x] + '</button>')};//putting items to div
		}

	$('#addMovie').on('click', function(){//click
	
		movies.unshift($('#movie-input').val());//input to array
		renderButtons();//running renderbuttons
		return false;
	});
		renderButtons();//printing render buttons

//<!-- MovieButtonLayout_Easier -->
//<!-- MOVIE SEARCH FORM WITH BUTTONS -->

// LogMovieName_Starter
// RETURNS MOVIE INFO WITH BUTTONS

// Initial array of movies
	var movies = ['The Matrix', 'The Notebook', 'Mr. Nobody', 'The Lion King'];

	// ========================================================

	// Generic function for capturing the movie name from the data-attribute
	function alertMovieName(){

		alert($(this).val('data-name'));

	}

	// ========================================================

	// Generic function for displaying movie data 
	function renderButtons(){ 

		// Deletes the movies prior to adding new movies (this is necessary otherwise you will have repeat buttons)
		$('#moviesView').empty();

		// Loops through the array of movies
		for (var i = 0; i < movies.length; i++){

			// Then dynamicaly generates buttons for each movie in the array

			// Note the jQUery syntax here... 
		    var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
		    a.addClass('movie'); // Added a class 
		    a.attr('data-name', movies[i]); // Added a data-attribute
		    a.text(movies[i]); // Provided the initial button text
		    $('#moviesView').append(a); // Added the button to the HTML
		}
	}

	// ========================================================

	// This function handles events where one button is clicked
	$('#addMovie').on('click', function(){

		// This line of code will grab the input from the textbox
		var movie = $('#movie-input').val().trim();

		// The movie from the textbox is then added to our array
		movies.push(movie);
		
		// Our array then runs which handles the processing of our movie array
		renderButtons();
		

		// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
		return false;
	})

	// ========================================================

	// Generic function for displaying the movieInfo

	// BAD CODE = won't work for new buttons (can't capture elements generated dynamically) 
	// $('.movie').on('click', alertMovieName); 

	// GOOD CODE = will work for both the original buttons and all of the new buttons
	$('document').on('click', '.movie', alertMovieName);
	var movieName = $(this).data("name");
	alert(movieName);

	// ========================================================
	// This calls the renderButtons() function
	renderButtons();

// LogMovieName_Starter
// RETURNS MOVIE INFOR WITH BUTTONS






}); //END OF DOCUMENT READY
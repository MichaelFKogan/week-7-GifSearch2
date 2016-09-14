/*global $ */
/*jslint browser:true */
/*jslint vars: true */
"use strict";
$(document).ready(function () {


    //  .o8           .                        
    // "888         .o8                        
    //  888oooo.  .o888oo ooo. .oo.    .oooo.o 
    //  d88' `88b   888   `888P"Y88b  d88(  "8 
    //  888   888   888    888   888  `"Y88b.  
    //  888   888   888 .  888   888  o.  )88b 
    //  `Y8bod8P'   "888" o888o o888o 8""888P' 

    // Initial array of movies
    var gifs = ['Trending', 'Random', 'Cats', 'Babies'];

    // ========================================================

    // Generic function for displaying buttons 


    $('#findGif').on('click', function() { //click
        console.log($('#gif-input').val().trim())
        gifs.push($('#gif-input').val().trim()); //input to array
        
        if($('#gif-input').val().trim().length < 1 )
        	{alert("Type in a word.")}
        else{
        
        gifDisplay();
    	}
        return false;

    });

    function gifDisplay() {
        if ($('#gif-input').val().length > 0) {

            $('#main').empty();
            var gifName = $('#gif-input').val().trim();


            var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=dc6zaTOxFJmzC";

            $.ajax({ url: queryURL, method: 'GET' }).done(function(response) {
                console.log(response);

                for (var x = 0; x <= response.data.length; x++) {


                    $('#main').append('<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="rating"><h3>Rating: ' + response.data[x].rating + '</h3><img src="' + response.data[x].images.downsized.url + '" data-animate="' + response.data[x].images.downsized.url + '" data-still="' + response.data[x].images.downsized_still.url + '" data-state="still"></div>');
                    $('#container2').css('border', '2px solid black');
                }
            });

        }
    }
                                           

    //               o8o                       
    //               `"'                       
    //  .oooo.      oooo  .oooo.   oooo    ooo 
    // `P  )88b     `888 `P  )88b   `88b..8P'  
    //  .oP"888      888  .oP"888     Y888'    
    // d8(  888      888 d8(  888   .o8"'88b   
    // `Y888""8o .o. 88P `Y888""8o o88'   888o
    //            `Y888P      

    //Click on button with class gif
    $(document).on('click', '.gif', function() {
        $('#main').empty();
        var gifName = $(this).data("name");
        console.log($('#gif-input').val().trim());

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=dc6zaTOxFJmzC";

        $.ajax({ url: queryURL, method: 'GET' }).done(function(response) {
            console.log(response);

            for (var x = 0; x <= response.data.length; x++) {
                $('#main').append('<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="rating"><h3>Rating: ' + response.data[x].rating + '</h3><img src="' + response.data[x].images.downsized.url + '" data-animate="' + response.data[x].images.downsized.url + '" data-still="' + response.data[x].images.downsized_still.url + '" data-state="still"></div>');
                $('#container2').css('border', '2px solid black');
            }
        });
    });
    // ========================================================

   $('#trending').on('click', function (){
   	$('#main').empty();
   		var queryURL = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
   		$.ajax({ url: queryURL, method: 'GET' }).done(function(response) {
            console.log(response);
   		 for (var x = 0; x <= response.data.length; x++) {
                $('#main').append('<div class="col-lg-2 col-md-6 col-sm-12 col-xs-12" id="rating"><h3>Rating: ' + response.data[x].rating + '</h3><img src="' + response.data[x].images.downsized.url + '" data-animate="' + response.data[x].images.downsized.url + '" data-still="' + response.data[x].images.downsized_still.url + '" data-state="still"></div>');
                $('#container2').css('border', '2px solid black');
            }
   }); });


    // ENTER KEY ADDS ITEM TO LIST
    $(document).keypress(function(e) {
        if (e.which == 13 && $('#gif-input').val().length > 0) {

            $('#main').empty();
            var gifName = $('#gif-input').val().trim();


            var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=dc6zaTOxFJmzC";

            $.ajax({ url: queryURL, method: 'GET' }).done(function(response) {
                console.log(response);

			for (var x = 0; x <= response.data.length; x++) {
                $('#main').append('<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="rating"><h3>Rating: ' + response.data[x].rating + '</h3><img src="' + response.data[x].images.downsized.url + '" data-animate="' + response.data[x].images.downsized.url + '" data-still="' + response.data[x].images.downsized_still.url + '" data-state="still"></div>');
                $('#container2').css('border', '2px solid black');
            
                }
            });

        }
  // Preventing Search Button From Submitting A Form
    $(function() {
    $("form").submit(function() { return false; });
});
    });



	// Click Image Pause and Play
    $(document).on('click', 'img', function() {
    	console.log($(this))
        if ($(this).attr('src') == $(this)[0].attributes[1].value) 
        	{ $(this).attr('src', $(this)[0].attributes[2].value); } 
        else if ($(this).attr('src') == $(this)[0].attributes[2].value) 
        	{ $(this).attr('src', $(this)[0].attributes[1].value); }

    });















}); //END OF DOCUMENT READY

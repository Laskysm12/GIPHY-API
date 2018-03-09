// Initial array of actors
var actors = [
  "Leonardo DiCaprio",
  "Hugh Jackman",
  "Chris Pratt",
  "Julia Roberts",
  "Johnny Depp",
  "Tom Hanks",
  "Jennifer Lawrence",
  "Brat Pitt",
  "Denzel Washington",
  "Liam Neeson",
  "Meryl Streep",
  "Natalie Portman",
  "Jennifer Aniston",
  "Sandra Bullock"
];

// Function for displaying movie data
function renderButtons() {
  // Deleting the buttons prior to adding new actor buttons
  $("#actorButtons").empty();

  // Looping through the array of actors
  for (var i = 0; i < actors.length; i++) {
    // Generating buttons for each actor in the array
    var a = $("<button>");
    // Adding a class
    a.addClass("movie-btn");
    // Adding a data-attribute with a value of the actor at index i
    a.attr("data-name", actors[i]);
    // Providing the button's text with a value of the actor at index i
    a.text(actors[i]);
    // Adding the button to the HTML
    $("#actorButtons").append(a);
  }
} // END OF FUNCTION

// This function handles events where one button is clicked
$("#addActor").on("click", function(event) {
  // event.preventDefault() prevents the form from trying to submit itself.
  // I am using a form so that the user can hit enter instead of clicking the button if they want
  event.preventDefault();

  // This line will grab the text from the input box
  var actor = $("#actor-input")
    .val()
    .trim();
  // The actor from the textbox is then added to the array of actors using .push
  actors.push(actor);

  // Calling renderButtons, which handles the processing of the actor array
  renderButtons();
}); // END OF FUNCTION

// Calling the renderButtons function at least once to display the intial arary of actors
renderButtons();

$("#actorButtons").on("click", function() {
    // Here, "this" refers to the button that was clicked
    var actor = $(this).attr("data-name"); // remember data name might need to change

    // URL to search GIPHY
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="
     + actor + "&api_key=88FKJs9YvTiK1q8Un9wlFleKVAQ06h7m&limit=10";

    // Performing AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function(response) {
            // Storing an array of results in the results variable
            var results = response.data;

            // Looping over every result item
            for (var i = 0; i < results.length; i++) {

                // Only taking action if the photo has an appropriate rating
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    // creating a div with the class "item"
                    var gifDIV = $("<div class='item'>");

                    // Storing the result item's rating
                    var rating = results[i].rating;

                    //  Creating a paragraph tag with the result item's rating
                    var p = $("<p>").text("Rating: " + rating);

                    // Creating an image tag
                    var actorImage = $("<img>");

                    // Giving the image tag an src attribute
                    actorImage.attr("src", results[i].images.fixed_width.url);

                    // Appending the paragraph and actorImage I created to the "gifDIV" I created
                    gifDIV.prepend(p);
                    gifDIV.prepend(actorImage);

                    // Prepending the gifDiv to the "actors-view" div
                    $("#actors-view").prepend(gifDIV);
                }
        
            }
        })



})

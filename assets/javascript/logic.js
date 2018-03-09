// Initial array of actors
var actors = ["Leonardo DiCaprio", "Hugh Jackman", "Chris Pratt", 
                "Julia Roberts", "Johnny Depp", "Tom Hanks", "Jennifer Lawrence",
                "Brat Pitt", "Denzel Washington", "Liam Neeson", "Meryl Streep",
                "Natalie Portman", "Jennifer Aniston", "Sandra Bullock"];

// Function for displaying movie data
function renderButtons() {

    // Deleting the buttons prior to adding new actor buttons
    $("#actorButtons").empty();

    // Looping through the array of actors
    for (var i = 0; i < actors.length; i++) {

        // Generating buttons for each actor in the array
        var a = $("<button>");
        // Adding a class
        a.addClass("movie");
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
        var actor = $("#actor-input").val().trim();
        // The actor from the textbox is then added to the array of actors using .push
        actors.push(actor);

        // Calling renderButtons, which handles the processing of the actor array
        renderButtons();
    }); // END OF FUNCTION

    // Calling the renderButtons function at least once to display the intial arary of actors
    renderButtons();

    
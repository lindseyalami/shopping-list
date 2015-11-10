$(document).ready(function() {
	
	/*______This adds an event to look for form submission*/


  $("form").on("submit", function (e) {

    e.preventDefault(); //___prevents page refresh


    var list = $(".list").val(); //___captures form data
    $(".list").val("");


    $("ul").append("<li>" + list + "<button>Remove</button>" + "</li>"); //__Adds list item and button to page



    $("button").on("click", function () {
        $(this).closest("li").remove()

    });

  });

});


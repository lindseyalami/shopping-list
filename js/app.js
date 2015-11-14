$(document).ready(function() {
	

  $("form").on("submit", function (e) { //___adds an event to look for form submission


    e.preventDefault(); //___prevents page refresh

  

    var list = $(".list").val(); //___captures form data

    $(".list").val(""); //___empties text box


    $("ul").append("<li>" + "<input id='check" +  "' type='checkbox' value='" +  "' />" + list + "<button>Remove</button>" + "</li>"); //__adds list item and button to page



    $("button").on("click", function () {
        $(this).closest("li").remove() //__removes list item by clicking button
    });


  });


});


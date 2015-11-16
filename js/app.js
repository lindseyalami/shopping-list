$(document).ready(function() {
	

  $("form").on("submit", function (e) { //___adds an event to look for form submission
    e.preventDefault(); //___prevents page refresh

    var list = $(".list").val(); //___captures form data

    $(".list").val(""); //___empties text box

    $("ul").append("<li>" + "<input type='checkbox'/>" + list + "<button>Remove</button>" + "</li>"); //__adds list item, checkbox, and button to page
  
    $("button").on("click", function () {
        $(this).closest("li").remove() //__removes list item by clicking button

    });
  $("input:checkbox").click(function () {
            var $this = $(this);
            if (this.checked) {
                $this.parent().addClass('completed');
            } else {
                $this.parent().removeClass('completed');
            }

    });

  });

});


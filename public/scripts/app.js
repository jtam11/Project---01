
$(document).ready(function() {
  console.log('app.js loaded!');


  $('#blarg').on('click', function handleClick() {
    $.ajax({
      method: "GET",
      url: "api/sanity",
      success: sanitySuccess,
      error: sanityError
    });
    console.log("you clicked!");
    $('#blargAppend').append('<h2> blarg </h2>' );
  });




});

function sanitySuccess (success) {
  console.log("It Works! Good job!");
  console.log(success);
}

function sanityError (err) {
  console.log("It's broke!");
}

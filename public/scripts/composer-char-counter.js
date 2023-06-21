
$(document).ready(function() {
  // --- our code goes here ---
  // console.log($("#tweet-text"), inpu )
  // $("#tweet-text").on('click', function() {
  //   console.log("Hello this is a test"); //The this keyword is a reference to the button
  // });
  // $("#tweet-text").blur(function() {
  //   console.log("Hello this is a test"); //The this keyword is a reference to the button
  // });
  $("#tweet-text").on('input', function() {
    const inputValue = $(this).val();
    const inputLength = inputValue.length;
    console.log("Hello this is a test", inputValue); //The this keyword is a reference to the button
    console.log("Input Length:", inputLength);
    $(".counter").text(140 - inputLength);
    if(inputLength>140){
      $(".counter").addClass("toolong");
    }else{
      $(".counter").removeClass("toolong");
    }
  });
});
$(document).ready(function () {
  $("#tweet-text").on("input", function () {
    const inputValue = $(this).val();
    const inputLength = inputValue.length;
    // Using "this" keyword to reference the button
    // console.log("Hello this is a test", inputValue);
    // console.log("Input Length:", inputLength);
    $(".counter").text(140 - inputLength);
    if (inputLength > 140) {
      $(".counter").addClass("toolong");
    } else {
      $(".counter").removeClass("toolong");
    }
  });
});

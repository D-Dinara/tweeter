$(document).ready(function() {
  $("#tweet-text").on("input", function() {

    // get the value of the textarea
    const userInput = $(this).val();

    // calculate the number of characters left
    const charactersLeft = 140 - userInput.length;

    // target the counter and traverse up the DOM tree
    const $counter = $(this).closest('form').find('.counter');

    // update the counter on the page
    $counter.text(charactersLeft);

    // Add or remove CSS class based on the number of characters left
    if (charactersLeft < 0) {
      $counter.addClass('counter-negative');
    } else {
      $counter.removeClass('counter-negative');
    }
  });
});
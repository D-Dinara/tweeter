$(document).ready(function() {
  // Form toggle implementation
  $("#form-toggle-btn").on("click", function() {
    $("#new-tweet").slideToggle();
    $("#tweet-text").focus();
  });

  // Show/hide buttons based on scroll position
  $(this).on("scroll", function() {
    // If the page is scrolled down for more than 120px (the nav height) show the scroll-up button
    if ($(this).scrollTop() > 120) {
      $("#form-toggle-btn").hide(0);
      $("#scroll-top-btn").show(0);
    } else {
      $("#form-toggle-btn").show(0);
      $("#scroll-top-btn").hide(0);
    }
  });

  // Scroll to top and enable the textarea when the scroll-top button is clicked
  $("#scroll-top-btn").on("click", function() {
    $("html").scrollTop(0);
    $("#new-tweet").slideDown(0);
    $("#tweet-text").focus();
    $("#form-toggle-btn").show(0);
    $("#scroll-top-btn").hide(0);
  });




  const bounceArrows = function() {
    $(".fa-angles-down").animate({ paddingTop: "-=10px" }, 600, "linear", function() {
      $(this).animate({ paddingTop: "+=10px" }, 600, "linear", function() {
        // Recursively call the function to create a bounce effect
        bounceArrows();
      });
    });
  };

  // Start the bounce effect when the document is ready
  bounceArrows();
});
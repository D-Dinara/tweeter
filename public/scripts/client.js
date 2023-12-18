$(document).ready(function() {
// the escape function takes in a string and re-encode it so that unsafe characters are converted into a safe encoded representation
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  //The createTweetElement function takes in a tweet object
  // and returns a tweet <article> element containing the entire HTML structure of the tweet
  const createTweetElement = function(tweet) {
    const $tweet = $(`
    <article class="tweet">
    <header>
      <div class="tweet-author">
        <img src=${tweet.user.avatars} alt="Avatar">
        <h3>${tweet.user.name}</h3>
      </div>
      <h3 class="user-handle">${tweet.user.handle}</h3>
    </header>
    <p class="tweet-text">${escape(tweet.content.text)}</p>
    <hr>
    <footer>
      <p class="tweet-time">${timeago.format(tweet.created_at)}</p>
      <div>
        <i class="icon fa-solid fa-flag"></i>
        <i class="icon fa-solid fa-retweet"></i>
        <i class="icon fa-solid fa-heart"></i>
      </div>
    </footer>
  </article>
  `);
    return $tweet;
  };
  
  //The renderTweets function takes in an array of tweet objects and preppends tweet to the #tweets-container
  const renderTweets = function(tweets) {
    tweets.forEach(tweet => {
      const $tweet = createTweetElement(tweet);
      $("#tweets-container").prepend($tweet);
    });
  };
  
  // The loadtweets function makes a GET request to /tweets and receives the array of tweets as JSON
  const loadTweets = function() {
    $("#tweets-container").empty();
    $.ajax("/tweets", { method: 'GET' })
      .then(function(tweets) {
        renderTweets(tweets);
      });
  };
  loadTweets();

  // Attach a submit event handler to the form
  $("#tweet-form").on("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();
    // Hide the error message
    $(".error-container").slideUp(200);
    // Get the textarea value and trim
    const tweetText = $("#tweet-text").val();
    const trimmedTweetText = tweetText.trim();
    // define the counter
    const $counter = $(this).find('.counter');

    // Check if the textarea is empty
    if (!trimmedTweetText) {
      // Insert (or change) error message text in 200ms when the error element slides up
      setTimeout(() => {
        $(".error-text").text("The tweet is empty. Please, enter a message to post");
      }, 200);
      // Show the error message
      $(".error-container").slideDown();
      return;
    }

    // Check if text is too long
    if (tweetText.length > 140) {
      // Insert (or change) error message text in 200ms when the error element slides up
      setTimeout(() => {
        $(".error-text").text("The tweet is too long. Please, make your tweet shorter");
      }, 200);
      // Show the error message
      $(".error-container").slideDown();
      return;
    }

    // Serialize the form data
    const data = $(this).serialize();
    
    // Send a POST request to the server to save the new tweet
    $.ajax({
      url: "/tweets",
      method: "POST",
      data
    })
      .then(function() {
        // Reset the textarea
        $("#tweet-text").val("");
        // Reset the counter
        $counter.text(140);
        // send the GET request to the server and render the tweets
        loadTweets();
      });
  });
});




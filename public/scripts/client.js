$(document).ready(function() {
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
    <p class="tweet-text">${tweet.content.text}</p>
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
  
  //The renderTweets function takes in an array of tweet objects and appends tweet to the #tweets-container
  const renderTweets = function(tweets) {
    tweets.forEach(tweet => {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
    });
  };

  // Attach a submit event handler to the form
  $("#tweet-form").on("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the textarea value and trim
    const tweetText = $('#tweet-text').val();
    const trimmedTweetText = tweetText.trim();

    // Check if the textarea is empty
    if (!trimmedTweetText) {
      return alert("The tweet is empty");
    }

    // Check if text is too long
    if (tweetText.length > 140) {
      return alert("The tweet is too long");
    }

    // Serialize the form data
    const data = $(this).serialize();

    // Send a POST request to the server to save the new tweet
    $.ajax({
      url: "/tweets",
      method: "POST",
      data
    })
      .done(function() {
        // send the GET request to the server to get the tweets
        $.ajax("/tweets", { method: 'GET' })
          .then(function(tweets) {
            // Render the last tweet
            const newTweet = tweets[tweets.length - 1];
            renderTweets([newTweet]);
          });
      });
   
  });

  // The loadtweets function makes a GET request to /tweets and receives the array of tweets as JSON
  const loadTweets = function() {
    $.ajax("/tweets", { method: 'GET' })
      .then(function(tweets) {
        renderTweets(tweets);
      });
  };
  loadTweets();
});
// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

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
      <p class="tweet-time">${tweet.created_at}</p>
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
  renderTweets(data);

  // Attach a submit event handler to the form
  $("#tweet-form").on("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();
    // Serialize the form data
    const data = $(this).serialize();
    // Send a POST request to the server
    $.ajax({
      url: "/tweets",
      method: "POST",
      data,
    });
  });
});
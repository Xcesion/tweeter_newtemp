/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  const tweetData = [
    {
      user: {
        name: "Newton",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@SirIsaac",
      },
      content: {
        text: "If I have seen further it is by standing on the shoulders of giants",
      },
      created_at: 1461116232227,
    },
    {
      user: {
        name: "Descartes",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@rd",
      },
      content: {
        text: "Je pense , donc je suis",
      },
      created_at: 1461113959088,
    },
  ];

  const renderTweets = function (tweets) {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $("#tweets-container").prepend($tweet);
    }
    // takes return value and appends it to the tweets container
  };

  const createTweetElement = (tweet) => {
    const $tweet = $(`
  <article class="rhoda-tweets">
      <div class="rhoda-tweets-header">
        <div class= "rhoda-tweets-user">
          <img class="rhoda-tweets-avatar" src= "${tweet.user.avatars}"/>
          <label>${tweet.user.name}</label>
        </div>
        <label class="mrsjacobs">${tweet.user.handle}</label>
      </div>
      <br>
      <div>
        <label class="rhoda-tweets-text">${tweet.content.text}</label>
      </div>
      <br>
      <hr>
      <div class="rhoda-tweets-details">
        <label class="rhoda-tweets-day">${timeago.format(
          tweet.created_at
        )}</label>
        <div>
          <i href ="" class="fa-solid fa-flag icon" ></i>
          <i href ="" class="fa-solid fa-retweet icon" ></i>
          <i href ="" class="fa-solid fa-heart icon" ></i>
        </div>
      </div>
  </article>
  `);
    return $tweet;
  };

  const loadTweets = function () {
    $.ajax({
      method: "GET",
      url: "http://localhost:8080/tweets",
      success: (tweetData) => {
        renderTweets(tweetData);
      },
    });
  };


  loadTweets();

  $(".tweet-form").submit(function (event) {
    // stop the browser from auto submitting the form
    event.preventDefault();
    console.log("test submit successful of tweet form");
    // get the information from the form as urlencoded data
    const newtweet = $("#tweet-text").val();
    if (newtweet === "" || newtweet === null) {
      alert("You can't tweet an empty post!");
    }
    if (newtweet.length > 140) {
      $(".error-message-max-length")
        .text("⚠️Your tweets reach to the max charaters!⚠️")
        .slideDown("slow");
    }
    const serializeData = $(this).serialize();
    console.log("this is serializedData:", serializeData);
    console.log("this is newtweet:", newtweet);
    $.ajax({
      method: "POST",
      url: "http://localhost:8080/tweets",
      data: serializeData,
      success: () => {
        // make a followup GET request
        loadTweets();
        console.log("test submit successful of tweet form");
      },
    });
    // POST the data to the server
  });
});

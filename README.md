# Tweeter Project

Tweeter is a single-page Twitter clone where users can create short posts of up to 140 characters and have them appended to the main page. Posts are sequential, with the most recent ones appearing at the top of the page. To achieve this, Tweeter fetches a list of posts from a simplified ‘server’ and allows users to dynamically add posts to this list. In the project, the following technologies were applied: HTML, CSS, jQuery, AJAX, and SASS.

## Final Product

!["The main page on the screen larger than 1024px"](/docs/tweet-success.png)
!["The tweet is too long, the screen is smaller than 1024px"](/docs/tweeter-longtweet.png)
!["The tweet is empty, the screen is smaller than 1024px"](/docs/tweeter-smallerscreen.png)

## Functionality developed

* The application adheres to the specified design, utilizing semantic and valid HTML and CSS, with tweets displayed in reverse chronological order (latest tweet at the top).
* SASS is incorporated for improved stylesheet organization and maintainability.
* The application seamlessly switches from a two-column layout to a one-column layout when the page width is below 1024px.
* Each tweet article comprises a header with the user's avatar, name, and handle; a body with the user's tweet; and a footer displaying the time since the tweet was created, along with icons on the right.
* The character counter dynamically decrements (starting at 140) as the user types, turning red when the character limit is exceeded.
* The form is activated when one of the buttons is clicked.
* The page scrolls to the top when the "scroll up" button is clicked.
* Dynamic form validation is implemented, displaying appropriate error messages.
* Error messages are cleared upon successful tweet submission and slide back into view if validation errors persist.
* The textarea is cleared after a tweet is successfully submitted.
* jQuery is utilized to submit form data via AJAX.
* Tweets are fetched with AJAX, ensuring dynamic content updates.
* The application refetches tweets upon form submission, ensuring the latest tweet is displayed at the top.

## Getting Started

1. Clone the repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm start` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

* body-parser
* chance
* express

<div align="center">
  <h1>:tennis: Ping Pong Scorekeeper :closed_book:</h1>
  <strong>By Jamie Barlow</strong>
</div>

## Purpose :bulb:

- This web app allows the user to count score to a 'first to' target score. Once this has been reached, the count stops and must be reset for the next game.
- The scorekeeper is a practice project inspired by Colt Steele's Udemy course: The Web Developer Bootcamp 2022. The project's focus is to practice manipulation of DOM elements (e.g. the querySelector() method, styling using CSS classes), setting up event listeners, and JavaScript logic. I took the project brief and decided to attempt this without the guiding 'code-along' steps, which was a great problem-solving exercise in itself. I then compared with Colt's process, which inspired me to refactor sections of code and work on further challenges by adding extra features - notably, a reset button and a tie-break function. At the same time, I was able to practice quickly setting up a page with 'vanilla' CSS, structuring the page layout with Flexbox.

## Features :heavy_check_mark:

- A 'Playing To' dropdown selector - you can play to a score of 3, 5, or 7, at which point the winner's score will display in green and the loser will display in red.
- A reset button - this can be clicked at any time to reset scores to 0. In addition, once a winning score has been reached, the buttons for players 1 and 2 will disable and you will need to click this to reset both scores to 0.
- A 'tiebreak' feature: when playing ping-pong (or its table-free cousin, tennis), the winner must be 2 points clear of the opponent. If they are only separated by one point, the score count will continue until either player has a two-point margin. To implement this I needed to create a header element which appears above (prepended to) the score. The trigger for the 'game over' condition in my JavaScript also needed to be modified so that once the players are in a 'tie break' condition, the same score targets no longer apply - the only deciding factor for the winner is a margin of 2. This also meant making changes to the 'reset' button function, ensuring that the Tie Break status and styling were removed correctly.

## Technologies :floppy_disk:

- HTML
- CSS (Flexbox, no frameworks)
- JavaScript

## Potential Additions :hourglass:

- Score counters for more than 2 players - there are many different score-counting systems depending on the sport, but in this case it could be useful to have the option to decide how many players are participating, and create the relevant number of score buttons.

## License :scroll:

[GNU GPLv3 license](https://www.gnu.org/licenses/gpl-3.0.en.html)

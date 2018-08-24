# Sub Class Dance Party

Time for a dance party, the stage is ready to be filled with people!

In this project you will find some code that has already been prepared for you, but you need to continue from here. These are your tasks.

- Each time the “regular” button is clicked a new basic dancer should appear on a random position in the `#stage` div.
- Now create a sub-class of dancers: the tappers. They are like the basic dancers, but they blink. Make sure they can be added to stage whenever someone clicks on the “tapper” button.
- Finally the wild ones: the rainbow dancers. They are another sub-class of the basic ones, but they keep changing color, smoothly rotating across the rgb spectrum. Oh, and they’ll need a button too… you get it by now.

Wow, what a great stage! Now refactor all your code to move from the functional style, to functional with shared methods. Once you’re done, refactor again and move to pseudoclassical. Finally try ES6.

Mmm… your dancers are lazy. Make them smoothly move around the stage in a random fashion. Then add a button to the header named `#rest` so that when you click on it all the dancers on stage slowly align to the bottom of the screen.

## Getting started

To install the required dependencies run `npm install`.

Now you can execute `npm run start` from the project folder: this will open the browser on `index.html`, and automagically reload the page any time you modify a js, html, or css file (if you want to disable automatic syncing, you can do it from the control panel at `http://localhost:3001/sync-options`).

Your JavaScript code goes in `scripts/stage.js`, you can use `index.html` and `style.css` to add anything useful to complete the exercise.

## Extra credits

Make dancers that interact with other dancers. For example, by iterating across the arrays of dancers and using the Pythagorean theorem to calculate their distance from each other dancer, you can have a dancer find its n closest neighbors and do something based on their positions.

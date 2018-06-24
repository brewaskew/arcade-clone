# **Arcade Clone**

Arcade Clone is a game developed as part of the Grow with Google Front-End Nanodegree Program (FEND).  It is an exercise in using object oriented javascript techniques.

The game is a recreation of the classic Frogger.  To begin the game, just load the web page: https://brewaskew.github.io/arcade-clone/.
To start playing, select your character form the provided options.  To move your character around the board, use the arrow keys on the keyboard.  The user moves their character from the bottom of the board to the top of the board, while avoiding enemies.  Upon reaching the top of the board, the player resets and starts a new level of increased difficulty (more enemies), until all three player lives are gone.

# **Features**

Arcade Clone allows a player to choose their character from 5 options.  The player then uses the arrow keys on the keyboard to move the character around the board, in an attempt to reach the top of the board (water row).  When a player reaches the top of the board, they are reset to the starting point to start a new level of increased difficulty (more enemies).  The player gets three lives.

As the player moves around the board, the game checks to make sure the player's character does not move off the board.  It also checks for a collision (player death) between the player character and the enemy characters.

The game keeps track of player lives and displays the number of lives a player has left above the game board, using character icons.  It also keeps track of the level a player is on, also displayed above the game board.  Upon beating a level, a modal box appears stating you made it to the next level, which disappears on its own after a set time.  When a player loses all of their lives, the game is over and a modal box appears stating the game is over and allows for a replay option.

# **Development**

## Organization

The app consists of:
1. index.html
2. css/app.css
3. js/app.js
4. js/engine.js
5. js/resources.js
6. Retro-Computer font
7. Images folder containing all character images and game board images.

## Dependencies
In making this app, I wrote a bulk of the player and enemy object creation and functionality.  Udacity provided a large amount of code, including 
1. engine.js
2. resources.js
3. basic outline of the enemy object and functions needed for the enemy object.

I also made use of, greatly or in full, the following:

1. Implementation of the modal-box, from a previous Udacity project, which relied upon a modal-box example from SABE at: https://sabe.io/tutorials/how-to-create-modal-popup-box and the book, "Javascript & Jquery - interactive front-end web development" by: Jon Duckett
2. For collision detection, I used the Mozilla Developer Network (MDN) 2D Collision Formula at: https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection 
3. I used a free for personal use font (Retro-Computer font) from: https://www.dafont.com/retro-computer.font

## Build & Theme
The site is built using html5, css3, and javascript, using javascript objects.  The theme is a retro arcade game, namely Frogger.

## **Author**
Matt Scott

## **Release Notes**
Initial release: 6/24/18

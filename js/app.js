//Variables for player character image, 'Lives' icons and Level counter
let character = "";
let level = 1;

//Variables for accessing modal boxes
const levelModal = document.querySelector(".modal-level");
const endModal = document.querySelector(".modal-end");
const replay = document.querySelector(".replay");
const levelContent = document.querySelector(".level");
const lives = document.querySelector(".lives-count");
const levelCount = document.querySelector(".level-count");
const ReadyPlayerOne = document.getElementById("L1");
const ReadyPlayerTwo = document.getElementById("L2");
const ReadyPlayerThree = document.getElementById("L3");

//Show or hide modal boxes
function toggleModal(modal) {
    modal.classList.toggle("show-modal");
}

// Enemies our player must avoid
var Enemy = function (allowedY) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    this.x = -110; //creates enemy off screen

    /* Randomly select the number 0, 1, or 2 and use it to access
    ** row location value in the allowedY array*/
    this.createY = Math.floor(Math.random() * 3);

    if (this.createY === 0) {
        this.y = allowedY[0];
    }
    else if (this.createY === 1) {
        this.y = allowedY[1];
    }
    else {
        this.y = allowedY[2];
    }

    //When creating enemy, give it an initial random speed b/w 50 and 400
    this.speed = Math.floor(Math.random() * 400) + 50;

    //enemy image file location
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    /* If enemy reaches end of the game board, reset with a new
    ** random position from allowedY array */
    if (this.x > 505) {
        this.x = -110;

        this.createY = Math.floor(Math.random() * 3);

        if (this.createY === 0) {
            this.y = allowedY[0];
        }
        else if (this.createY === 1) {
            this.y = allowedY[1];
        }
        else {
            this.y = allowedY[2];
        }

        this.speed = Math.floor(Math.random() * 400) + 50;
    }

    /* 2D Collision Detection Formula credited to Mozilla Developer Network (MDN)
    ** https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
    ** Check to see if an enemy touches the player.  If it does, reset player
    ** to start position and remove a player's available life.  If after player life removed,
    ** player lives=0, trigger end game modal box */

    if (player.y === this.y) {
        if (this.x < player.x + 70 &&
            this.x + 70 > player.x) {
            /* Remove a player life and hide furthest right visible "Lives" icon
            ** on the scoreboard */
            player.livesLeft -= 1;
            if (player.livesLeft === 2) {
                ReadyPlayerThree.style.visibility = "hidden";
            }
            else if (player.livesLeft === 1) {
                ReadyPlayerTwo.style.visibility = "hidden";
            }
            //Trigger end game modal box
            else if (player.livesLeft === 0) {
                ReadyPlayerOne.style.visibility = "hidden";
                player.sprite = "";
                replay.addEventListener("click", function () {
                    location.reload();
                });
                toggleModal(endModal);
            }
            //reset player to start position
            player.x = 202;
            player.y = 389;
        }
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Player object
const Player = function (x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = character;
    this.livesLeft = 3;

};

/* Player update is a required function for the game engine however
** my implication does not make use of it. */
Player.prototype.update = function () {

};

// Draws character image on the game board.
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/* Captures user input from arrow keys and moves the character accordingly.
** Also checks for illegal moves (ie: character can't move off screen).
** If player reaches final row, "Next level" modal box is triggered, player
** is reset to start position, level counter is increased on the scoreboard, 
** and a new enemy is created. */
Player.prototype.handleInput = function (keyCode) {

    if (keyCode === 'up') {
        if (this.y !== -21) {
            this.y -= this.speed;
        }
    }
    else if (keyCode === 'down') {
        if (this.y !== 389) {
            this.y += this.speed;
        }
    }
    else if (keyCode === 'left') {
        if (this.x !== 0) {
            this.x -= 101;
        }
    }
    else {
        if (this.x !== 404) {
            this.x += 101;
        }
    }

    if (this.y === -21) {
        level += 1;
        levelContent.textContent = "Level " + level;
        const timeout = setTimeout(function () {
            toggleModal(levelModal);
        }, 1500);
        this.x = 202;
        this.y = 389;
        allEnemies.push(new Enemy(allowedY));
        levelCount.textContent = level;
        toggleModal(levelModal);
    }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

// Array of allowed y coordinates (ie: rock rows)
const allowedY = [61, 143, 225];

/* Create initial random group of enemies, this will be added to
** as player advances to each new level. */
const allEnemies = [new Enemy(allowedY),
new Enemy(allowedY),
new Enemy(allowedY)];

// Place the player object in a variable called player and place at start position.
const player = new Player(202, 389, 82);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
let character = 'images/char-boy.png';

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

    // Randomly place enemy in 1 of 3 rows on game board
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

    this.speed = Math.floor(Math.random() * 400) + 50; //random number b/w 50 and 400
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    // Reset enemy if reaches end of game board
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

    // 2D Collision Detection Formula credited to Mozilla Developer Network (MDN)
    // https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
    
    if (player.y === this.y) {
        if (this.x < player.x + 70 &&
            this.x + 70 > player.x) {
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
const Player = function (x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = character;
};

Player.prototype.update = function () {
    
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

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

    if (player.y === -21) {
        console.log(player.y);
        const timeout = setTimeout(function () {
            toggleModal(levelModal);
             /* player.x = 202;
             player.y = 389; */
         }, 1500);
         player.x = 202;
         player.y = 389;
         toggleModal(levelModal);
     }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Array of allowed y coordinates
const allowedY = [61, 143, 225];

// Create initial random group of enemies
const allEnemies = [new Enemy(allowedY),
                    new Enemy(allowedY),
                    new Enemy(allowedY),
                    new Enemy(allowedY)];

// Place the player object in a variable called player
const player = new Player(202, 389, 82);  //Player initial start point



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
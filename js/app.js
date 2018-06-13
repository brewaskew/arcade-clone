// Enemies our player must avoid
var Enemy = function(allowedY) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = -110; //creates enemy off screen

    //Place enemy in 1 of 3 rows on game board
    const createY = Math.floor(Math.random() * 3);

    if (createY === 0) {
        this.y = allowedY[0];
    }
    else if (createY === 1) {
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
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed*dt;
    

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function(x, y, speed) {
    this.x = x;
    this.y = y;
    //this.speed = speed;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {
    
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};




// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const player = new Player(202, 404, 50);  //Start player in center of bottom row and set speed to 50

// Array of allowed y coordinates
const allowedY = [61, 143, 225];
// Create initial group of enemies
const allEnemies = [new Enemy(allowedY),
                    new Enemy(allowedY),
                    new Enemy(allowedY),
                    new Enemy(allowedY)];




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

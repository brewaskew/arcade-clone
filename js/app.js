function makeGrid(h, w) {
    const table = document.getElementById("game-board");
    let imgClass;
    let rowClass;
    let colClass;
    let newCell;
    

    for (let i = 0; i < h; i++) {
            if (i === 0 || i === 1) {
                imgClass = "grass";
            }
            else if (i === 5) {
                imgClass = "water";
            }
            else {
                imgClass = "stone";
            }

        const row = table.insertRow(0);

        for (let j = 0; j < w; j++) {
            if (i === 0) {
                rowClass = "bottom";
            }
            else if (i === 5) {
                rowClass = "top";
            }
            else {
                rowClass = "rmiddle";
            }

            if (j === 0) {
                colClass = "left";
            }
            else if (j === 4) {
                colClass = "right";
            }
            else {
                colClass = "cmiddle";
            }

            newCell = row.insertCell(j);
            newCell.className = rowClass + ", " + colClass + ", " + imgClass;
        }
    }
}


/* // Enemies our player must avoid
var Enemy = function () {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
    this.x = 0;
    this.y = 0;
    this.sprite = "images/char-boy.png";
};

// Update player's position, required method for game.
// Parameter: dt, a time delta between ticks
Player.prototype.update = function (dt) {

};

// Draw the player on the screen, required method for game
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = Player;



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
}); */

function playGame() {
    makeGrid(6, 5);
}

playGame();

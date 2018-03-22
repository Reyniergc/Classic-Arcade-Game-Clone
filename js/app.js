let allEnemies = [];
let player;

class Enemy {
	constructor(enemy_img_name, coordinate_x, coordinate_y) {
		this.imgEnemy = "images/" + enemy_img_name;
		this.x = coordinate_x;
		this.y = coordinate_y;
	}
	
	// Update the enemy's position, required method for game
	// Parameter: dt, a time delta between ticks
	update(dt) {
		// You should multiply any movement by the dt parameter
		// which will ensure the game runs at the same speed for
		// all computers.
	}
	
	
	// Draw the enemy on the screen, required method for game.
	render() {
		ctx.drawImage(Resources.get(this.imgEnemy), this.x, this.y);
	}
}

class Player {
	constructor(player_img_name, coordinate_x, coordinate_y) {
		this.imgPlayer = "images/" + player_img_name;
		this.x = coordinate_x;
		this.y = coordinate_y;
	}
	
	update(dt) {
		// You should multiply any movement by the dt parameter
		// which will ensure the game runs at the same speed for
		// all computers.
	}
	
	render() {
		ctx.drawImage(Resources.get(this.imgPlayer), this.x, this.y);
	}
	
	handleInput() {
		
	}
}

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

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

let enemy_1 = new Enemy("enemy-bug.png", 10, 80);
let enemy_2 = new Enemy("enemy-bug.png", 200, 180);
let enemy_3 = new Enemy("enemy-bug.png", 350, 280);

allEnemies.push(enemy_1);
allEnemies.push(enemy_2);
allEnemies.push(enemy_3);

// Place the player object in a variable called player
player = new Player("char-boy.png", 100, 80);
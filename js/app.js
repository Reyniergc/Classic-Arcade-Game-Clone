let allEnemies = [];
let enemy_1 = null;
let enemy_2 = null;
let enemy_3 = null;
let player;

class DrawImagesOnCanvas {
	constructor(img, coordinate_x, coordinate_y) {
		this.x = coordinate_x;
		this.y = coordinate_y;
		this.img = "images/" + img;
	}

	// Draw the enemy on the screen, required method for game.
	render() {
		ctx.drawImage(Resources.get(this.img), this.x, this.y);
	}
}

class Enemy extends DrawImagesOnCanvas {
	constructor(enemy_img_name, enemySpeed, coordinate_x, coordinate_y) {
		super(enemy_img_name, coordinate_x, coordinate_y);
		this.enemySpeed = enemySpeed;
	}

	update(dt) {
		// You should multiply any movement by the dt parameter which
		// will ensure the game runs at the same speed for all computers.
		this.x += this.enemySpeed * dt;
	}
}

class Player extends DrawImagesOnCanvas {
	constructor(player_img_name, coordinate_x, coordinate_y) {
		super(player_img_name, coordinate_x, coordinate_y);
	}

	update(dt) {
		// You should multiply any movement by the dt parameter which
		// will ensure the game runs at the same speed for all computers.
	}

	handleInput(move) {
		
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
enemy_1 = new Enemy("enemy-bug.png", 50, 10, 63);
enemy_2 = new Enemy("enemy-bug.png", 25, 200, 145);
enemy_3 = new Enemy("enemy-bug.png", 5, 350, 227);

allEnemies.push(enemy_1);
allEnemies.push(enemy_2);
allEnemies.push(enemy_3);

// Place the player object in a variable called player
player = new Player("char-boy.png", 100, 80);

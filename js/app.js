let allEnemies = [];
let enemy_1 = null;
let enemy_2 = null;
let enemy_3 = null;
let enemy_4 = null;
let enemy_5 = null;
let enemy_6 = null;
let player = null;
let ejecuteGame = false;
let playerWins = 0;
let createObject = true;


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
		if (this.x > 700) {
			this.x = -99;
		}
		
		this.x += this.enemySpeed * dt;
	}
}

class Player extends DrawImagesOnCanvas {
	constructor(player_img_name, coordinate_x, coordinate_y) {
		super(player_img_name, coordinate_x, coordinate_y);
	}

	update(dt) {
		if (this.y < 0) {
			this.x = 200;
			this.y = 400;
			++playerWins;
		}
		
		if (playerWins === 1) {
			playerWins = 0;
			document.getElementById("modalBody").innerHTML  = "Congratulations!!! You Won the game!!!";
			document.getElementsByClassName("container")[0].style.visibility = "hidden";
			showModal();
		}
	}

	handleInput(keyboardMov) {
		switch (keyboardMov) {
			case "left": {
				if (this.x > 0) {
					this.x -= 100;
				}
				break;
			}
			case "right": {
				if (this.x < 400) {
					this.x += 100;
				}
				break;
			}
			case "up": {
				if (this.y > 0) {
					this.y -= 90;
				}
				break;
			}
			case "down": {
				if (this.y < 400) {
					this.y += 90;
				}
			}
		}
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

function showModal() {
	$('#myModal').modal({
		backdrop: 'static',
		keyboard: false
	});
}
showModal();

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
function startGame() {
	if (createObject) {
		let img_player_name;
		let img = document.getElementsByName("img_player_name");

		for (let index = 0; index < img.length; index++) {
			if (img[index].checked) {
				img_player_name = img[index].value;
				break;
			}
		}

		enemy_1 = new Enemy("enemy-bug.png", 155, -320, 63);
		enemy_2 = new Enemy("enemy-bug.png", 130, -200, 145);
		enemy_3 = new Enemy("enemy-bug.png", 140, -500, 227);
		
		enemy_4 = new Enemy("enemy-bug.png", 155, -29, 63);
		enemy_5 = new Enemy("enemy-bug.png", 130, -5, 145);
		enemy_6 = new Enemy("enemy-bug.png", 138, -99, 227);

		allEnemies.push(enemy_1);
		allEnemies.push(enemy_2);
		allEnemies.push(enemy_3);
		allEnemies.push(enemy_4);
		allEnemies.push(enemy_5);
		allEnemies.push(enemy_6);

		// Place the player object in a variable called player
		player = new Player(img_player_name, 200, 400);
		createObject = false;
		ejecuteGame = true;
	}

	$('#myModal').modal('hide');
}

let allEnemies = [];
let enemy_1 = null;
let enemy_2 = null;
let enemy_3 = null;
let enemy_4 = null;
let enemy_5 = null;
let enemy_6 = null;
let player = null;
let objBonus = null;
let ejecuteGame = false;
let playerWins = 0;
let bonus = 0;
let pointsStar = 0;
let pointsBlueRuby = 0;
let pointsYellowRuby = 0;
let randomNumKey = Math.floor((Math.random() * 15) + 1);
let createObject = true;
let clear;
let coordinateObj = {1: [0, 63, "gem-blue.png"], 2: [100, 63, "gem-orange.png"], 3: [200, 63, "star.png"], 4: [300, 63, "gem-orange.png"], 5: [400, 63, "gem-blue.png"], 6: [0, 145, "star.png"], 7: [100, 145, "star.png"], 
8: [0, 145, "gem-orange.png"], 9: [300, 145, "star.png"], 10: [400, 145, "gem-orange.png"], 11: [0, 227, "gem-blue.png"], 12: [100, 227, "gem-blue.png"], 13: [200, 227, "gem-blue.png"], 14: [300, 227, "gem-orange.png"], 15: [400, 227, "star.png"]}


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
		
		if (playerWins === 2) {
			document.getElementById("bonus").innerHTML = 0;
			document.getElementById("modalBody").innerHTML  = "Congratulations!!! You Won the game!!!";
			document.getElementsByClassName("container")[0].style.visibility = "hidden";

			document.getElementById("td1_star").innerHTML = pointsStar;
			document.getElementById("td2_ruby_yellow").innerHTML = pointsYellowRuby;
			document.getElementById("td3_ruby_blue").innerHTML = pointsBlueRuby;
			document.getElementById("td4_total_bonus").innerHTML = bonus;

			playerWins = 0;
			pointsStar = 0;
			pointsYellowRuby = 0;
			pointsBlueRuby = 0;
			bonus = 0;

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

class DrawRandomImagesOnCanvas extends DrawImagesOnCanvas {
	constructor(player_img_name, coordinate_x, coordinate_y) {
		super(player_img_name, coordinate_x, coordinate_y);
	}

	resetRandomImg(img) {
		if (img === "gem-blue.png") {
			pointsBlueRuby += 5;
			bonus += 5;
		}
		else if (img === "gem-orange.png") {
			pointsYellowRuby += 10;
			bonus += 10;
		}
		else { // STAR.
			bonus += 15;
			pointsStar += 15;
		}

		document.getElementById("bonus").innerHTML = bonus;
		this.x = -99;
		this.y = -99;
		randomNumKey = 0;
	}

	playerGetBonnus(coordinate_x, img, player) {
		if (((coordinate_x >= 0) && (coordinate_x < 100))
			&& ((player.x >= 0) && (player.x < 100))) {
			this.resetRandomImg(img);
		}
		else if (((coordinate_x >= 100) && (coordinate_x < 200))
			&& ((player.x >= 100) && (player.x < 200))) {
			this.resetRandomImg(img);
		}
		else if (((coordinate_x >= 200) && (coordinate_x < 300))
			&& ((player.x >= 200) && (player.x < 300))) {
			this.resetRandomImg(img);
		}
		else if (((coordinate_x >= 300) && (coordinate_x < 400))
			&& ((player.x >= 300) && (player.x < 400))) {
			this.resetRandomImg(img);
		}
		else if ((coordinate_x >= 400) && (player.x >= 400)) {
			this.resetRandomImg(img);
		}
	}
	
	checkBonus() {
		if (randomNumKey > 0) {
			let array = coordinateObj[randomNumKey];
			if (((array[1] >= 0) && (array[1] < 100)) && ((player.y >= 0) && (player.y < 100))) {
				this.playerGetBonnus(array[0], array[2], player);
			}
			else if (((array[1] >= 100) && (array[1] < 200)) && ((player.y >= 100) && (player.y < 200))) {
				this.playerGetBonnus(array[0], array[2], player);
			}
			else if (((array[1] >= 200) && (array[1] <= 300)) && ((player.y >= 200) && (player.y <= 300))) {
				this.playerGetBonnus(array[0], array[2], player);
			}
		}
	}

	update(array) {
		this.x = array[0];
		this.y = array[1];
		this.img = "images/" + array[2];
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
		
		objBonus = new DrawRandomImagesOnCanvas("gem-blue.png", -99, -99);

		clear = setInterval(function() {
			randomNumKey = Math.floor((Math.random() * 15) + 1);
			objBonus.update(coordinateObj[randomNumKey]);
		}, 3000);

		createObject = false;
		ejecuteGame = true;
	}

	$('#myModal').modal('hide');
}

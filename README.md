# Classic-Arcade-Game-Clone
Project realized during the Udacity Front-End Nano Degree

**_In this link you can play the game if you want._** [Play Now!!!](https://reyniergc.github.io/Classic-Arcade-Game-Clone/)

**Main goal of the project memory card.**

The main goal of this project is to create a friendly game where the players can move inside a grid and try to avoid the 
enemies to reaches the water blue zone. To win the game the player should reach the blue zone 2 times without collisions with
the enemies obstacles. When the player win the game appear a modal with information about the number of points and a congratulations text.

On the other hand the player starts with three lives. These lives decrease each time the player collisions with an obstacle or also
increase if the player gets a random heart that appears randomly.

**External Frameworks Dependencies:**

JavaScript Files:

- js/bootstrap.min.js
- js/jquery.min.js

Css Files:

- css/bootstrap.min.css

A bootstrap modal is used to give the player the possibility to choose a type of player at the beginning of the game, to congratulate the player
and also to show a message when the player loses all lives.
The modal also includes a button to close the modal and another one to restart the game.

JAVASCRIPT CLASSES AND METHODS EXPLANATION

The program was builded using POO. The enemies, player and the random bonus that appears on the grid are both
JavaScript objects builded using EcmaScript 6.

This class is used to draw the enemies, player, hearts and the random jewels on the canvas in a determinate coordinate (x, y)
**__class DrawImagesOnCanvas {}__*

The enemy class draws the enemies on the canvas. The constructor receives four parameters.

constructor(enemy_img_name, enemySpeed, coordinate_x, coordinate_y) {}
__enemy_img_name__ Represent the image to draw the enemies
__enemySpeed__     The velocity that the enemies are drawn on the canvas
__coordinate_x__   The coordinate x where the enemy will be drawn
__coordinate_y__   The coordinate y where the enemy will be drawn

- **__class Enemy extends DrawImagesOnCanvas {}__**


The player class draws the player on the canvas. The constructor receives four parameters.

constructor(player_img_name, coordinate_x, coordinate_y, numberOfLives) {}
__player_img_name__  Represent the image to draw the player
__coordinate_x__     The coordinate x where the player will be drawn
__coordinate_y__     The coordinate y where the player will be drawn
__numberOfLives__    Represent the number of lives available of the player

**__class Player extends DrawImagesOnCanvas {}__**


The DrawRandomImagesOnCanvas class draws the bonus points and the extra life (heart) randomly.

constructor(bonus_img_name, coordinate_x, coordinate_y) {}
__bonus_img_name__   Represent the image to draw the bonus
__coordinate_x__     The coordinate x where the bonus will be drawn
__coordinate_y__     The coordinate y where the bonus will be drawn

**__class DrawRandomImagesOnCanvas extends DrawImagesOnCanvas {}__**

**Please Note**: The enemy, player and DrawRandomImagesOnCanvas class uses the super class DrawImagesOnCanvas and inherits the public
methods and attributes of the super class to draw the enemy, player and the jewels on canvas.


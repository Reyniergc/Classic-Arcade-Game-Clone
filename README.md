# Classic-Arcade-Game-Clone
Project realized during the Udacity Front-End Nano Degree


This class is used to draw the enemies, player and the random jewels on the canvas in a determinate coordinate (x, y)
class DrawImagesOnCanvas {}

The enemy, player and DrawRandomImagesOnCanvas class use the super class DrawImagesOnCanvas and inherit the public 
methods and attributes of the super class to draw the enemy, player and the jewels on canvas.

Method render() draw the enemy on the screen, and is a required method for game.
- render() {}

class Enemy extends DrawImagesOnCanvas {}

class Player extends DrawImagesOnCanvas {}
handleInput
class DrawRandomImagesOnCanvas extends DrawImagesOnCanvas {}

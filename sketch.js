var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var edge;


function preload(){
  sound = loadSound("song.mp3");
  bg= loadImage("images/bg2.jpg");
  bg2= loadImage("images/bg3.jpg");
  player_img = loadImage("images/backet.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  sound.loop();
  database = firebase.database();
   edge = createEdgeSprites();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(bg);
   if (playerCount === 2) {
     game.update(1);
   }
   if(gameState === 0)
   {
    fill("Black");
    stroke("black");
    strokeWeight(2);
    textSize(20);
    text("**Kindly reset the game after you're done playing",450,100);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {   
     game.end();
   }
}
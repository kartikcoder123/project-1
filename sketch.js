var ball;
var paddle1, paddle2;
var edges;
var backgroundImg, ballImg
var paddle1score , score;
function preload(){
  ballImg = loadImage("Imported piskel (1).gif")
}






function setup(){
createCanvas(400,400)

ball = createSprite(200,200,20,20);
ball.addImage(ballImg);
ball.scale = 0.1;

paddle1 = createSprite(20,200,20,100)
paddle1.shapeColor = "red"

paddle2 = createSprite(380,200,20,100)
paddle2.shapeColor = "green"

ball.velocityX = 6
ball.velocityY = 4
edges = createEdgeSprites()
}



function draw(){
background("blue")
text("Score:", 20,20)

ball.bounceOff(edges[3])
ball.bounceOff(edges[2])
ball.bounceOff(paddle1)
ball.bounceOff(paddle2)

paddle2.y = World.mouseY
paddle1.y = ball.y



drawSprites();
}
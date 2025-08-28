let floor;




function setup(){
new Canvas(600,400);
floor = new Sprite (300,390,600,30,"static");
world.gravity.y=3;

}

function draw(){

background("white");
if (mouse.presses()){
ball = new Sprite (mouseX, mouseY,);
ball.diameter= 50;
ball.bounciness=0.5;
}
}
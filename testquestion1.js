function setup(){
    new Canvas(600,400);
    
world.gravity.y=3;
    
}

function draw(){

background("white");
if (mouse.presses()){
ball = new Sprite (mouseX, mouseY,);
ball.diameter= 50;
}
}
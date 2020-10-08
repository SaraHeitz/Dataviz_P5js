let canvas;
let h1;

function setup(){

canvas = createCanvas(600,400);
  translate(400, 200);
  background(40);
h1 = createElement("h1","Waiting for your input");
canvas.position(400,0);
h1.position(400,400);
}

function mouseClicked(){
  h1.html("Now thats something big")
  createP("Numbers between 8 and 7... " + random(8, 7))
}


function draw() {
  rectMode(CENTER);
  fill(0,0,255);
  let x = random(200, 400);
  rect(mouseX,200,300,200);
  h1.position(mouseX,400);
}

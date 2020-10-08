//Callback functions in Javascript
//8.4: Handling DOM Events with Callbacks - p5.js Tutorial

let bgcol;
let h1;
let button;

function setup(){

  canvas = createCanvas(600,400);
  bgcol = background(200);
  button = createButton("gogogog",);
  button.mousePressed(changeColor);
  button.position(190, 700);
}

function changeColor() {
  bgcol=background(random(255));
}


function draw() {
}

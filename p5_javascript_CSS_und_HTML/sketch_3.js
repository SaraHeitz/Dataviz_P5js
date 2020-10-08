//Callback functions in Javascript

let bgcol;
let h1;
let slider;
let slidercol;
let txtinput;
let nameP;

function setup(){

  canvas = createCanvas(600,400);


  slidercol = createSlider(0 ,255 ,30);

  slider = createSlider(3 ,399,200);

  nameP = createP('Yournamepleasesir')
  txtinput = createInput('Type your name');
}

// function changeColor() {
//   bgcol=background(random(255));
// }


function draw() {
  bgcol = background(slidercol.value());
  ellipse(300, 200, slider.value(), slider.value());
  nameP.html(txtinput.value());
  textAlign(CENTER);
  textFont('UCity');
  text(txtinput.value(), 300, 200);
}

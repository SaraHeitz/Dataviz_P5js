//Callback functions in Javascript

let bgcol;
let h1;
let slider;
let slidercol;
let txtinput;
let nameP;

function setup(){

  canvas = createCanvas(600,400);
  slidercol = createSlider(0 ,255 ,246);
  slider = createSlider(3 ,399,50);
  nameP = createP('Yournamepleasesir')
  txtinput = createInput('Type your name');

  nameP.mouseOver(overParagraph);
  nameP.mouseOut(outParagraph);

  txtinput.changed(txtUpdate);
}

function txtUpdate() {
  nameP.html(txtinput.value());
}

function overParagraph() {
  nameP.html("getting warmer");
}

function outParagraph() {
  nameP.html("getting reaaaaally cold");
}


function draw() {
  bgcol = background(slidercol.value());
  ellipse(300, 200, slider.value(), slider.value());
  // nameP.html(txtinput.value());
  textAlign(CENTER);
  textFont('UCity');
  textSize(slider.value());
  text(txtinput.value(), 300, 210);
}

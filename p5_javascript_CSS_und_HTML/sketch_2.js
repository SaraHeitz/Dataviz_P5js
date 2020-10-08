//Callback functions in Javascript

let bgcol;
let h1;
let slider;
let slidercol;

function setup(){

  canvas = createCanvas(600,400);


  slidercol = createSlider(0 ,255 ,30);
  slidercol.position(190, 650);

  slider = createSlider(3 ,399,200);
  slider.position(190, 600);

}

// function changeColor() {
//   bgcol=background(random(255));
// }


function draw() {
    bgcol = background(slidercol.value());
  ellipse(300, 200, slider.value(), slider.value());
}

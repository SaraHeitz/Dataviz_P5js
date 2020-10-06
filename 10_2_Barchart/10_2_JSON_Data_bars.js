
// Visualizing CSV Files using p5.js / Frederik De Bleser
// https://www.youtube.com/watch?v=hokTcLVtZs8


//defining the name of my dataframe
var data;
var chartLeft = 50;
var chartRight = 650;


///////////////////////////////////////////////////
function preload() {
  data = loadJSON("WagnerBrown.json");
}


///////////////////////////////////////////////////
function setup() {
createCanvas(725,200);
background(246);

var persons = data.WagnerBrown;

textAlign(CENTER, TOP);
for (let r = 0; r < persons.length; r++) {
  const name = (persons[r].Vorname);
  const alter = (persons[r].Todesalter);
  const x = map(r, persons.length - 1, 0, chartLeft, chartRight);
  const y = 50;
  const size = map(alter, 0, 280, 0, 100);

  rect(x,y,20,alter);
  fill(150);
  noStroke();
  text(name, x+9.5, y-20 );
}


}

///////////////////////////////////////////////////
function draw() {

}

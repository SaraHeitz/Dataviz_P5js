
// Visualizing CSV Files using p5.js / Frederik De Bleser
// https://www.youtube.com/watch?v=hokTcLVtZs8


//defining the name of my dataframe
let df;

//my table is comma separated value "csv"
function preload() {
  df = loadTable("data/voedingswaarde.csv");
}

function setup() {
  createCanvas(600, 400);
  console.log(df);

}

function draw() {
  background(246);
  ellipse(200,200,30);
}


// Visualizing CSV Files using p5.js / Frederik De Bleser
// https://www.youtube.com/watch?v=hokTcLVtZs8


//defining the name of my dataframe
var data;
var chartDomainMin = 0;
var chartDomainMax = 100;


///////////////////////////////////////////////////
function preload() {
  data = loadJSON("data/WagnerBrown.json");
}


///////////////////////////////////////////////////
function setup() {
noCanvas();

var persons = data.WagnerBrown;

for (var i = 0; i < persons.length; i++){
  createElement('h6', persons[i].Vorname);
  createDiv(persons[i].Todesalter);
  }
}

///////////////////////////////////////////////////
function draw() {

}


///////////////////////////////////////////////////

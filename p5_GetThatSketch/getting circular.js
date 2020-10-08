
// MY FUNCTIONS
var data;
let myFont;

let center_x = 0;
let center_y = 0;
let radius = 200;
let count = 8;



function preload(){

  data = loadJSON("WagnerBrown.json" );
}
/// FUNCTION FOR SORTING
function sortByProperty(property){
   return function(a,b){
      if(a[property] > b[property])
         return 1;
      else if(a[property] < b[property])
         return -1;
      return 0;
   }
}
////////////////////////////////////
function setup(){
  //myFont = loadFont('Fonts/UCity-Regular.otf')
  wagnerBrown = data.WagnerBrown;
  noCanvas();
  createCanvas(600,400);
  translate(300, 200);
  background(255);
  noStroke();

    /// CALL THE DIMENSIONS
  for (let r = wagnerBrown.length - 1; r >= 0; r--) {
    let name = (wagnerBrown[r].Vorname);
    wagnerBrown.sort(sortByProperty("Todesalter"));
    let alter = (wagnerBrown[r].Todesalter);
    let length = map(alter, 0, 100, 0, 100);
    let sex = (wagnerBrown[r].Geschlecht);
    let family = (wagnerBrown[r].Nachname);
    ///
    angleMode(DEGREES);
    rotate(360/wagnerBrown.length);
    fill(30);
    rect(center_x-0.5,center_y,1,alter);
    textAlign(CENTER);
    textFont("UCity");
    textSize(14);
    text(name, center_x+0.5, center_y+alter,1, alter );
    // text(sex, center_x+0.5, center_y+alter+20,1, alter );

    /// DEFINE FAMILY
    if (family == "Wagner"){
    fill(0,0,255);
  } else if (family == "Brown") {
    fill(255,0,0);
  } else {
    fill(0);
  }
    /// DEFINE SEX
    if (sex == "W") {
    rect(center_x-5,center_y+alter,10,10 );
  } else if (sex == "M") {
    ellipse(center_x,center_y+alter,10,10 );
  }



}
}

function draw(){

}

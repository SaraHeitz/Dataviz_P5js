
// Visualizing CSV Files using p5.js / Frederik De Bleser
// https://www.youtube.com/watch?v=hokTcLVtZs8


//defining the name of my dataframe
let df;
let myviz;


///////////////////////////////////////////////////
function preload() {
  df = loadTable("data/voedingswaarde.csv", 'csv', 'header');
}


///////////////////////////////////////////////////
function setup() {
  createCanvas(800, 600);
  background(246);
  textAlign(CENTER, TOP);
  myviz = new DataImage();
  myviz.build();

}


///////////////////////////////////////////////////
function draw() {
}


///////////////////////////////////////////////////
class DataImage {
///
  build() {
    for (let r = 0; r < df.getRowCount(); r++) {
      const food = (df.getString(r, "Food"));
      const serving = (df.getNum(r, "Serving"));
      const calories = (df.getNum(r, "Calories"));
      const x = random(0, width);
      const y = random(0, height);
      const size = map(serving, 0, 280, 0, 100);
      const color = map(calories, 0, 130, 255, 0);
        fill(color);
        circle(x, y, size);
        fill(30);
        text(food, x, y + size/1.8);
      }
    }
}

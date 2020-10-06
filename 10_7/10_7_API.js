var lineX = 0;
var url = 'http://api.open-notify.org/iss-now.json';
var issX = 0;
var issY = 0;
///
function setup() {
  createCanvas(500, 500);
  setInterval(askISS, 500);
}
///
function askISS() {
  loadJSON(url, gotData, 'jsonp');
}
///
function gotData(data) {
  console.log(data);
  var lat = data.iss_position.latitude;
  var long = data.iss_position.longitude;
  issX = map(lat, -100, 100, 0, width);
  issY = map(lat, -100, 100, 0, height);
}
/////////////////////////////////
function draw() {
  background(246);

  fill(30);
  ellipse(issX, issY, 24, 24);

  stroke(30);
  line(lineX, 0, lineX, height);
  lineX = lineX + 5;
  if (lineX > width) {
    lineX = 0;
  }
}

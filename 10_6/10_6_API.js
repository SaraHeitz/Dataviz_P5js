var weather;

var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&APPID=001b0f58045147663b1ea518d34d88b4';
var units = '&units=metric';

var input;

function setup() {
  createCanvas(400, 400);

  var button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');
}

function weatherAsk() {
  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}

function gotData(data) {
  weather = data;
}

function draw() {
  background(30);
  if (weather) {
    var temp = weather.main.temp;
    var humidity = weather.main.humidity;

    fill(50,temp*10,150);
    stroke(humidity*3);
    strokeWeight(humidity/10);
    ellipseMode(CENTER);
    ellipse(200, 200, temp*10);


    var temp = (weather.main.temp);
    fill(255);
    noStroke();
    textAlign(CENTER,TOP)
    text(temp+" °C", 200, 200 );

    var humid = (weather.main.humidity);
    fill(humidity*3);
    noStroke();
    textAlign(CENTER,TOP)
    text(humid+"%", 200, 50 );
  }
}

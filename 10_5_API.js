
// Visualizing CSV Files using p5.js / Frederik De Bleser
// https://www.youtube.com/watch?v=hokTcLVtZs8


//defining the name of my dataframe

//my table is comma separated value "csv"

var obj;

function preload(){
  obj = loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Basel&units=metric&appid=361a33fd66dde07b76077da59ff29efe");
}

function setup() {

  createCanvas(400, 250);
  console.log(obj);
}

//   function gotData(data){
//     weather = data;
//     console.log(weather);
//     println(weather);
//     abx
// }


function draw() {
  background(246);

    fill(0,255,obj.main.temp*10);
    ellipse(100,100, obj.main.temp*10);
    fill(obj.main.humidity*3);
    ellipse(300,100, obj.main.humidity);

}

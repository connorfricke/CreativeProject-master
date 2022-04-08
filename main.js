let x;
let y;
let xspeed;
let yspeed;
let dvd;
let bg;
let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRczUMGCpqMYTxp6VAq69dAO_jkSTemEyQ57Eva_J-8UEbwCvMN0h8bimSvyxKib16MD43zqeKcFM5c/pub?gid=5&single=true&output=csv";
let data;
let numRows;
let movieTitle;

function preload() {
  dvd = loadImage("dvdlogo.png");
  bg = loadImage("space_gif.gif");
  data = loadTable(url, 'csv', 'header');

}

function setup() {
  createCanvas(windowWidth, windowHeight*0.8).parent("#p5-canvas");
  x = random(width);
  y = random(height);
  xspeed = 3;
  yspeed = 3;

  if(data){
    numRows = data.getRowCount();
    movieTitle = data.getColumn('Film');
    
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  imageMode(CORNER);
  background(bg);
  noStroke(255);
  circle(x,y,120);
  
  imageMode(CENTER);
  image(dvd, x, y, 100, 80);

  x = x + xspeed;
  y = y + yspeed;


  if (x >= width) {
    xspeed = -xspeed;
    x = width;
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
  }

  if (y >= height) {
    yspeed = -yspeed;
    y = height;
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
  }
}
function mousePressed(){
  if(mouseX < x + 60 && mouseX > -60 && mouseY < y + 60 && mouseY > y - 60){
    let index = int(random(numRows));
    console.log(movieTitle[index]);

    const currentText = document.getElementById('filmTitle').innerText;
    const nextText = movieTitle[index];
    document.getElementById('filmTitle').innerText = nextText;  }
}
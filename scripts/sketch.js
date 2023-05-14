//trailing followers

var x, y;
var find;

var nemo;

var npcs = [];

function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('background');
  
  x = 200;
  y = 200;

  noStroke();
  frameRate(60);
  find = false;

  nemo = new Particle(300, 300,15,14)
  for (var i = 0; i < 15; i++) {
    npcs[i] = new Particle(random(windowWidth), random(windowHeight), 10,8)
  }
  frameRate(60);
}

function draw() {

  background(255);
 
  nemo.follow();
  nemo.update();
  nemo.show();

  for (var i = 0; i < npcs.length; i++) {

    npcs[i].wander();
    npcs[i].update();
    npcs[i].show();
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
var xspacing = 16;   // How far apart should each horizontal location be spaced
var w=800+100;              // Width of entire wave

var theta = 0.0;  // Start angle at 0
var amplitude = 80.0;  // Height of wave
var period = 500.0;  // How many pixels before the wave repeats
var dx;  // Value for incrementing X, a function of period and xspacing
var yvalues= new Array(900);  // Using an array to store height values for the wave
var v=15;

function setup() {
  var myCanvas = createCanvas(800,250);
  frameRate(15);
  dx = (TWO_PI / period) * xspacing;
  myCanvas.parent(mySketch);
}

function draw() {
  background(0);
  stroke(255);
  if(mouseY<300){line(0, mouseY, width, mouseY);
    fill(255,100);
    noStroke();
    ellipse(mouseX, mouseY, v*2,v*2);
    fill(0,255);
    ellipse(mouseX, mouseY,v,v);
    calcWave();
    renderWave();
  }
  else{
    line(0, 125, width, 125);
    fill(255,100);
    noStroke();
   ellipse(400, 125, v*2,v*2);
    fill(0,255);
    ellipse(400, 125,v,v);
    calcWave();
    renderWave();
  }
}

function calcWave() {
  // Increment theta (try different values for 'angular velocity' here
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave() {
  noStroke();
  fill(255,150);
  // A simple way to draw the wave with an ellipse at each location
  if (mouseY<300){
    for (var x = 0; x < yvalues.length; x++) {
      ellipse(x*xspacing, mouseY+yvalues[x], 5, 5);
      ellipse(x*xspacing, mouseY+yvalues[x]*-1, 5, 5);
      ellipse(x*xspacing-50, mouseY+yvalues[x], 5, 5);
      ellipse(x*xspacing-75, mouseY+yvalues[x]*-1, 5, 5);
    }
  }
  else{
    for (var x = 0; x < yvalues.length; x++) {
      ellipse(x*xspacing, 125+yvalues[x], 5, 5);
      ellipse(x*xspacing, 125+yvalues[x]*-1, 5, 5);
      ellipse(x*xspacing-50, 125+yvalues[x], 5, 5);
      ellipse(x*xspacing-75, 125+yvalues[x]*-1, 5, 5);
    }
  }
}
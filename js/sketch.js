var rood =255;
var blauw =255;
var groen =255;

var vincent= "hallo";

function setup() {
  // put setup code here

  createCanvas(400,400);
  background(240);

  var vincent= "hallo";
  
}

function draw() {
  // put drawing code here
  rood = random(0,255); 
  blauw = random(255);
  groen = random(255);
  //background(rood,groen,blauw,random(255));
  //console.log(vincent);
  noStroke();

  background(0,255-mouseX,0);

  fill(0,0,255);
  ellipse(200,200,mouseX,mouseY);

  fill(0,255,0);
  rect(100,150,200,100);

  fill(255,0,0);
  ellipse(200,200,100,100);

  stroke(100,0,0);
  strokeWeight (16);
  line(0,200,400,200);
  line(200,0,200,400);

  console.log(mouseX);
}
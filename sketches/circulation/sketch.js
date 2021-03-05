let t = 0;
let r, g, b;
let buttonPosition;
let buttonSize;

function setup() {
  let canvas = createCanvas(innerWidth, innerHeight);
  canvas.parent("#sketch-parent");
  background(r,g,b,70);
  r = random(255);
  g = random(255);
  b = random(255);
  
  buttonPosition = createVector(50, 50);
  buttonSize = 50;
  noStroke();
}


function draw() {
  strokeWeight(2);
  push();
    translate(width/2, height/2);
    fill(r, g, b);
    stroke(r, g, b);
    for(let i = 0;i<50;i++){
      line(x1(t+i),y1(t+i),x2(t+i),y2(t+i));
    }
  pop();
  t+= 0.5; 
  
  fill(30,80,200);
  ellipse(buttonPosition.x, buttonPosition.y, buttonSize, buttonSize);
}

function x1(t){
  return sin(t/10)*300+sin(t/20)*325+sin(t/30)*325;
}

function y1(t){
  return cos(t/10)*250+cos(t/20)*275+cos(t/30)*275;
}

function x2(t){
  return sin(t/15)*300+sin(t/25)*325+sin(t/35)*325;
}

function y2(t){
  return cos(t/15)*250+cos(t/25)*275+cos(t/35)*275;
}

let isLooping = true;

function mousePressed(){
   background(r,g,b);
   r = random(255);
   g = random(255);
   b = random(255);
  
  let mousePosition = createVector(mouseX, mouseY);
  
  let clickDistance = dist(mousePosition.x, mousePosition.y, buttonPosition.x, buttonPosition.y);
  console.log(clickDistance);
  
  if(clickDistance < buttonSize/2) {
    if(isLooping) {
      noLoop();
      isLooping = false;
    } else {
      loop();
      isLooping = true;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let capture;
let fallingLetters = [];
let w = 640;
let h = 480;
let threshold = 80;


function setup() {
  let canvas = createCanvas(w, h);
  canvas.parent("#sketch-parent");
  // set up video
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();
    
  let sourceText = "Hello"
  
  let x = 0;
  let xSpacing = 10;
   
  let reversed = "";
  for(let char of sourceText) {
   reversed = char + reversed;
    /* your code */
  }
    return reversed;
  /* Challenge: Rewrite the loop above using a traditional for-loop structure?) Make sure to comment it out so it doesn't interfere with your code */
}


function draw() {
  background(255);
  
  push();
    translate(w, 0);
    scale(-1, 1); 
    image(capture, 0, 0, w, h);
  // flip the video so that it is mirrored correctly
    /* translate(?, ?); */
    /* scale(?, ?); */
  pop();
  
  capture.loadPixels(); 
  

  for(let fl of fallingLetters) { 
    while(fl.y != 0  &&  fl.char == (255)) 
  {fl.vel.y *= -1;}
      
    if(fl.y > height) {fl.y = 0;} 
  else{ fl.vel.y *= -1;}
  }
  
  /*
   for(loop through the fallingLetters array) {
   
     while(current FallingLetter not at top of Screen && FallingLetter encounters a dark part of the webcam feed) {
    
        // move the FallingLetter up
    
      }
    
    
     if(the FallingLetter has reached the bottom of the screen) {
    
        // reset the FallingLetter to the top of the screen
    
     } else {
    
      move the FallingLetter down
      
     }
   }
   */
    
  // based on the calculations we did above, draw the fallingLetters to
  // the screen at their new y-positions
  for(let fl of fallingLetters) {
    fill(0);
    text(fl.char, fl.x, fl.y);
  }  
}

function getBrightness(_pixels, _i) {
  
  let currFallingLetter = fallingLetters[_i];
  let index = ((w-currFallingLetter.x) + (currFallingLetter.y*w))*4;
  
  let r = _pixels[index];
  let g = _pixels[index+1];
  let b = _pixels[index+2];
  
  let colorTotal = r + g + b;
  let brightness = colorTotal/3;
  
  return brightness;
}

class FallingLetter {
  
  constructor(_char, _x, _y) {
    
    this.char = _char;
    this.x = _x;
    this.y = _y;
  }  
}
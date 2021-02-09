let w = 320;
let h = 240;
let capture;

function setup() {
  let c = createCanvas(w, h);
  c.oarent("#sketch-parent")
  pixelDensity(1);
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();
 
}

function draw() {
  background(255,150,150);
  let stepSize = 10;
  capture.loadPixels();
 // let threshold = 127;
  let threshold = map(mouseX, 0, width, 0, 255, true);
 
  
  for(let y = 0; y < capture.height; y+=stepSize) {
    for(let x = 0; x < capture.width; x+=stepSize) {
      const index = (x + y * capture.width) * 4;
      
     let r = capture.pixels[index];
     let g = capture.pixels[index+1];
     let b = capture.pixels[index+2];
     let c = color(r, g, b);
      
     let totalBrightness = r + g + b;
      
     let brightness = totalBrightness/3;
      
      let size = map(brightness, 0, 255, stepSize*3, stepSize);
      
      //fill(255, 200, 255);
      fill(c);
   noStroke();
      push();
      translate(capture.width, 0);
      scale(-1, 1);
      ellipse(x, y, size, size);
      pop();

      
      // ELLIPSES
      // push();
      //   translate(width, 0);
      //   scale(-1, 1);
      //   translate(stepSize/2, stepSize/2);
      //   ellipse(x, y, size, size);
      // pop();
      
    //if (brightness < threshold){
    //capture.pixels[index] = 0;
    // capture.pixels[index+1] = 0; 
    // capture.pixels[index+2] = 0;
    //  } else {
    // capture.pixels[index] = 255;
    // capture.pixels[index+1] = 255; 
    //capture.pixels[index+2] = 255;   
    // }
    }
  }
  capture.updatePixels();
  
  //image(capture, 0, 0);  
  
}
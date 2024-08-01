
//your parameter variables go here!
let rect_width  = 40;
let rect_height = 40;
let distort = 1; // 1 is normal, less is upside down, more is bigger
let eyeSize = 40; // scale size // 40 is good, dont change it
let pupilColor = [0, 0, 0]; // happy face black
let irisColor = [247, 223, 0]; // changes with time
let eyeOutlineColor = [56, 232, 185]; // happy face aqua
let facepaintColor = [171, 116, 53]; // happy face makeup light brown
let eyebrowColor = [171, 116, 53]; // mint
let midPupilColor = [0, 0, 0]; // angry face center eye
let midIrisColor = [56, 232, 185]; // angry face cyan
let midEyeOutlineColor = [56, 232, 185]; // angry face cyan
let midFacepaintColor = [171, 116, 53]; // angry face makeup light brown

// IF statement
//change iris color with time (in happy face only)
let date = new Date();
let min = date.getMinutes();
// if the current minutes is an even number, the eyes turn aqua
if (min % 2 == 0) {
  irisColor = [158, 255, 218]; // aqua
// if not, osea odd numbers: turn pink
} else {
  irisColor = [56, 232, 185]; // pink
}

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); // this is for removing the guide lines

  //Grid settings
  noStroke();
  pWallpaper.grid_settings.cell_width  = 500; // 500 default
  pWallpaper.grid_settings.cell_height = 200; // 200 defaut
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(120, 71, 44); // dark borwn

}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  push ();
  scale(distort);


  //////////// EYE PAINT 
  // left eye paint
  noStroke();
  fill (facepaintColor); 
  quad (54, 62, 90, 50, 54, 38, 18, 50);

  noStroke();
  fill (facepaintColor);
  quad (85, 62, 121, 50, 85, 38, 48, 50);

  // right eye paint
  noStroke();
  fill (facepaintColor);
  quad (197, 62, 233, 50, 197, 38, 161, 50);

  noStroke();
  fill (facepaintColor);  
  quad (164, 62, 200, 50, 164, 38, 128, 50);

  // shadow circles
  noStroke();
  fill (71, 71, 71); // dark red
  ellipse(178, 48, eyeSize, eyeSize); // right eye // draws a circle 45 pixels accross at location 100 pixels accross and 100 pixels down 
  ellipse(68, 48, eyeSize, eyeSize); // left eye

  // eye outline
  noStroke();
  fill (eyeOutlineColor); // red = (214, 0, 0)
  ellipse(180, 50, eyeSize, eyeSize); // right circle // draws a circle 45 pixels accross at location 100 pixels accross and 100 pixels down 
  ellipse(70, 50, eyeSize, eyeSize); // left circle

  ///////////// HAPPY FACE EYE BLOOD
  strokeWeight(5);
  stroke (eyeOutlineColor); // red = (214, 0, 0)
  
        // right eye
        line (190, 85, 190, 40);
        line (175, 89, 175, 45);
        line (185, 80, 185, 40);

        // left eye // ellipse (70, 50, 40, 40)
        line (60, 85, 60, 40);
        line (75, 89, 75, 45);
        line (70, 80, 70, 40);


  // iris
  noStroke();
  fill (irisColor); // yellow = (247, 223, 0)
  ellipse(180, 50, 28, 28); // right circle
  ellipse(70, 50, 29, 29); // left circle

      // arc 1 right circle
        strokeWeight(3);
        noFill();
        stroke(255, 255, 255);
        arc(180, 50, 28, 28, 45, 90); //x and y set the location of the arc's center. w and h set the arc's width and height

      // arc 3 left circle //up?
      noFill();
      stroke(255, 255, 255);
      arc(70, 50, 30, 30, 45, 90);

  // pupil
  noStroke();
  fill (pupilColor); // black = (31, 31, 31)
  ellipse(180, 50, 20, 20); // right circle
  ellipse(70, 50, 20, 20); // left circle

  /////////////////////////// MOUTH AND LIPS
  // parameters for the mouth and lips
  // location
  let leftX = 130;
  let leftY = 115;
  
  let rightX = 110;
  let rightY = 180;

  let rotateL = 15;
  let rotateR = -15; 

  // size
  let lipW = 120;
  let lipH = 50;
  let mouthW = 90;
  let mouthH = 30;

  ////////////////////// HAPPY FACE LIPS
  push();
  noStroke();
  fill (171, 116, 53); // light brown
  rotate(rotateL);
  ellipse(leftX, leftY, lipW, lipH);
  pop()

  push();
  noStroke();
  fill (171, 116, 53); // light brown
  rotate(rotateR);
  ellipse(rightX, rightY, lipW, lipH);
  pop()

  ////////////////////// HAPPY FACE MOUTH
  push();
  noStroke();
  fill (62, 247, 195); // mint
  rotate(rotateL);
  ellipse(leftX, leftY, mouthW, mouthH);
  pop();

  push();
  noStroke();
  fill (62, 247, 195); // mint
  rotate(rotateR);
  ellipse(rightX, rightY, mouthW, mouthH);
  pop();

  ///////////// HAPPY FACE EYEBROWS
  // parameters for the eyebrows
  // location
  let leftEBX = 53;
  let leftEBY = 35;
  
  let rightEBX = 190;
  let rightEBY = -30;

  let eyeBRotateR = 15;
  let eyeBrotateL = -15; 

  // size happy eyebrows
  let eyebrowW = 50; //happy eyebrows
  let eyebrowH = 20; // happy eyebrows

  // left eyebrow
  push();
  noStroke();
  fill (eyebrowColor); // light pink
  rotate(eyeBrotateL);
  ellipse(leftEBX, leftEBY, eyebrowW, eyebrowH);
  pop()

  // right eyebrow
  push();
  noStroke();
  fill (eyebrowColor); // light pink
  rotate(eyeBRotateR);
  ellipse(rightEBX, rightEBY, eyebrowW, eyebrowH);
  pop()

  pop (); ////////////////////////////////////////////////////////////
 
  let x = 252; // distance of second face // 252 is normal with 

  push();
  scale(distort);

  ///////// FACES EYE PAINT QUADS
  // left eye paint
  noStroke();
  fill (midFacepaintColor); 
  quad (54+x, 62, 90+x, 50, 54+x, 38, 18+x, 50);

  noStroke();
  fill (midFacepaintColor);
  quad (85+x, 62, 121+x, 50, 85+x, 38, 48+x, 50);

  // 150, 50
  // right eye paint
  noStroke();
  fill (midFacepaintColor);
  quad (197+x, 62, 233+x, 50, 197+x, 38, 161+x, 50);

  // x +30
  noStroke();
  fill (midFacepaintColor);  
  quad (164+x, 62, 200+x, 50, 164+x, 38, 128+x, 50);

  //circles shadow
  noStroke();
  fill (71, 71, 71); // dark red
  ellipse(178+x, 48, eyeSize, eyeSize); // right eye // draws a circle 45 pixels accross at location 100 pixels accross and 100 pixels down 
  ellipse(68+x, 48, eyeSize, eyeSize); // left eye

  // eye outline
  noStroke();
  fill (midEyeOutlineColor); // red = (214, 0, 0)
  ellipse(180+x, 50, eyeSize, eyeSize); // right circle // draws a circle 45 pixels accross at location 100 pixels accross and 100 pixels down 
  ellipse(70+x, 50, eyeSize, eyeSize); // left circle

  //////////// EYE BLOOD
  strokeWeight(5);
  stroke (midEyeOutlineColor); // red = (214, 0, 0)

        // right eye
        line (190+x, 85, 190+x, 40);
        line (175+x, 89, 175+x, 45);
        line (185+x, 80, 185+x, 40);

        // left eye // ellipse (70, 50, 40, 40)
        line (60+x, 85, 60+x, 40);
        line (75+x, 89, 75+x, 45);
        line (70+x, 80, 70+x, 40);


  // iris
  noStroke();
  fill (midIrisColor); 
  ellipse(180+x, 50, 28, 28); // right circle
  ellipse(70+x, 50, 29, 29); // left circle

      // arc 1 right circle
        strokeWeight(3);
        noFill();
        stroke(255, 255, 255);
        arc(180+x, 50, 28, 28, 45, 90); //x and y set the location of the arc's center. w and h set the arc's width and height

      // arc 3 left circle
      noFill();
      stroke(255, 255, 255);
      arc(70+x, 50, 30, 30, 45, 90);

  // pupil
  noStroke();
  fill (midPupilColor); // black = (31, 31, 31)
  ellipse(180+x, 50, 20, 20); // right circle
  ellipse(70+x, 50, 20, 20); // left circle

  /////// ANGRY FACE MOUTH AND LIPS
  // lips
  noStroke();
  fill (171, 116, 53); // light brown
  ellipse(122+x, 150, 170, 70); 

  //mouth
  noStroke();
  fill (62, 247, 195); // mint
  ellipse(122+x, 150, 150, 50);

  //////////////// ANGRY FACE EYEBROWS
  // parameters for the eyebrows
  // location
  let leftEBX2 = 65+x;
  let leftEBY2 = -65;
  
  let rightEBX2 = 210+x;
  let rightEBY2 = -63;

  let eyeBRotateR2 = -15;
  let eyeBrotateL2 = 15; 

  // size
  let eyebrowW2 = 50;
  let eyebrowH2 = 20;

  // left eyebrow
  push();
  noStroke();
  fill (eyebrowColor); // blue
  rotate(eyeBrotateL2);
  ellipse(leftEBX2, leftEBY2, eyebrowW2, eyebrowH2);
  pop()

  // right eyebrow
  push();
  noStroke();
  fill (eyebrowColor); // blue
  rotate(eyeBRotateR2);
  ellipse(rightEBX2, rightEBY2, eyebrowW2, eyebrowH2);
  pop()

  ///////////////// HAPPY FACE NOSE 
  // nose
  noStroke();
  fill (235, 52, 198); // purple pink
  ellipse(125, 70, 70, 60);
  
  //highlight
  noStroke();
  fill (255, 255, 255); // white
  ellipse(125, 50, 20, 10);

  ////////////// ANGRY FACE NOSE 
  //base color
  noStroke();
  fill (235, 52, 101); // purple jelly
  ellipse(375, 70, 70, 60);

  //highlight
  noStroke();
  fill (255, 255, 255); // white
  ellipse(375, 50, 20, 10);
  
//sprinkles
fill (52, 217, 143); // mint 
ellipse(380, 30, 10, 5);
  ellipse(500, 70, 10, 5);
  ellipse(700, 90, 10, 5);
  ellipse(400, 200, 10, 5);
  ellipse(100, 20, 10, 5);
  ellipse(50, 10, 10, 5);
  ellipse(800, 100, 10, 5);
  ellipse(800, 100, 10, 5);
  ellipse(300, 1000, 10, 5);

pop();

}



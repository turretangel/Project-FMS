// BY MEGAN BEAUDOIN


//***VARIABLES:***

//GUI
let sky,trees, cloud;
let cloudx1 = -104, cloudx2 = -68, cloudx3 = -32, cloudx4 = 4, cloudx5 = 40, cloudx6 = 76, cloudx7 = 112, cloudx8 = 148, cloudx9 = 184, cloudx10 = 220, cloudx11 = 256, cloudx12 = 292, cloudx13 = 328,cloudx14 = 364, cloudx15 = 400;
let homeplant = 0;
let cloudflip = 0;


//TRACING
let tracebg;
let donecloud = 0;
let mousexcloud, mouseycloud;
let triangle1 = 0, triangle2 = 0, triangle3 = 0;
let tri1x1, tri2x1, tri3x1, tri1y1, tri2y1, tri3y1, tri1x2, tri2x2, tri3x2, tri1y2, tri2y2, tri3y2;
let square1 = 0, square2 = 0, square3 = 0, square4 = 0;
let square1x1, square1y1, square2x1, square2y1, square3x1, square3y1, square4x1, square4y1, square1x2, square1y2, square2x2, square2y2, square3x2, square3y2, square4x2, square4y2;
let circle1 = 0, circle2 = 0, circle3 = 0, circle4 = 0, circle5 = 0, circle6 = 0, circle7 = 0, circle8 = 0;
let cir1x1, cir1x2, cir1y1, cir1y2, cir2x1, cir2x2, cir2y1, cir2y2, cir3x1, cir3x2, cir3y1, cir3y2, cir4x1, cir4x2, cir4y1, cir4y2, cir5x1, cir5x2, cir5y1, cir5y2, cir6x1, cir6x2, cir6y1, cir6y2, cir7x1, cir7x2, cir7y1, cir7y2, cir8x1, cir8x2, cir8y1, cir8y2;
let mousedrag = 0;
let drawLine = 1;
let cloudtime = 0;
let shape='triangle';
let newGame = 2;


//GARDENING
let gardenbg;
let dirt1,dirt2,dirt3,dirt4,dirt5,dirt6;
let seed,sprouticon,watercan,curvearrow;
let seedx=185, seedy=70, canx = 240, cany = 35;
let plantphase = 1, plantDragged = 0, directionRight = 0, coveredleft = 0, coveredright = 0;
let deltax, deltay, canangle = 0;
let doneplant = 0;
let planttime=0;


//SLICING
let slicebg;
let doneplate = 0;
let phase = 1;
let sushicount = 0;
let orangecount = 0, platetime = 0;
let knifeDragged = 0, startX, startY;
let drawnRight = 1;
let targetRadius = 25, targetX = 0, targetY = 0, trueRadius = 25;


//OTHER
let whichclick = 'none';
let homebttn, startbttn;
let arrowleft, arrowright;
let tutorial = 0;

//MUSIC AND SOUNDS
let songGUI, songtracing, songslicing, songgarden;
let sfxGarden, sfxTracing;
let songgardenIsPlaying = 1;
let songtracingIsPlaying = 1;
let songslicingIsPlaying = 1;

function preload() {
  
  //GUI
  sky = loadImage('Pictures/sky.png');
  backgroundGUI = loadImage('Pictures/backgroundfile.png');
  trees = loadImage('Pictures/trees.png');
  cloud = loadImage('Pictures/cloud2.png');
  homeplant = loadImage('Pictures/homeplant.png');
  homeplateempty = loadImage('Pictures/plateGUIempty.png');
  homeplatefull = loadImage('Pictures/plateGUIfull.png');
  logo = loadImage('Pictures/logo.png');
  credits = loadImage('Pictures/creditsbuttonsmall.png');
  creditsbg = loadImage('Pictures/credits.png');
  homesmall = loadImage('Pictures/homebuttonsmall.png');
  kites = loadImage('Pictures/kites.gif');
  picnic = loadImage('Pictures/picnic.png');
  grass = loadImage('Pictures/grass.png');
  
  //TRACING
  tracebg = loadImage('Pictures/tracingbackground.png');
  cloudicon = loadImage('Pictures/cloudicon.png');
  squarecloud = loadImage('Pictures/squarecloud.png');
  circlecloud = loadImage('Pictures/circlecloud.png');
  trianglecloud = loadImage('Pictures/trianglecloud.png');
  trianglewin = loadImage('Pictures/trianglecloudshape.png');
  circlewin = loadImage('Pictures/circlecloudshape.png');
  squarewin = loadImage('Pictures/squarecloudshape.png');
  
  //GARDENING
  gardenbg = loadImage('Pictures/gardenbackground.png');
  dirt1 = loadImage('Pictures/garden1dirt.png');
  dirt2 = loadImage('Pictures/garden2left.png');
  dirt3 = loadImage('Pictures/garden3right.png');
  dirt4 = loadImage('Pictures/garden4covered.png');
  dirt5 = loadImage('Pictures/garden5watered.png');
  dirt6 = loadImage('Pictures/garden6plant.png');
  seed = loadImage('Pictures/seed.png');
  sprouticon = loadImage('Pictures/sprouticon.png');
  watercan = loadImage('Pictures/wateringcan.png');
  curvearrow = loadImage('Pictures/curvearrow.png');
  waterdrops = loadImage('Pictures/waterdrops.gif');
  
  //SLICING
  slicebg = loadImage('Pictures/slicingbackground.png');
  plateicon = loadImage('Pictures/plateicon.png');
  sushiroll = loadImage('Pictures/sushiroll.png');
  sushiroll2 = loadImage('Pictures/sushiroll2.png');
  sushiroll3 = loadImage('Pictures/sushiroll3.png');
  sushiroll4 = loadImage('Pictures/sushiroll4.png');
  sushipiece = loadImage('Pictures/sushipiece.png');
  orange1 = loadImage('Pictures/orange1.png');
  orange2 = loadImage('Pictures/orange2.png');
  orange3 = loadImage('Pictures/orange3.png');
  orange4 = loadImage('Pictures/orange4.png');
  plate = loadImage('Pictures/plate.png');
  orangeslice = loadImage('Pictures/orangeslice.png');
  knife = loadImage('Pictures/knife.png');
  
  //OTHER
  homebttn = loadImage('Pictures/homebutton.png');
  startbttn = loadImage('Pictures/startbutton.png');
  arrowleft = loadImage('Pictures/arrowleft.png');
  arrowright = loadImage('Pictures/arrowright.png');
  
  //BACKGROUND MUSIC
  songGUI = createAudio('Music/tracingbackground.mp3');
  songtracing = createAudio('Music/homebackground.mp3');
  songslicing = createAudio('Music/slicingbackground.mp3');
  songgarden = createAudio('Music/gardenbackground.mp3');
  sfxGarden = createAudio('Music/woodblock2.mp3');
  sfxTracing = createAudio('Music/chime2.mp3');
  sfxSlicing = createAudio('Music/harp.mp3');
  
}

function setup() {
  createCanvas(400,400);
  songtracing.volume(0.1);
  songGUI.volume(0.1);
  songslicing.volume(0.2);
  songgarden.volume(0.1);
  sfxGarden.volume(0.1);
  whichclick = 'none';
}

function draw() {
  
  //GUI
  if (whichclick == 'none') {
    
    songGUI.play();
    image(sky, 0, 0);
    //clouds!
    switch (donecloud){
      
      case 0:
        image(cloud, cloudx1, 80);
        image(cloud, cloudx4, 80);
        image(cloud, cloudx7, 80);
        image(cloud, cloudx10, 80);
        image(cloud, cloudx13, 80);
        image(cloud, cloudx2, 60);
        image(cloud, cloudx5, 60);
        image(cloud, cloudx8, 60);
        image(cloud, cloudx11, 60);
        image(cloud, cloudx14, 60);
        image(cloud, cloudx3, 40);
        image(cloud, cloudx6, 40);
        image(cloud, cloudx9, 40);
        image(cloud, cloudx12, 40);
        image(cloud, cloudx15, 40);
        image(cloud, cloudx1, 20);
        image(cloud, cloudx4, 20);
        image(cloud, cloudx7, 20);
        image(cloud, cloudx10, 20);
        image(cloud, cloudx13, 20);
        image(cloud, cloudx2, 0);
        image(cloud, cloudx5, 0);
        image(cloud, cloudx8, 0);
        image(cloud, cloudx11, 0);
        image(cloud, cloudx14, 0);
        image(cloud, cloudx3, -20);
        image(cloud, cloudx6, -20);
        image(cloud, cloudx9, -20);
        image(cloud, cloudx12, -20);
        image(cloud, cloudx15, -20);
        image(cloud, cloudx1, -40);
        image(cloud, cloudx4, -40);
        image(cloud, cloudx7, -40);
        image(cloud, cloudx10, -40);
        image(cloud, cloudx13, -40);
        break;
      case 1:
        image(cloud, cloudx1, 80);
        image(cloud, cloudx4, 80);
        image(cloud, cloudx7, 80);
        image(cloud, cloudx10, 80);
        image(cloud, cloudx13, 80);
        image(cloud, cloudx5, 60);
        image(cloud, cloudx8, 60);
        image(cloud, cloudx11, 60);
        image(cloud, cloudx14, 60);
        image(cloud, cloudx3, 40);
        image(cloud, cloudx6, 40);
        image(cloud, cloudx9, 40);
        image(cloud, cloudx12, 40);
        image(cloud, cloudx15, 40);
        image(cloud, cloudx1, 20);
        image(cloud, cloudx4, 20);
        image(cloud, cloudx7, 20);
        image(cloud, cloudx13, 20);
        image(cloud, cloudx2, 0);
        image(cloud, cloudx5, 0);
        image(cloud, cloudx8, 0);
        image(cloud, cloudx11, 0);
        image(cloud, cloudx14, 0);
        image(cloud, cloudx6, -20);
        image(cloud, cloudx9, -20);
        image(cloud, cloudx12, -20);
        image(cloud, cloudx15, -20);
        image(cloud, cloudx1, -40);
        image(cloud, cloudx4, -40);
        image(cloud, cloudx7, -40);
        image(cloud, cloudx10, -40);
        image(cloud, cloudx13, -40);
        break;
      case 2:
        image(cloud, cloudx1, 80);
        image(cloud, cloudx4, 80);
        image(cloud, cloudx7, 80);
        image(cloud, cloudx10, 80);
        image(cloud, cloudx5, 60);
        image(cloud, cloudx8, 60);
        image(cloud, cloudx11, 60);
        image(cloud, cloudx14, 60);
        image(cloud, cloudx3, 40);
        image(cloud, cloudx6, 40);
        image(cloud, cloudx9, 40);
        image(cloud, cloudx12, 40);
        image(cloud, cloudx1, 20);
        image(cloud, cloudx4, 20);
        image(cloud, cloudx7, 20);
        image(cloud, cloudx13, 20);
        image(cloud, cloudx2, 0);
        image(cloud, cloudx8, 0);
        image(cloud, cloudx11, 0);
        image(cloud, cloudx14, 0);
        image(cloud, cloudx3, -20);
        image(cloud, cloudx9, -20);
        image(cloud, cloudx12, -20);
        image(cloud, cloudx1, -40);
        image(cloud, cloudx4, -40);
        image(cloud, cloudx7, -40);
        image(cloud, cloudx13, -40);
        break;
      case 3:
        image(cloud, cloudx1, 80);
        image(cloud, cloudx4, 80);
        image(cloud, cloudx10, 80);
        image(cloud, cloudx5, 60);
        image(cloud, cloudx8, 60);
        image(cloud, cloudx11, 60);
        image(cloud, cloudx14, 60);
        image(cloud, cloudx3, 40);
        image(cloud, cloudx6, 40);
        image(cloud, cloudx12, 40);
        image(cloud, cloudx1, 20);
        image(cloud, cloudx4, 20);
        image(cloud, cloudx7, 20);
        image(cloud, cloudx13, 20);
        image(cloud, cloudx2, 0);
        image(cloud, cloudx8, 0);
        image(cloud, cloudx11, 0);
        image(cloud, cloudx14, 0);
        image(cloud, cloudx3, -20);
        image(cloud, cloudx9, -20);
        image(cloud, cloudx12, -20);
        image(cloud, cloudx1, -40);
        image(cloud, cloudx4, -40);
        image(cloud, cloudx7, -40);
        image(cloud, cloudx13, -40);
        break;
      case 4:
        image(cloud, cloudx1, 80);
        image(cloud, cloudx4, 80);
        image(cloud, cloudx10, 80);
        image(cloud, cloudx5, 60);
        image(cloud, cloudx8, 60);
        image(cloud, cloudx14, 60);
        image(cloud, cloudx3, 40);
        image(cloud, cloudx6, 40);
        image(cloud, cloudx12, 40);
        image(cloud, cloudx1, 20);
        image(cloud, cloudx4, 20);
        image(cloud, cloudx13, 20);
        image(cloud, cloudx2, 0);
        image(cloud, cloudx8, 0);
        image(cloud, cloudx14, 0);
        image(cloud, cloudx3, -20);
        image(cloud, cloudx9, -20);
        image(cloud, cloudx12, -20);
        image(cloud, cloudx1, -40);
        image(cloud, cloudx7, -40);
        image(cloud, cloudx13, -40);
        break;
      case 5:
        image(cloud, cloudx4, 80);
        image(cloud, cloudx10, 80);
        image(cloud, cloudx5, 60);
        image(cloud, cloudx8, 60);
        image(cloud, cloudx14, 60);
        image(cloud, cloudx3, 40);
        image(cloud, cloudx12, 40);
        image(cloud, cloudx4, 20);
        image(cloud, cloudx13, 20);
        image(cloud, cloudx2, 0);
        image(cloud, cloudx8, 0);
        image(cloud, cloudx14, 0);
        image(cloud, cloudx9, -20);
        image(cloud, cloudx12, -20);
        image(cloud, cloudx1, -40);
        image(cloud, cloudx7, -40);
        image(cloud, cloudx13, -40);
        break;
      case 6:
        image(cloud, cloudx4, 80);
        image(cloud, cloudx10, 80);
        image(cloud, cloudx5, 60);
        image(cloud, cloudx3, 40);
        image(cloud, cloudx12, 40);
        image(cloud, cloudx4, 20);
        image(cloud, cloudx13, 20);
        image(cloud, cloudx2, 0);
        image(cloud, cloudx14, 0);
        image(cloud, cloudx9, -20);
        image(cloud, cloudx7, -40);
        image(cloud, cloudx13, -40);
        break;
      case 7:
        image(cloud, cloudx4, 80);
        image(cloud, cloudx10, 80);
        image(cloud, cloudx5, 60);
        image(cloud, cloudx12, 40);
        image(cloud, cloudx4, 20);
        image(cloud, cloudx14, 0);
        image(cloud, cloudx9, -20);
        image(cloud, cloudx13, -40);
        break;
      case 8:
        image(cloud, cloudx10, 80);
        image(cloud, cloudx5, 60);
        image(cloud, cloudx12, 40);
        image(cloud, cloudx14, 0);
        image(cloud, cloudx9, -20);
        break;
      case 9:
        image(cloud, cloudx5, 60);
        image(cloud, cloudx14, 0);
        break;
      
      default:
        image(kites,0,0);
    }

    if (cloudflip != 2) {
      cloudflip++;
    }
    else {
      cloudflip = 0;
      cloudx1 = cloudMove(cloudx1);
      cloudx2 = cloudMove(cloudx2);
      cloudx3 = cloudMove(cloudx3);
      cloudx4 = cloudMove(cloudx4);
      cloudx5 = cloudMove(cloudx5);
      cloudx6 = cloudMove(cloudx6);
      cloudx7 = cloudMove(cloudx7);
      cloudx8 = cloudMove(cloudx8);
      cloudx9 = cloudMove(cloudx9);
      cloudx10 = cloudMove(cloudx10);
      cloudx11 = cloudMove(cloudx11);
      cloudx12 = cloudMove(cloudx12);
      cloudx13 = cloudMove(cloudx13);
      cloudx14 = cloudMove(cloudx14);
      cloudx15 = cloudMove(cloudx15);
    }
    
    image(backgroundGUI,0,0);
    image(trees, 0, 0);
    
    
    
    
    
     
    //plants!
    if (doneplant > 0) {
      image(homeplant,336,302);
      if (doneplant > 1) {
        image(homeplant,378,302);
        if (doneplant > 2) {
          image(homeplant,330,320);
          if (doneplant > 3) {
            image(homeplant,377,320);
            if (doneplant > 4) {
              image(homeplant,324,339);
              if (doneplant > 5) {
                image(homeplant,374,340);
                if (doneplant > 6) {
                  image(homeplant,318,359);
                  if (doneplant > 7) {
                    image(homeplant,373,360);
                    if (doneplant > 8) {
                      image(homeplant,310,379);
                      if (doneplant > 9) {
                        image(homeplant,370,380);
                        image(grass,0,0);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    
    //plates!
      if (doneplate > 0) {
      image(homeplateempty,240,295);
      if (doneplate > 1) {
        image(homeplateempty,240,292);
        if (doneplate > 2) {
          image(homeplateempty,240,289);
          if (doneplate > 3) {
            image(homeplateempty,240,286);
            if (doneplate > 4) {
              image(homeplateempty,240,283);
              if (doneplate > 5) {
                image(homeplateempty,260,305);
                if (doneplate > 6) {
                  image(homeplateempty,260,302);
                  if (doneplate > 7) {
                    image(homeplateempty,260,299);
                    if (doneplate > 8) {
                      image(homeplateempty,260,296);
                      if (doneplate > 9) {
                        image(homeplateempty,260,293);
                        image(picnic,0,0);
                      }
                      else{
                        image(homeplatefull,175,246);
                      }
                    }
                    else{
                      image(homeplatefull,215,247);
                      image(homeplatefull,175,246);
                    }
                  }
                  else{
                    image(homeplatefull,255,247);
                    image(homeplatefull,215,247);
                    image(homeplatefull,175,246);
                  }
                }
                else{
                  image(homeplatefull,155,258);
                  image(homeplatefull,255,247);
                  image(homeplatefull,215,247);
                  image(homeplatefull,175,246);
                }
              }
              else{
                image(homeplatefull,200,259);
                image(homeplatefull,155,258);
                image(homeplatefull,255,247);
                image(homeplatefull,215,247);
                image(homeplatefull,175,246);
              }
            }
            else{
              image(homeplatefull,245,259);
              image(homeplatefull,200,259);
              image(homeplatefull,155,258);
              image(homeplatefull,255,247);
              image(homeplatefull,215,247);
              image(homeplatefull,175,246);
            }
          }
          else{
            image(homeplatefull,135,272);
            image(homeplatefull,245,259);
            image(homeplatefull,200,259);
            image(homeplatefull,155,258);
            image(homeplatefull,255,247);
            image(homeplatefull,215,247);
            image(homeplatefull,175,246);
          }
        }
        else{
          image(homeplatefull,185,272);
          image(homeplatefull,135,272);
          image(homeplatefull,245,259);
          image(homeplatefull,200,259);
          image(homeplatefull,155,258);
          image(homeplatefull,255,247);
          image(homeplatefull,215,247);
          image(homeplatefull,175,246);
        }
      }
      else{
        image(homeplatefull,235,272);
        image(homeplatefull,185,272);
        image(homeplatefull,135,272);
        image(homeplatefull,245,259);
        image(homeplatefull,200,259);
        image(homeplatefull,155,258);
        image(homeplatefull,255,247);
        image(homeplatefull,215,247);
        image(homeplatefull,175,246);
      }
    }
    else{
      image(homeplatefull,240,295);
      image(homeplatefull,235,272);
      image(homeplatefull,185,272);
      image(homeplatefull,135,272);
      image(homeplatefull,245,259);
      image(homeplatefull,200,259);
      image(homeplatefull,155,258);
      image(homeplatefull,255,247);
      image(homeplatefull,215,247);
      image(homeplatefull,175,246);
    }

    
  textSize(14);
  noStroke();
  text(' Would you like to \ntrace cloud shapes?',235,60)
  text('           Would \n       you like \nto garden?',180,360)
  text('  Would you like \nto prepare lunch?',130,300)  
  image(logo, 30,30);
  image(credits, 25,350);
  }//end of GUI
  
  
  
  //TRACING
  if (whichclick == 'cloud') {
    songtracing.play();
    image(tracebg, 0, 0);
    if (tutorial == 1){
      textSize(20);
      text("This is the Tracing Game!\n      Trace the shapes \n  indicated on the clouds \n        to score points!",100,100)
      image(homebttn, 25,300);
      image(startbttn, 225,300);
    }
    
    else if (tutorial == 0){
      cloudSound();
      strokeWeight(10);
      if (shape=='triangle') {
        image(trianglecloud, 0, 0);

        if (triangle1 == 1) { 
          stroke(0,100,200);
          line (tri1x1,tri1y1,tri1x2,tri1y2); 
        }
        else { 
          stroke(208,229,241);
          line (90,270,200,125);
          textSize(12);
          noStroke();
          fill(0,0,0);
          text('1',70,270);
          text('2',180,125);
          }

        if (triangle2 == 1) {
          stroke(0,100,200);
          line (tri2x1,tri2y1,tri2x2,tri2y2);
        }
        else {
          stroke(208,229,241);
          line (200,125,300,270);
          if (triangle1 == 1) {
            textSize(12);
            noStroke();
            fill(0,0,0);
            text('1',210,125);
            text('2',305,265);
          }
        }
        if (triangle3 == 1) {
          stroke(0,100,200);
          line (tri3x1,tri3y1,tri3x2,tri3y2);
        }
        else {
          stroke(208,229,241);
          line (300,270,90,270);
          if (triangle2 == 1 && triangle1 == 1) {
            noStroke();
            textSize(12);
            fill(0,0,0);
            text('1',300,290);
            text('2',90,290);
          }
        }
        if (drawLine == 0) { 
          if((triangle1 == 0 || triangle2 == 0 || triangle3 == 0) && newGame == 0) {
            textSize(30);
            noStroke();
            fill(0,0,0);
            text ('Not quite, try again!', 80, 50);
          }
        }
          if (triangle1==1 && triangle2 == 1 && triangle3 == 1) { 
            image(trianglecloud,0,0);
            image(trianglewin,0,0);
            textSize(30);
            noStroke();
            fill(0,0,0);
            text ('Great job!', 80, 50);
            if (cloudtime > 100) {
              donecloud++;
              shape = 'square'; 
              triangle1 = 0;
              triangle2 = 0;
              triangle3 = 0;
              tri1x1 = tri2x1 = tri3x1 = tri1y1 = tri2y1 = tri3y1 = tri1x2 = tri2x2 = tri3x2 = tri1y2 = tri2y2 = tri3y2 = 0;
              cloudtime = 0;
            }
            else {
              cloudtime++;
            }
            
          }
        }
      else if (shape == 'square') {
        image(squarecloud,0,0);
        if (square1 == 1) {
          stroke(0,100,200);
          line (square1x1,square1y1,square1x2,square1y2); 
        }
        else {
          stroke(208,229,241);
          line (125,265,125,100);
          textSize(12);
          noStroke();
          fill(0,0,0);
          text('1',110,265);
          text('2',110,100);
        }
        if (square2 == 1) {
          stroke(0,100,200);
          line (square2x1,square2y1,square2x2,square2y2); 
        }
        else {
          stroke(208,229,241);
          line (125,100,290,100);
          if (square1 == 1) {
            textSize(12);
            noStroke();
            fill(0,0,0);
            text('1',125,85);
            text('2',290,85);
          }
          
        }
        if (square3 == 1) {
          stroke(0,100,200);
          line (square3x1,square3y1,square3x2,square3y2); 
        }
        else {
          stroke(208,229,241);
          line (290,100,290,265);
          if (square1 == 1 && square2 == 1) {
            textSize(12);
            noStroke();
            fill(0,0,0);
            text('1',305,100);
            text('2',305,265);
          }
        }
        if (square4 == 1) {
          stroke(0,100,200);
          line (square4x1,square4y1,square4x2,square4y2); 
        }
        else {
          stroke(208,229,241);
          line (290,265,125,265);
          if (square1 == 1 && square2 == 1 && square3 == 1) {
            textSize(12);
            noStroke();
            fill(0,0,0);
            text('1',290,280);
            text('2',125,280);
          }
        }
        if (drawLine == 0) { 
          if((square1 == 0 || square2 == 0 || square3 == 0 || square4 == 0) && newGame == 0) {
            textSize(30);
            noStroke();
            fill(0,0,0);
            text ('Not quite, try again!', 80, 50);
          }
        }
        if (square1==1 && square2 == 1 && square3 == 1 && square4 == 1) { 
            image(squarecloud,0,0);
            image(squarewin,0,0);
            textSize(30);
            noStroke();
            fill(0,0,0);
            text ('Great job!', 80, 50);
            if (cloudtime > 100) {
              donecloud++;
              shape = 'circle'; 
              square1 = square2 = square3 = square4 = 0;
              square1x1 = square2x1 = square3x1 = square4x1 = square1y1 = square2y1 = square3y1 = square4y1 = square1x2 = square2x2 = square3x2 = square4x2 = square1y2 = square2y2 = square3y2 = square4y2 = 0;
              cloudtime = 0;
            }
            else {
              cloudtime++;
            }
        }
      }
      
      else if (shape == 'circle') {
        image(circlecloud,0,0);
        if (circle1 == 1) {
          stroke(0,100,200);
          line (cir1x1,cir1y1,cir1x2,cir1y2); 
        }
        else {
          stroke(208,229,241);
          line (110,240,110,170);
          textSize(12);
          noStroke();
          fill(0,0,0);
          text('1',95,240);
          text('2',95,170);
        }
        if (circle2 == 1) {
          stroke(0,100,200);
          line (cir2x1,cir2y1,cir2x2,cir2y2); 
        }
        else {
          stroke(208,229,241);
          line (110,170,160,120);
          if (circle1 == 1) {
            textSize(12);
            noStroke();
            fill(0,0,0);
            text('1',100,160);
            text('2',150,110);
          }
        }
        if (circle3 == 1) {
          stroke(0,100,200);
          line (cir3x1,cir3y1,cir3x2,cir3y2); 
        }
        else {
          stroke(208,229,241);
          line (160,120,230,120);
          if (circle1 == 1 && circle2 == 1) {
            textSize(12);
            noStroke();
            fill(0,0,0);
            text('1',155,105);
            text('2',230,105);
          }
        }
        if (circle4 == 1) {
          stroke(0,100,200);
          line (cir4x1,cir4y1,cir4x2,cir4y2); 
        }
        else {
          stroke(208,229,241);
          line (230,120,280,170);
          if (circle1 == 1 && circle2 == 1 && circle3 == 1) {
            textSize(12);
            noStroke();
            fill(0,0,0);
            text('1',240,110);
            text('2',290,160);
          }
        }
        if (circle5 == 1) {
          stroke(0,100,200);
          line (cir5x1,cir5y1,cir5x2,cir5y2); 
        }
        else {
          stroke(208,229,241);
          line (280,170,280,240);
          if (circle1 == 1 && circle2 == 1 && circle3 == 1 && circle4 == 1) {
            textSize(12);
            noStroke();
            fill(0,0,0);
            text('1',295,170);
            text('2',295,240);
          }
        }
        if (circle6 == 1) {
          stroke(0,100,200);
          line (cir6x1,cir6y1,cir6x2,cir6y2); 
        }
        else {
          stroke(208,229,241);
          line (280,240,230,290);
          if (circle1 == 1 && circle2 == 1 && circle3 == 1 && circle4 == 1 && circle5 == 1) {
            textSize(12);
            noStroke();
            fill(0,0,0);
            text('1',265,230);
            text('2',215,280);
          }
        }
        if (circle7 == 1) {
          stroke(0,100,200);
          line (cir7x1,cir7y1,cir7x2,cir7y2); 
        }
        else {
          stroke(208,229,241);
          line (230,290,160,290);
          if (circle1 == 1 && circle2 == 1 && circle3 == 1 && circle4 == 1 && circle5 == 1 && circle6 == 1) {
            textSize(12);
            noStroke();
            fill(0,0,0);
            text('1',230,275);
            text('2',160,275);
          }
        }
        if (circle8 == 1) {
          stroke(0,100,200);
          line (cir8x1,cir8y1,cir8x2,cir8y2); 
        }
        else {
          stroke(208,229,241);
          line (160,290,110,240);
          if (circle1 == 1 && circle2 == 1 && circle3 == 1 && circle4 == 1 && circle5 == 1 && circle6 == 1 && circle7 == 1) {
            textSize(12);
            noStroke();
            fill(0,0,0);
            text('1',170,280);
            text('2',125,230);
          }
        }
        if (drawLine == 0) { 
          if((circle1 == 0 || circle2 == 0 || circle3 == 0 || circle4 == 0 || circle5 == 0 || circle6 == 0 || circle7 == 0 || circle8 == 0) && newGame == 0) {
            textSize(30);
            noStroke();
            fill(0,0,0);
            text ('Not quite, try again!', 80, 50);
          }
        }
        if (circle1==1 && circle2 == 1 && circle3 == 1 && circle4 == 1 && circle5==1 && circle6 == 1 && circle7 == 1 && circle8 == 1) {
          image(tracebg, 0, 0);
          image(circlecloud,0,0);
          image(circlewin,0,0);
          textSize(30);
          noStroke();
          fill(0,0,0);
          text ('Great job!', 80, 50);
          if (cloudtime > 100) {
            donecloud++;
            shape = 'triangle'; 
            circle1 = circle2 = circle3 = circle4 = circle5 = circle6 = circle7 = circle8 = 0;
            cir1x1 = cir1x2 = cir1y1 = cir1y2 = cir2x1 = cir2x2 = cir2y1 = cir2y2 = cir3x1 = cir3x2 = cir3y1 = cir3y2 = cir4x1 = cir4x2 = cir4y1 = cir4y2 = cir5x1 = cir5x2 = cir5y1 = cir5y2 = cir6x1 = cir6x2 = cir6y1 = cir6y2 = cir7x1 = cir7x2 = cir7y1 = cir7y2 = cir8x1 = cir8x2 = cir8y1 = cir8y2 = 0;
            cloudtime = 0;
            }
            else {
              cloudtime++;
            }
      
        }
      }
      if (mousedrag == 1) {  
        strokeWeight(10);
        stroke(0,100,200);
        line(mousexcloud, mouseycloud, mouseX, mouseY);
      }
      textSize(30);
      noStroke();
      fill(0,0,0);
      image(cloudicon,15,350);
      text ('x',80,380)
      text (donecloud,100,380)
      image(homebttn, 225,300);
      
      
    
      }
  }
  //GARDENING
  if (whichclick == 'garden') {
    fill('white');
    songgarden.play();
    image(gardenbg, 0, 0);
    if (tutorial == 1){
      textSize(20);
      text("This is the Gardening Game!  \n    Follow the instructions \n       to plant seeds and \n     help the garden grow!",80,100)
      image(homebttn, 25,300);
      image(startbttn, 225,300);
    }
    
    else if (tutorial == 0){
      gardenSound();
      textSize(25);
      text('Game Starts!',130,200);
      if (plantphase == 1){
        image(dirt1,0,0);
        image(seed,seedx,seedy);
        text ('Plant the seed in the hole!',50,60);
        if (seedx < 205 && seedx > 170 && seedy < 200 && seedy > 175) {
          seedx = 185;
          seedy = 187;
          plantphase = 2;
        }
      }
      else if (plantphase == 2){
        image (dirt1,0,0);
        image (seed, seedx,seedy);
        text ('Cover the seed with dirt!\nClick and drag to follow\nthe arrows in a straight line!',50,30);
        image (arrowleft,240,130);
        image (arrowright,0,130);
        
        if (directionRight == 1 && deltax > 150) {
          if (deltay > 25 || deltay < -25) {
            text('try to keep steady!', 25,300)
          }
          else {
            coveredleft = 1;
          }
        }
        if (directionRight == 2 && deltax < -150) {
          if (deltay > 25 || deltay < -25) {
            text('try to keep steady!', 25,300)
          }
          else {
            coveredright = 1;
          }
        }
        if (coveredleft != 0 || coveredright != 0) {
          plantphase = 3;
        }
      }
      else if (plantphase == 3){
        if (coveredleft == 1) {
          image(dirt2,0,0); //left
          image(arrowleft,240,130);
        }
        else {
          image(dirt3,0,0); //right
          image(arrowright,0,130);
        }
        text ('Cover the seed with dirt!\nClick and drag to follow\nthe arrows in a straight line!',50,30);
        if (directionRight == 1 && deltax > 150) {
          if (deltay > 25 || deltay < -25) {
            text('try to keep steady!', 25,300)
          }
          else {
            coveredleft = 1;
          }
        }
        if (directionRight == 2 && deltax < -150) {
          if (deltay > 25 || deltay < -25) {
            text('try to keep steady!', 25,300)
          }
          else {
            coveredright = 1;
          }
        }
        if (coveredleft == coveredright) {
          plantphase = 4;
          coveredleft = 0;
          coveredright = 0;
          plantDragged = 0;
          deltax=0;
          deltay=0;
        }
      }
      else if (plantphase == 4){

        image(dirt4,0,0);
        text ('Water the plant!',20,30);
        image(curvearrow,150,50);
        angleMode(DEGREES);
        rotateImage(watercan,canx,cany,canangle);
        if ((deltax < -90 || deltax == -90) && deltay > 0) {
          image(waterdrops,canx + 35,152,20,deltay/2);
        }  
        if(deltax<-90 && deltay>90 && mouseX < 300 && mouseX > 100 && mouseY < 275 && mouseY > 175) {
          plantphase=5;
        }
        
      }
      else if (plantphase == 5){
        image(dirt5,0,0);
        planttime++;
        
        if (planttime > 30) {
          plantphase = 6;
          planttime = 0;
          doneplant++;
        }
        
      }
      else {
        image(dirt6,0,0);
        text('Great job!',80,60);
        planttime++;
        if (planttime > 150) {
          plantphase = 1;
          planttime = 0;
          
          seedx = 185;
          seedy = 70;
        }
        
      }
      
      image(homebttn, 225,300);
      image(sprouticon, 10,340)
      noStroke();
      text ('x',50,380)
      text (doneplant,70,380)
    }
  }
  
  //SLICING
  if (whichclick == 'blanket') {
    songslicing.play();
    image(slicebg, 0, 0);
    if (tutorial == 1){
      drawnRight = 2;
      sushicount = 0;
      orangecount = 0;
      phase = 1;
      textSize(20);
      text("This is the Slicing Game!\n    Follow instructions \n      to prepare lunch \n       to score points!",100,100)
      image(homebttn, 25,300);
      image(startbttn, 225,300);
    }
    
    else if (tutorial == 0){
      plateSound();
      image(plate,50,5);
      if (phase == 1) {
        if (drawnRight == 0){
            text ('Not quite, try again!', 120, 100);
          }
        
        if (sushicount == 0) {
          text('Slice the sushi roll down along the line!',40,80);
          image(sushiroll,80,125);
          strokeWeight(7);
          stroke(2,30,1);
          line(150,115,150,205);
          noStroke();
        }
        if (sushicount == 1) {
          text('Slice the sushi roll down along the line!',40,80);
          image (sushiroll2, 120, 125);
          image (sushipiece, 60, 125);
          strokeWeight(7);
          stroke(2,30,1);
          line(190,115,190,205);
          noStroke();
        }
        if (sushicount == 2) {
          text('Slice the sushi roll down along the line!',40,80);
          image (sushiroll3, 160, 125);
          image (sushipiece, 110, 125);
          image (sushipiece, 60, 125);
          strokeWeight(7);
          stroke(2,30,1);
          line(230,115,230,205);
          noStroke();
        }
        if (sushicount ==3) {
          text('Slice the sushi roll down along the line!',40,80);
          image (sushiroll4, 210, 125);
          image (sushipiece, 160, 125);
          image (sushipiece, 110, 125);
          image (sushipiece, 60, 125);
          strokeWeight(7);
          stroke(2,30,1);
          line(280,115,280,205);
          noStroke();
        }
        if (sushicount == 5) {
          text('Great job!',150,80);
          image (sushipiece, 260, 125);
          image (sushipiece, 210, 125);
          image (sushipiece, 160, 125);
          image (sushipiece, 110, 125);
          image (sushipiece, 60, 125);
          platetime++
          if (platetime > 100) {
            phase = 2;
            platetime = 0;
          }
          
        }
        if (knifeDragged == 1) {
          strokeWeight(6);
          stroke(0,100,200);
          stroke(98,216,17);
          line(mouseX,mouseY,startX,startY);
          noStroke();
        }
      }
      if (phase == 2) {
          if (orangecount == 0) {
            text('Peel the orange upwards along the line!',30,60);
            image (orange1, 125,75);
            strokeWeight(7);
            stroke(149,56,1);
            line(160,75,160,225);
            noStroke();
          }
        if (orangecount == 1) {
            text('Peel the orange upwards along the line!',30,60);
            image (orange2, 125,75);
            strokeWeight(7);
            stroke(149,56,1);
            line(200,75,200,225);
            noStroke();
          }
        if (orangecount == 2) {
            text('Peel the orange upwards along the line!',30,60);
            image (orange3, 125,75);
            strokeWeight(7);
            stroke(149,56,1);
            line(240,75,240,225);
            noStroke();
          }
        if (orangecount == 3) {
            text('Great job!',150,60);
            image (orange4, 125,75);
            noStroke();
            platetime++
            if (platetime > 100) {
              phase = 3;
              platetime = 0;
              trueRadius = 25;
            }
          }
        if (drawnRight == 0){
            text ('Not quite, try again!', 120, 80);
          }
        if (knifeDragged == 1) {
          strokeWeight(6);
          stroke(0,100,200);
          stroke(254,129,83);
          line(mouseX,mouseY,startX,startY);
          noStroke();
        }
        }
      if (phase == 3) {
        
        if (sushicount != 0) {
          targetRadius = 25;
          switch (sushicount) {
              
            case 5:
              targetX = 195;
              targetY = 180;
              break;
            case 4:
              targetX = 120;
              targetY = 175;
              image(sushipiece,160,150); //top center
              break;
            case 3:
              targetX = 260;
              targetY = 190;
              image(sushipiece,160,150); //top center
              image(sushipiece,85,145); //top left
              break;
            case 2:
              targetX = 215;
              targetY = 230;
              image(sushipiece,160,150); //top center
              image(sushipiece,85,145); //top left
              image(sushipiece,225,160); //far right
              break;
            case 1:
              targetX = 150;
              targetY = 215;
              image(sushipiece,160,150); //top center
              image(sushipiece,85,145); //top left
              image(sushipiece,225,160); //far right
              image(sushipiece,180,200); //bottom center
              break;
          }
          if (platetime < (2 * targetRadius)) {
            
            platetime++;
            strokeWeight(7);
            stroke(2,30,1);
            noFill();
            circle(targetX, targetY, trueRadius);
            noStroke();
            fill(0,0,0);
            if ((platetime % 2) == 0) {
              trueRadius--;
            }
          }
          else {
            platetime = 0;
            trueRadius = targetRadius;
          }
        }
        else if (orangeslice != 0) {
          targetRadius = 30;
          
          
          switch (orangecount) {
            case 3:
              targetX = 245;
              targetY = 120;
              break;
            case 2:
              targetX = 155;
              targetY = 140;
              angleMode(DEGREES);
              rotateImage(orangeslice,200,90,35); 
              break;
            case 1:
              targetX = 175;
              targetY = 90;
              angleMode(DEGREES);
              rotateImage(orangeslice,200,90,35); 
              rotateImage(orangeslice,100,110,-35); 
              break;
          }
          image(sushipiece,160,150); //top center
          image(sushipiece,85,145); //top left
          image(sushipiece,225,160); //far right
          image(sushipiece,180,200); //bottom center
          image(sushipiece,115,185); //bottom left
          if (platetime < (2 * targetRadius)) {
            
            platetime++;
            strokeWeight(7);
            stroke(149,56,1);
            noFill();
            circle(targetX, targetY, trueRadius);
            noStroke();
            fill(0,0,0);
            if ((platetime % 2) == 0) {
              trueRadius--;
            }
          }
          else {
            platetime = 0;
            trueRadius = targetRadius;
          }
        }
        if (orangecount == 0 && sushicount == 0) {
          phase = 4;
          platetime = 0;
          doneplate++;
        }
        if (drawnRight == 0){
            text ('Not quite, try again!', 110, 90);
          }
        text ('Click on the indicated points\n         to set the plate!', 80, 40);
      }
      if (phase == 4) {
        image(plate,50,5);
        angleMode(DEGREES);
        rotateImage(orangeslice,200,90,35); 
        rotateImage(orangeslice,100,110,-35); 
        image(orangeslice,140,60);
        
        image(sushipiece,160,150); //top center
        image(sushipiece,85,145); //top left
        image(sushipiece,225,160); //far right
        image(sushipiece,180,200); //bottom center
        image(sushipiece,115,185); //bottom left
        text('Great job!',150,50);
        platetime++
          if (platetime > 130) {
            phase = 1;
            platetime = 0;
          }
        
      }
      
      image(plateicon, 10, 340);
      text ('x', 65, 360);
      text (doneplate, 85, 360);
      image(homebttn, 225,300);
      
     
    }
  }
  
  
  /*//x&y coordinates TEMPORARY 
  //textSize(28);
  noStroke();
  text(mouseX, 10, 30);
  text(mouseY, 10, 50);*/
  
  
  if (whichclick == 'credits') {
    
    image(creditsbg,0,0);
    image(homesmall, 25,350);
  }
}

function gardenSound() {
  if (plantphase == 6) {
    songgarden.volume(0.04);
    if (songgardenIsPlaying == 1) {
      sfxGarden.play();
    }
    songgardenIsPlaying = 0;
  }
  if (plantphase == 1 && songgardenIsPlaying != 1) {
    songgarden.volume(0.1);
    songgardenIsPlaying = 1;
  }
}

function plateSound() {
  if (phase == 4) {
    songslicing.volume(0.04);
    if (songslicingIsPlaying == 1) {
      sfxSlicing.volume(0.5);
      sfxSlicing.play();
    }
    songslicingIsPlaying = 0;
  }
  if (phase == 1 && songslicingIsPlaying != 1) {
    songslicing.volume(0.2);
    songslicingIsPlaying = 1;
  }
}

function cloudSound() {
  if ((triangle1==1 && triangle2 == 1 && triangle3 == 1) || (square1==1 && square2 == 1 && square3 == 1 && square4 == 1) || (circle1==1 && circle2 == 1 && circle3 == 1 && circle4 == 1 && circle5==1 && circle6 == 1 && circle7 == 1 && circle8 == 1)) {
    songtracing.volume(0.04);
    if (songtracingIsPlaying == 1) {
      sfxTracing.play();
    }
    songtracingIsPlaying = 0;
  }
  if ((triangle1==1 && triangle2 == 1 && triangle3 == 1) || (square1==1 && square2 == 1 && square3 == 1 && square4 == 1) || (circle1==1 && circle2 == 1 && circle3 == 1 && circle4 == 1 && circle5==1 && circle6 == 1 && circle7 == 1 && circle8 == 1) && songtracingIsPlaying != 1) {
    songtracing.volume(0.1);
    songtracingIsPlaying = 1;
  }
}

function mouseClicked(){
  //GUI
  if (whichclick == 'none') {
    //blanket
    if (mouseX < 283 && mouseX > 120 && mouseY < 286 && mouseY > 248) {
      whichclick = 'blanket';
      tutorial = 1;
      songGUI.stop();
    }
    //garden
    else if (mouseX > 280 && mouseY > 300 && mouseX < 400 && mouseY < 400) {
      whichclick = 'garden';
      tutorial = 1;
      fill('white');
      songGUI.stop();
    }
    //cloud
    else if (mouseX < 355 && mouseX > 230 && mouseY < 85 && mouseY > 28) {
      whichclick = 'cloud';
      tutorial = 1;
      songGUI.stop();
    }
    //credits
    else if (mouseX < 100 && mouseX > 30 && mouseY < 390 && mouseY > 350) {
      whichclick = 'credits';
    }
    else {
      whichclick = 'none';
    }
  }
  
  //CREDITS
  else if (whichclick == 'credits') {
    if (mouseX < 100 && mouseX > 30 && mouseY < 390 && mouseY > 350) {
      whichclick = 'none';
    }
  }
  //TRACING
  else if (whichclick == 'cloud') {
    //tutorial screen
    if (tutorial == 1) {
      //home button
      if (mouseX < 170 && mouseX > 30 && mouseY < 365 && mouseY > 300) {
        whichclick = 'none';
        tutorial = 1;
        songtracing.stop();
      }
      //start button
      else if (mouseX < 370 && mouseX > 230 && mouseY < 365 && mouseY > 300) {
        tutorial = 0;
      }
    }
    //game
    else{
      if (mouseX < 370 && mouseX > 230 && mouseY < 365 && mouseY > 300) {
        whichclick = 'none';
        songtracing.stop();
        triangle1 = triangle2 = triangle3 = 0;
        tri1x1 = tri2x1 = tri3x1 = tri1y1 = tri2y1 = tri3y1 = tri1x2 = tri2x2 = tri3x2 = tri1y2 = tri2y2 = tri3y2 = 0;
        square1 = square2 = square3 = square4 = 0;
        square1x1 = square2x1 = square3x1 = square4x1 = square1y1 = square2y1 = square3y1 = square4y1 = square1x2 = square2x2 = square3x2 = square4x2 = square1y2 = square2y2 = square3y2 = square4y2 = 0;
        newGame = 2;
        
      }
    }
  }
  
  //GARDENING
  else if (whichclick == 'garden') {
    //tutorial screen
    if (tutorial == 1) {
      //home button
      if (mouseX < 170 && mouseX > 30 && mouseY < 365 && mouseY > 300) {
        seedx = 185;
        seedy = 70;
        coveredleft = 0;
        coveredright = 0;
        plantphase = 1;
        whichclick = 'none';
        tutorial = 1;
        fill('black');
        songgarden.stop();
      }
      //start button
      else if (mouseX < 370 && mouseX > 230 && mouseY < 365 && mouseY > 300) {
        tutorial = 0;
      }
    }
    
    //game
    else{
      if (mouseX < 370 && mouseX > 230 && mouseY < 365 && mouseY > 300) {
        seedx = 185;
        seedy = 70;
        coveredleft = 0;
        coveredright = 0;
        plantphase = 1;
        whichclick = 'none';
        fill('black');
        songgarden.stop();
      }
    }
    
  }
  
  //SLICING
  else if (whichclick == 'blanket') {
    //tutorial screen
    if (tutorial == 1) {
      //home button
      if (mouseX < 170 && mouseX > 30 && mouseY < 365 && mouseY > 300) {
        whichclick = 'none';
        songslicing.stop();
        tutorial = 1;
      }
      //start button
      else if (mouseX < 370 && mouseX > 230 && mouseY < 365 && mouseY > 300) {
        tutorial = 0;
      }
    }
    //game
    else{
      if (phase == 3) {
        if (sushicount > 0) {
          switch (sushicount) {
            case 5:
              if (mouseX > 170 && mouseX < 220 && mouseY > 155 && mouseY < 205) {
                sushicount--;
                drawnRight = 1;
              }
              else {
                drawnRight = 0;
              }
              break;
            case 4:
              if (mouseX > 90 && mouseX < 145 && mouseY > 150 && mouseY < 200) {
                sushicount--;
                drawnRight = 1;
              }
              else {
                drawnRight = 0;
              }
              break;
            case 3:
              if (mouseX > 235 && mouseX < 285 && mouseY > 165 && mouseY < 215) {
                sushicount--;
                drawnRight = 1;
              }
              else {
                drawnRight = 0;
              }
              break;
            case 2:
              if (mouseX > 190 && mouseX < 240 && mouseY > 205 && mouseY < 255) {
                sushicount--;
                drawnRight = 1;
              }
              else {
                drawnRight = 0;
              }
              break;
            case 1:
              if (mouseX > 125 && mouseX < 175 && mouseY > 190 && mouseY < 240) {
                sushicount--;
                drawnRight = 1;
              }
              else {
                drawnRight = 0;
              }
              break;
          }
        }
        else {
          switch (orangecount) {
            case 3:
              if (mouseX > 215 && mouseX < 275 && mouseY > 90 && mouseY < 150) {
                orangecount--;
                drawnRight = 1;
              }
              else {
                drawnRight = 0;
              }
              break;
            case 2:
              if (mouseX > 125 && mouseX < 185 && mouseY > 110 && mouseY < 170) {
                orangecount--;
                drawnRight = 1;
              }
              else {
                drawnRight = 0;
              }
              break;
            case 1:
              if (mouseX > 145 && mouseX < 205 && mouseY > 60 && mouseY < 120) {
                orangecount = 0;
                drawnRight = 1;
              }
              else {
                drawnRight = 0;
              }
              break;
          }
        }
      }
      if (mouseX < 370 && mouseX > 230 && mouseY < 365 && mouseY > 300) {
        whichclick = 'none';
        songslicing.stop();
        
      }
    }
    
  }
}
  
function mousePressed() {
  //GARDENING
  if (whichclick == 'garden') {
    if (plantphase == 1){
      if(mouseX < (seedx + 25) && mouseX > seedx && mouseY < (seedy + 45) && mouseY > seedy) {
        plantDragged = 1;
      }
    }
    if (plantphase == 2 || plantphase == 3){
      if (mouseX < 200 && mouseX > 0 && mouseY < 300 && mouseY > 30){
        plantDragged = 1;
        directionRight = 1;
      }
      else if (mouseX < 400 && mouseX > 200 && mouseY < 300 && mouseY > 30) {
        plantDragged = 1;
        directionRight = 2;
      }
    }
    if (plantphase==4) {
      if (mouseX < (canx+140) && mouseX > canx && mouseY < (cany + 90) && mouseY > cany) {
        plantDragged = 1;
        canx += 35;
      }
    }
  }
  //TRACING
  if(whichclick == 'cloud') {
    
    mousexcloud = mouseX; 
    mouseycloud = mouseY;
    mousedrag = 1;
    if (tutorial == 0 && newGame != 0) {
      newGame--;
    }
  }
  if (whichclick == 'blanket') {
    if (phase == 1 || phase == 2) {
      startX = mouseX;
      startY = mouseY;
      knifeDragged = 1;
      drawnRight = 1;
    }
  }
}
function mouseDragged() {
  // GARDENING
  if (whichclick == 'garden') {
    
    if (plantphase == 1 && plantDragged == 1) {
      seedx = seedx + movedX;
      seedy = seedy + movedY;
    }
    if (plantphase == 2 || plantphase == 3 && plantDragged == 1) {
      deltax += movedX;
      deltay += movedY;
    }
    else if (plantphase == 4 && plantDragged == 1) {
      canx = canx + movedX;
      
      if (deltax > -90 && deltax < 0) {
        canangle = (-deltax);
      }
      else if (deltax > 0 || deltax == 0) {
        canangle = 0;
      }
      else {
        canangle = 90;
      }
      deltax += movedX;
      deltay += movedY;
      
    }
  }  
}
function mouseReleased() {
  // GARDENING
  if (whichclick == 'garden') {
    deltax = 0;
    deltay = 0;
    directionRight = 0;
    plantDragged = 0;
    canx = 240;
    canangle = 0;
  }
  
  //TRACING
  if (whichclick == 'cloud') {
    line(mousexcloud, mouseycloud, mouseX, mouseY);
    if (shape == 'triangle') {
      if ((mousexcloud < 100 && mousexcloud > 80) && (mouseycloud < 280 && mouseycloud >260) && (mouseX < 210 && mouseX >190) && (mouseY < 135 && mouseY >115)) { 
        triangle1 = 1;
        tri1x1 = mousexcloud;
        tri1y1 = mouseycloud;
        tri1x2 = mouseX;
        tri1y2 = mouseY;
        drawLine = 1;
      }
      else if ((mousexcloud < 210 && mousexcloud > 190) && (mouseycloud < 135 && mouseycloud >115) && (mouseX < 310 && mouseX >290) && (mouseY < 280 && mouseY >260)) { 
        triangle2 = 1;
        tri2x1 = mousexcloud;
        tri2y1 = mouseycloud;
        tri2x2 = mouseX;
        tri2y2 = mouseY;
        drawLine = 1;
      }
      else if ((mousexcloud < 310 && mousexcloud > 290) && (mouseycloud < 280 && mouseycloud >260) && (mouseX < 100 && mouseX >80) && (mouseY < 280 && mouseY >260)) { 
        triangle3 = 1;
        tri3x1 = mousexcloud;
        tri3y1 = mouseycloud;
        tri3x2 = mouseX;
        tri3y2 = mouseY;
        drawLine = 1;
      }
      else {
        drawLine = 0; 
      }
    }

    if (shape == 'square') {
      if ((mousexcloud < 135 && mousexcloud > 115) && (mouseycloud < 275 && mouseycloud >255) && (mouseX < 135 && mouseX >115) && (mouseY < 110 && mouseY >90)) { 
        square1 = 1;
        square1x1 = mousexcloud;
        square1y1 = mouseycloud;
        square1x2 = mouseX;
        square1y2 = mouseY;
        drawLine = 1;
      }
      else if ((mousexcloud < 135 && mousexcloud > 115) && (mouseycloud < 110 && mouseycloud >90) && (mouseX < 300 && mouseX >280) && (mouseY < 110 && mouseY >90)) { 
        square2 = 1;
        square2x1 = mousexcloud;
        square2y1 = mouseycloud;
        square2x2 = mouseX;
        square2y2 = mouseY;
        drawLine = 1;
      }
      else if ((mousexcloud < 300 && mousexcloud > 280) && (mouseycloud < 110 && mouseycloud >90) && (mouseX < 300 && mouseX >280) && (mouseY < 275 && mouseY >255)) { 
        square3 = 1;
        square3x1 = mousexcloud;
        square3y1 = mouseycloud;
        square3x2 = mouseX;
        square3y2 = mouseY;
        drawLine = 1;
      }
        else if ((mousexcloud < 300 && mousexcloud > 280) && (mouseycloud < 275 && mouseycloud >255) && (mouseX < 135 && mouseX >115) && (mouseY < 275 && mouseY >255)) { 
        square4 = 1;
        square4x1 = mousexcloud;
        square4y1 = mouseycloud;
        square4x2 = mouseX;
        square4y2 = mouseY;
        drawLine = 1;
      }
      else {
        drawLine = 0; 
      }
    }
    if (shape == 'circle') {
      if ((mousexcloud < 120 && mousexcloud > 100) && (mouseycloud < 250 && mouseycloud > 230) && (mouseX < 120 && mouseX >100) && (mouseY < 180 && mouseY > 160)) { 
        circle1 = 1;
        cir1x1 = mousexcloud;
        cir1y1 = mouseycloud;
        cir1x2 = mouseX;
        cir1y2 = mouseY;
        drawLine = 1;
      }
      else if ((mousexcloud < 120 && mousexcloud > 100) && (mouseycloud < 180 && mouseycloud > 160) && (mouseX < 170 && mouseX >150) && (mouseY < 130 && mouseY >110)) { 
        circle2 = 1;
        cir2x1 = mousexcloud;
        cir2y1 = mouseycloud;
        cir2x2 = mouseX;
        cir2y2 = mouseY;
        drawLine = 1;
      }
      else if ((mousexcloud < 170 && mousexcloud > 150) && (mouseycloud < 130 && mouseycloud >110) && (mouseX < 240 && mouseX >220) && (mouseY < 130 && mouseY >110)) { 
        circle3 = 1;
        cir3x1 = mousexcloud;
        cir3y1 = mouseycloud;
        cir3x2 = mouseX;
        cir3y2 = mouseY;
        drawLine = 1;
      }
        else if ((mousexcloud < 240 && mousexcloud > 220) && (mouseycloud < 130 && mouseycloud >110) && (mouseX < 290 && mouseX >270) && (mouseY < 180 && mouseY >160)) { 
        circle4 = 1;
        cir4x1 = mousexcloud;
        cir4y1 = mouseycloud;
        cir4x2 = mouseX;
        cir4y2 = mouseY;
        drawLine = 1;
      }
      else if ((mousexcloud < 290 && mousexcloud > 270) && (mouseycloud < 180 && mouseycloud > 160) && (mouseX < 290 && mouseX >270) && (mouseY < 250 && mouseY >230)) { 
        circle5 = 1;
        cir5x1 = mousexcloud;
        cir5y1 = mouseycloud;
        cir5x2 = mouseX;
        cir5y2 = mouseY;
        drawLine = 1;
      }
      else if ((mousexcloud < 290 && mousexcloud > 270) && (mouseycloud < 250 && mouseycloud >230) && (mouseX < 240 && mouseX >220) && (mouseY < 300 && mouseY >280)) { 
        circle6 = 1;
        cir6x1 = mousexcloud;
        cir6y1 = mouseycloud;
        cir6x2 = mouseX;
        cir6y2 = mouseY;
        drawLine = 1;
      }
      else if ((mousexcloud < 240 && mousexcloud > 220) && (mouseycloud < 300 && mouseycloud >280) && (mouseX < 170 && mouseX >150) && (mouseY < 300 && mouseY >280)) { 
        circle7 = 1;
        cir7x1 = mousexcloud;
        cir7y1 = mouseycloud;
        cir7x2 = mouseX;
        cir7y2 = mouseY;
        drawLine = 1;
      }
      else if ((mousexcloud < 170 && mousexcloud > 150) && (mouseycloud < 300 && mouseycloud >280) && (mouseX < 120 && mouseX >100) && (mouseY < 250 && mouseY >230)) { 
        circle8 = 1;
        cir8x1 = mousexcloud;
        cir8y1 = mouseycloud;
        cir8x2 = mouseX;
        cir8y2 = mouseY;
        drawLine = 1;
      }
      else {
        drawLine = 0; 
      }
    }
    mousedrag = 0; 
  }
  
  if (whichclick == 'blanket') {
    if (knifeDragged == 1) {
      if (phase == 1) {
        switch (sushicount) {
          case 0:
            if (startX > 140 && startX < 160 && startY > 105 && startY < 125 && mouseX > 140 && mouseX < 160 && mouseY > 195 && mouseY < 215) {
              sushicount++;
            }
            else {
              drawnRight--;
            }
            break;
          case 1:
            if (startX > 180 && startX < 200 && startY > 105 && startY < 125 && mouseX > 180 && mouseX < 200 && mouseY > 195 && mouseY < 215) {
              sushicount++;
            }
            else {
              drawnRight--;
            }
            break;
          case 2:
            if (startX > 220 && startX < 240 && startY > 105 && startY < 125 && mouseX > 220 && mouseX < 240 && mouseY > 195 && mouseY < 215) {
              sushicount++;
            }
            else {
              drawnRight--;
            }
            break;
          case 3:
            if (startX > 270 && startX < 290 && startY > 105 && startY < 125 && mouseX > 270 && mouseX < 290 && mouseY > 195 && mouseY < 215) {
              sushicount++;
              sushicount++;
            }
            else {
              drawnRight--;
            }
            break;
        }
      }
      if (phase == 2) {
        switch(orangecount) {
          case 0:
            if (startX > 150 && startX < 170 && startY > 215 && startY < 235 && mouseX > 150 && mouseX < 170 && mouseY > 65 && mouseY < 85) {
              orangecount++;
            }
            else {
              drawnRight--;
            }
            break;
          case 1:
            if (startX > 190 && startX < 210 && startY > 215 && startY < 235 && mouseX > 190 && mouseX < 210 && mouseY > 65 && mouseY < 85) {
              orangecount++;
            }
            else {
              drawnRight--;
            }
            break;
          case 2:
            if (startX > 230 && startX < 250 && startY > 215 && startY < 235 && mouseX > 230 && mouseX < 250 && mouseY > 65 && mouseY < 85) {
              orangecount++;
            }
            else {
              drawnRight--;
            }
            break;
        }
      }
      startX = 0;
      startY = 0;
      knifeDragged = 0;
    }
    if (phase == 2) {
      
    }
  }
}
function cloudMove(cloudx) {
  if (cloudx < 400) {
    cloudx++;
    return cloudx;
  }
  else {
    cloudx = -140;
    return cloudx;
  }
}

function rotateImage(imageobj, imagex, imagey, angle) {
  let pivotx = imagex + (imageobj.width/2);
  let pivoty = imagey + (imageobj.height/2);
  translate(pivotx, pivoty);
  rotate(-angle);
  image(imageobj,-(imageobj.width/2),-(imageobj.height/2));
  rotate(angle);
  translate(-pivotx, -pivoty);
}
  
  
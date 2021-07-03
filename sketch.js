const accessCode1 = "RW@2021";
const accessCode2 = "KERN@2021";
const accessCode3 = "SPONGE";
const accessCode4 = "BARBER";
const accessCode5 = "TOWEL";
var SchoolI,runS,handle,handleI,locker,lockerI,lock,lockI;
var flag=0;
var codeFlag=0;
var gameState=1;
var hall,hallI,knob,knobI,codeL1,codeL2,input1,button,input2,button2,input3,button3,system,lockS,overS,liveS;
var class1,class1I,class2,class2I,class3,class3I,principle,principleI,ke,keI,stair,stairI,roof,roofI;
var codeKey=0;
var classFlag=0;
var lFlag=0;
var CC=3;
var zflag=0;
var ball,ballI,clap,lifeI,life,doorS;
var lives=3;
function setup() {
  createCanvas(displayWidth,displayHeight-135);
  school=createSprite(displayWidth/2,(displayHeight-135)/2,displayWidth,displayHeight-135);
  school.addImage("s1",SchoolI);
  handle=createSprite((displayWidth/2)+75,(displayHeight/2)+100,40,40);
    handle.addImage("hi",handleI);
    handle.scale=0.01
    handle.visible=false;
    system= new System();
    locker=createSprite(displayWidth/2,(displayHeight-135)/2,displayWidth,displayHeight-135);
    locker.addImage("locker",lockerI);
    locker.scale=1.5;
    locker.visible=false;
    input1=createInput("code1");
      input1.position((displayWidth/2)-225,((displayHeight-135)/2)+175);
      input1.style('background','white')
      input1.hide();
      button=createButton('check');
      button.position((input1.x),(input1.y)+25);
      button.style('background', 'lightgrey');
      button.hide();
      input2=createInput("code2");
      input2.position((displayWidth/2)-225,((displayHeight-135)/2)-175);
      input2.style('background','white')
      input2.hide();
      button2=createButton('check');
      button2.position((input2.x),(input2.y)+25);
      button2.style('background', 'lightgrey');
      button2.hide();
      input3=createInput("code2");
      input3.position((displayWidth/2),((displayHeight-135)/2)+15);
      input3.style('background','white')
      input3.hide();
      button3=createButton('check');
      button3.position((input3.x),(input3.y)+25);
      button3.style('background', 'lightgrey');
      button3.hide();
      input4=createInput("code2");
      input4.position((displayWidth/2),((displayHeight-135)/2)+15);
      input4.style('background','white')
      input4.hide();
      button4=createButton('check');
      button4.position((input3.x),(input3.y)+25);
      button4.style('background', 'lightgrey');
      button4.hide();
      input5=createInput("code2");
      input5.position((displayWidth/2),((displayHeight-200)/2)+15);
      input5.style('background','white')
      input5.hide();
      button5=createButton('check');
      button5.position((input5.x),(input5.y)+25);
      button5.style('background', 'lightgrey');
      button5.hide();
}

function preload(){
  SchoolI=loadImage('Images/school.jpg');
  runS=loadSound('Images/run.mp3');
  handleI=loadImage('Images/handle.png');
  hallI=loadImage('Images/hallway.jpg');
  lockerI=loadImage('Images/lockers.jpg');
  lockI=loadImage('Images/lock.png');
  class1I=loadImage('Images/631.jpg')
  class2I=loadImage('Images/1735.jpg');
  class3I=loadImage('Images/4.jpg');
  class3LI=loadImage('Images/laptop.jpg');
  principleI=loadImage('Images/3049.jpg');
  knobI=loadImage('Images/knob.png');
  keI=loadImage('Images/key.png');
  stairI=loadImage('Images/stair.png');
  roofI=loadImage('Images/roof.jpg');
  ballI=loadImage('Images/ball.png');
  clap=loadSound('Images/clap.mp3');
  lifeI=loadImage('Images/lives.png');
  doorS=loadSound('Images/door.wav');
  lockS=loadSound('Images/lock.mp3');
  liveS=loadSound('Images/live.wav');
  overS=loadSound('Images/over.mp3')
}

function draw() {
  background("black");
  drawSprites();
  if(gameState===1){
  if(keyDown("UP")){
    school.scale=school.scale+0.10;
    school.y=school.y-30;
  } 
  if(school.scale>3){
    school.scale=3;
    school.y=-285
  }
  if(school.scale===3){
    handle.visible=true;
  } 
  if(keyDown("Down")){
    school.scale=school.scale-0.25;
    school.y=school.y+75;
  } 
  if(school.scale<1){
    school.scale=1;
    school.y=(displayHeight-135)/2;
  }
  
  if(mousePressedOver(handle)){
    flag=2;
    
  }
  if(flag===2){
    doorS.play();
    doorS.stop(5)
    handle.destroy();
    school.destroy();
    console.log("handle");
    gameState=2
  }
  fill("black");
    stroke("RED");
    strokeWeight(6)
    textSize(30)
    text("Find the ball on terrace.",(displayWidth/2)-100,(displayHeight-135)/2);
}

if(gameState===2){
  if(lives<0||lives===0){
    gameState=10
    locker.destroy();
    overS.play();
    overS.stop(8);
    life.destroy();
  }
  hall=createSprite(displayWidth/2,(displayHeight-135)/2,displayWidth,displayHeight-135);
  console.log(hall.depth);
  hall.addImage("Hall",hallI);
  hall.scale=2.25;
  knobCheck((displayWidth/2)-475,((displayHeight-135)/2)+125);
  knob.scale=0.15
  if(mousePressedOver(knob)){
    flag=3
    doorS.play();
    doorS.stop(5)
  }
  if(flag===3){
    locker.depth=hall.depth+1
    locker.visible=true;
    hall.visible=false;
    knob.destroy();
    codeL1=createSprite((displayWidth/2)-300,((displayHeight-135)/2)+175,50,50);
    codeL1.addImage("c",lockI);
    codeL1.scale=0.2;
    codeL2=createSprite((displayWidth/2)-300,((displayHeight-135)/2)-175,50,50);
    codeL2.addImage("c",lockI);
    codeL2.scale=0.2;
    textSize(20);
    text("keys :"+ codeKey,displayWidth-100,25);
    if(lives<0||lives===0){
      gameState===10

      life.destroy();
    }
    if(mousePressedOver(codeL1)){
      codeFlag=2
      input1.show();
      button.show();
    }
    if(mousePressedOver(codeL2)){
      codeFlag=3
      input2.show();
      button2.show();
    }
    if(codeFlag===2){
      fill("black")
      text("First name of school@year",(button.x)-50,(button.y)-40);
      button.mousePressed(() =>{
        
        if(system.authenticate(accessCode1,input1.value())){
          input1.hide();
          button.hide();
          console.log("access accepted")
          codeKey=codeKey+1;
          lockS.play();
          lockS.stop(5)
        } else {
          lives=lives-1;
          liveS.play();
        liveS.stop(5);
        }
      });
    }
    if(codeFlag===3){
      fill("black")
      text("Second name of school@year",(button2.x)-50,(button2.y)-40);
      button2.mousePressed(() =>{
        
        if(system.authenticate(accessCode2,input2.value())){
          input2.hide();
          button2.hide();
          console.log("access accepted");
          codeKey=codeKey+2;
          lockS.play();
          lockS.stop(5)
        }else {
          lives=lives-1;
          liveS.play();
        liveS.stop(5);
        }
      });
    }
  }
  if(codeKey===3){
    locker.destroy();
    codeL1.destroy();
    codeL2.destroy();
    gameState=3;
  }
}

if(gameState===3&&codeKey===3){
  hall=createSprite(displayWidth/2,(displayHeight-135)/2,displayWidth,displayHeight-135);
  hall.addImage("Hall",hallI);
  hall.scale=2.25;
  knobCheck((displayWidth/2)-15,((displayHeight-135)/2)+65);
  knob.scale=0.075
  if(mousePressedOver(knob)){
    classFlag=1;
    doorS.play();
    doorS.stop(5)
  }
  if(classFlag===1){
    if(lives<0||lives===0){
      gameState=10
      locker.destroy();
      overS.play();
      overS.stop(8);
      life.destroy();
    }
    class1=createSprite((displayWidth/2),(displayHeight-135)/2,displayWidth,displayHeight-135);
    class1.addImage("class1",class1I);
    class1.scale=0.25;
    class1L=createSprite((displayWidth/2)-550,((displayHeight-135)/2)+50,100,40);
    class1L.visible=false;
    if(mousePressedOver(class1L)){
    lFlag=3;
  }
  if(lFlag===3){
    push()
    fill("white");
    textSize(20);
    text("What is full of holes but still holds water?",(displayWidth/2)-100,(displayHeight-135)/2);
    pop()
    input3.show();
    button3.show();
    button3.mousePressed(() =>{
        
      if(system.authenticate(accessCode3,input3.value())){
        codeFlag=4;
        CC=+1;
        console.log("access accepted")
        lockS.play();
          lockS.stop(5)
      }else {
        lives=lives-1;
        liveS.play();
        liveS.stop(5);
      }
    });
    if(codeFlag===4){
      input3.hide();
      button3.hide();
      gameState=4;
    }
  }
  }
}
if(gameState===4){
  hall=createSprite(displayWidth/2,(displayHeight-135)/2,displayWidth,displayHeight-135);
  hall.addImage("Hall",hallI);
  hall.scale=2.25;
  knobCheck((displayWidth/2)-190,((displayHeight-135)/2)+80);
  knob.scale=0.08;
  if(mousePressedOver(knob)){
    classFlag=2
    doorS.play();
    doorS.stop(5)
  }
  if(classFlag===2){
    if(lives<0||lives===0){
      gameState=10
      locker.destroy();
      overS.play();
      overS.stop(8);
      life.destroy();
    }
    class2=createSprite((displayWidth/2),(displayHeight-135)/2,displayWidth,displayHeight-135);
    class2.addImage("class2",class2I);
    class2.scale=0.3;
    class2L=createSprite((displayWidth/2),((displayHeight-135)/2)+95,40,40);
    class2L.addImage("lap",class3LI);
    class2L.scale=0.05;
    if(mousePressedOver(class2L)){
      lFlag=2
    }
    if(lFlag===2){
    push()
    fill("white");
    textSize(20);
    text("I shave everyday,but my beard stays the same, what am I?",(displayWidth/2)-100,(displayHeight-135)/2);
    pop()
    input4.show();
    button4.show();
    button4.mousePressed(() =>{
        
      if(system.authenticate(accessCode4,input4.value())){
        codeFlag=5;
        CC=+1;
        console.log("access accepted")
        lockS.play();
          lockS.stop(5)
      }else {
        lives=lives-1;
        liveS.play();
        liveS.stop(5);
      }
    });
    if(codeFlag===5){
      input4.hide();
      button4.hide();
      gameState=5;
    }
  }}}
  if(gameState===5){
    if(lives<0||lives===0){
      gameState=10
      locker.destroy();
      overS.play();
      overS.stop(8);
      life.destroy();
    }
    hall=createSprite(displayWidth/2,(displayHeight-135)/2,displayWidth,displayHeight-135);
  hall.addImage("Hall",hallI);
  hall.scale=2.25;
  knobCheck((displayWidth/2)+150,((displayHeight-135)/2)+80);
  knob.scale=0.1;
  if(mousePressedOver(knob)){
    classFlag=3
    console.log("class")
    doorS.play();
    doorS.stop(5)
  }
  if(classFlag===3){
    class3=createSprite((displayWidth/2),((displayHeight-135)/2)+15,displayWidth,displayHeight-135);
    class3.addImage("class3",class3I);
    class3.scale=0.3;
    class3L=createSprite((displayWidth/2)-600,((displayHeight-135)/2)+85,40,40);
    class3L.addImage("lap",class3LI);
    class3L.scale=0.05;
    if(mousePressedOver(class3L)){
     lFlag=1
    }
    if(lFlag===1){
      push()
    fill("BLACK");
    textSize(20);
    text("What gets wet while drying?",(displayWidth/2)-100,(displayHeight-250)/2);
    pop()
    input5.show();
    button5.show();
    button5.mousePressed(() =>{
        
      if(system.authenticate(accessCode5,input5.value())){
        codeFlag=6;
        CC=+1;
        console.log("access accepted")
        lockS.play();
          lockS.stop(5)
      }else {
        lives=lives-1;
        liveS.play();
        liveS.stop(5);
      }
    });
    if(codeFlag===6){
      input5.hide();
      button5.hide();
      gameState=6;
    
  }
    }
  }
}
if(gameState===6){
  hall=createSprite(displayWidth/2,(displayHeight-135)/2,displayWidth,displayHeight-135);
  hall.addImage("Hall",hallI);
  hall.scale=2.25;
  knobCheck((displayWidth/2)+420,((displayHeight-135)/2)+80);
  knob.scale=0.15;
  if(mousePressedOver(knob)){
    classFlag=4
    doorS.play();
    doorS.stop(5)
  }
  if(classFlag===4){
    principle=createSprite((displayWidth/2),((displayHeight-135)/2)+15,displayWidth,displayHeight-135);
    principle.addImage("principle",principleI);
    principle.scale=0.25;
    drawer=createSprite(displayWidth-200,250,150,75);
    drawer.visible=false;
    if(mousePressedOver(drawer)){
      lFlag=4
    }
    if(lFlag===4){
      iDraw=createSprite((displayWidth/2),((displayHeight-135)/2),displayWidth,displayHeight-135);
      iDraw.shapeColor="brown";
      ke=createSprite((displayWidth/2),(displayHeight-135)/2);
      ke.addImage("KEY",keI)
      ke.scale=0.5;
      if(mousePressedOver(ke)){
        gameState=7;
      }
      
    }
  }
}
if(gameState===7){
  hall=createSprite(displayWidth/2,(displayHeight-135)/2,displayWidth,displayHeight-135);
  hall.addImage("Hall",hallI);
  hall.scale=2.25;
  stair=createSprite(displayWidth/2,(displayHeight-135)/2);
  stair.addImage("stair",stairI);
  stair.scale=0.25;
  if(mousePressedOver(stair)){
    classFlag=5;
  }
  if(classFlag===5){
    gameState=8
  }

}
if(gameState===8){
  roof=createSprite(displayWidth/2,(displayHeight-135)/2,displayWidth,displayHeight-135);
  roof.addImage("roof",roofI);
  roof.scale=0.4;
  ball=createSprite(displayWidth/2,(displayHeight/2)+50);
  ball.addImage("ball",ballI);
  ball.scale=0.1;
  knob=createSprite(displayWidth-100,(displayHeight/2)+35,75,20);
  knob.visible=false;
  if(mousePressedOver(ball)){
    classFlag=6
    ball.visible=false;
  }
  if(classFlag===6){
    ball.destroy();
  }
  if(classFlag===6&&mousePressedOver(knob)){
    gameState=9
    clap.play();
    clap.stop(10);
  }
}
if(gameState===9){
  school=createSprite(displayWidth/2,(displayHeight-135)/2,displayWidth,displayHeight-135);
    school.addImage("s1",SchoolI);
    fill("black");
    stroke("RED");
    strokeWeight(6)
    textSize(30)
    text("Y O U  W O N !",(displayWidth/2)-100,(displayHeight-135)/2);
}
if(lives===3){
  for(var i=50;i<200;i+=50){
    life=createSprite(i,50);
    life.addImage("lives",lifeI);
    life.scale=0.1;
    //liv();
  }
}
if(lives===2){
  for(var i=50;i<150;i+=50){
    life=createSprite(i,50);
    life.addImage("lives",lifeI);
    life.scale=0.1;
    //liv();
  }
}
if(lives===1){
  for(var i=50;i<100;i+=50){
    life=createSprite(i,50);
    life.addImage("lives",lifeI);
    life.scale=0.1;
    //liv();
  }
}

console.log(lives);
if(gameState===10){
  school=createSprite(displayWidth/2,(displayHeight-135)/2,displayWidth,displayHeight-135);
    school.addImage("s1",SchoolI);
    school.depth=locker.depth+20;
    fill("black");
    stroke("RED");
    strokeWeight(6)
    textSize(30)
    text("Y O U  L O S E !",(displayWidth/2)-100,(displayHeight-135)/2);
    input1.hide();
    input2.hide();
    input3.hide();
    input4.hide();
    input5.hide();
    button.hide();
    button2.hide();
    button3.hide();
    button5.hide();
    button4.hide();
}
}



function liv(){
  for(var l=1;l<1000000;l+=3){
    life.depth=l;
  }
}
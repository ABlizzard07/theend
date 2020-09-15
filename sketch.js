var car;
var wall;
var speed;
var weight;
var position;
var track, bg, wallimg, carimg;

function preload(){
  wallimg = loadImage("wall.png");
  carimg = loadImage("thecar.png");
  bg = loadImage("bg2.jpg");
}

function setup() {
  createCanvas(4000,1600);
  car = createSprite(50,100,50,50);
  car.addImage(carimg);
  car.scale = 0.5;
  car2 = createSprite(50,350,50,50);
  car2.addImage(carimg);
  car2.visible = false;
  car2.scale = 0.5;
  car3 = createSprite(50,600,50,50);
  car3.addImage(carimg);
  car3.visible = false;
  car3.scale = 0.5;

  position = random(3000,4000);
  position2 = random(3000,4000);
  position3 = random(3000,4000);

  wall = createSprite(3000,100,60,100);
  wall.addImage(wallimg);
  wall2 = createSprite(3000,350,60,100);
  wall2.addImage(wallimg);
  wall2.visible = false;

  wall3 = createSprite(3000,600,60,100);
  wall3.addImage(wallimg);
  wall3.visible = false;
  
  speed = random(55,90);
  speed2 = random(55,90);
  speed3 = random(55,90);
  
  weight = random(400,1500);
  weight2 = random(400,1500);
  weight3 = random(400,1500);

  car.velocityX = speed/1.6666666666;
}

function draw() {
  background(bg);  
  camera.position.x = 3000;
 
    if(car.x >= 2860){
  
    car.velocityX = 0;
    car2.velocityX = speed2/1.6666666666;
    car2.visible = true;
    wall2.visible = true;
    camera.position.y = car2.y;

    var deformation = 0.5 * weight * speed * speed/22509;
    
    if(deformation >= 180)
    {
      car.shapeColor = color(255,0,0);
    }
    if(deformation < 180 && deformation > 100)
    {
      car.shapeColor = color(230,230,0);
    }
    if(deformation <= 100)
    {
      car.shapeColor = color(0,255,0);
    }
  }

    if(car2.x >= 2870){

    car2.velocityX = 0;
    car3.velocityX = speed3/1.6666666666;
    car3.visible = true;
    wall3.visible = true;
    camera.position.y = car3.y;

    var deformation2 = 0.5 * weight2 * speed2 * speed2/22509;
    
    if(deformation2 >= 180)
    {
      car2.shapeColor = color(255,0,0);
    }
    if(deformation2 < 180 && deformation2 > 100)
    {
      car2.shapeColor = color(230,230,0);
    }
    if(deformation2 <= 100)
    {
      car2.shapeColor = color(0,255,0);
    }
  }

    if(car3.x >= 2860){

    car3.velocityX = 0;
    var deformation3 = 0.5 * weight3 * speed3 * speed3/22509;
    
    if(deformation3 >= 180)
    {
      car3.shapeColor = color(255,0,0);
    }
    if(deformation3 < 180 && deformation3 > 100)
    {
      car3.shapeColor = color(230,230,0);
    }
    if(deformation3 <= 100)
    {
      car3.shapeColor = color(0,255,0);
    }
      textSize(70);
      fill("white");
      text("Game Over",2150,10);
  }

  for(i = 0; i < 5000; i = i + 50){
    fill("white");
    rect(i,100,20,5);
    rect(i,350,20,5);
    rect(i,600,20,5);
  }

  drawSprites();
}
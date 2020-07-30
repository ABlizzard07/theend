var car;
var wall;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50,50,50,50);
  car.shapeColor = "violet";
  car2 = createSprite(50,200,50,50);
  car2.shapeColor = "blue";
  car3 = createSprite(50,350,50,50);
  car3.shapeColor = "purple";

  wall = createSprite(1250,50,60,100);
  wall.shapeColor = "gray";
  wall2 = createSprite(1250,200,60,100);
  wall2.shapeColor = "gray";
  wall3 = createSprite(1250,350,60,100);
  wall3.shapeColor = "gray";
  
  speed = random(55,90);
  speed2 = random(55,90);
  speed3 = random(55,90);
  
  weight = random(400,1500);
  weight2 = random(400,1500);
  weight3 = random(400,1500);

  car.velocityX = speed/1.6666666666;
  car2.velocityX = speed2/1.6666666666;
  car3.velocityX = speed3/1.6666666666;
}

function draw() {
  background("black");  

  if(wall.x - car.x < (car.width + wall.width)/2)
  {
    car.velocityX = 0;
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

  if(wall2.x - car2.x < (car2.width + wall2.width)/2)
  {
    car2.velocityX = 0;
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

  if(wall3.x - car3.x < (car3.width + wall3.width)/2)
  {
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
  }

  drawSprites();
}
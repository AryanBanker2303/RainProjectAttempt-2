var rain, rain2, rain3, rain4 ,g;

function setup(){
createCanvas(800,800);
g =0;
}

function draw(){
background(220,220,220);

if(frameCount % 20 === 0){
    g = g + 0.5;
}
rain = createSprite(random(0,800),0,10,60);
rain.velocityY = random(3,10)*3;;
rain.shapeColor = "green"
/*
if(rain.y === 1){
 rain.destroy();   
}
*/
rain1 = createSprite(random(0,800),0,10,60);
rain1.velocityY = random(3,10)*1.5;
rain1.shapeColor = "blue"

rain2 = createSprite(random(0,800),0,10,60);
rain2.velocityY = random(3,10)*2;;
rain2.shapeColor = "yellow"

rain3 = createSprite(random(0,800),0,10,60);
rain3.velocityY = random(3,10)*random(1,3);
rain3.shapeColor = "pink"

rain4 = createSprite(random(0,800),0,10,60);
rain4.velocityY = random(3,10)*random(1,3);
rain4.shapeColor = "violet"
 drawSprites();   
}































































































































































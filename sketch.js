
var moving_rect,fixed_rect,rect_1,rect_2;


function setup() {
  createCanvas(800,400);
  moving_rect=createSprite(200, 100, 50, 50);
  moving_rect.shapeColor="green";

  fixed_rect=createSprite(200,200,50,50);
  fixed_rect.shapeColor="green";

  rect_1=createSprite(50,100,50,50);
  rect_1.shapeColor="green";

  rect_2=createSprite(150,100,50,50);
  rect_2.shapeColor="green";

  
  



}

function draw() {
  background(255,255,255); 
  
  moving_rect.x=mouseX;
  moving_rect.y=mouseY;

 if  ( isTouching(moving_rect,rect_1)){
   moving_rect.shapeColor = "red";
   rect_1.shapeColor = "red";
}

else{
  moving_rect.shapeColor = "green";
   rect_1.shapeColor = "green";
}
 

  drawSprites();
}

function isTouching (object1,object2){
  if(object1.x-object2.x<=(object2.width/2+object1.width/2)&&
     object2.x-object1.x<=(object2.width/2+object1.width/2)&&
     object1.y-object2.y<=(object2.height/2+object1.height/2)&&
     object2.y-object1.y<=(object2.height/2+object1.height/2)){
    
    return true

     }
  
     else
     {
       return false
    
    }
  }
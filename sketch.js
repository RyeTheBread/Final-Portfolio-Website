var sunX = 68.152;
var sunRadius = 47.534/2;


function setup() {
  var canvas = createCanvas(windowWidth, 400);
    canvas.parent('header');
 }

function draw() {
  background('#a3a7d4');
  
  //The ground
  fill('#bee1c2');
  rect(0,270.166,width,129.834);
  
  //sun
  fill('#eeeeee');
  circle(sunX,114.112,47.534/2);
  
  
  //tree trunk
  fill('#a1887f');
  rect(282.054,186.309,51.121,83.857);
  
  //tree top
  fill('#bee1c2');
  circle(307.614,149.09,135.426/2);
  
  //name
  textSize(30);
  fill(35,31,32);
  text("Rye",48,198);
  text("McCubbin",48,223);
    
  sunX = sunX +1;
  if (sunX>width+sunRadius){
    sunX = -sunRadius;
  }
}
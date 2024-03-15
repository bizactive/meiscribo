let canvas = document.getElementById("canvas");
let ctx2D = canvas.getContext("2d");
let winInWid = window.innerWidth;
let winInHgt = window.innerHeight;
canvas.width = winInWid;
canvas.height = winInHgt;

//set Mouse position
let mousex = 0;
let mousey = 0;

addEventListener("mousemove", function() {
    mousex = event.clientX;
    mousey = event.clientY;}
)

//distance for mouse click to centre of ball
function getDistance(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
return Math.sqrt(dx * dx + dy * dy)
;}

//set upward speed once bounced
let grav = 0.99; 
//ctx2D.lineWidth = 5; unneccesary?

function randomColour() {
return (
  'rgba(' + 
  Math.round(Math.random() * 250) +
  ',' +
    Math.round(Math.random() * 250) +
  ',' +
    Math.round(Math.random() * 250) +
  ',' +
    Math.ceil(Math.random() * 10) / 5 + //changed from 10 to 5 ie less opaque balls
  ')')
;}

// the ball object
function Ball() { 
this.color = randomColour();
this.radius = Math.random() * 20 + 54; //size of ball (was +14)
this.startradius = this.radius;
this.x = Math.random() * (winInWid - this.radius * 2) + this.radius; 
this.y = Math.random() * (winInHgt - this.radius); 
this.dx = Math.round((Math.random() - 0.5) * 10); //speed of ball and up and down 
this.dy = Math.random() * 2; //used in animation
this.vel = Math.random() / 10; //speed of balls (was 5 ) - the higher the num the slower the ball

  this.update = function () {
    ctx2D.beginPath();
    ctx2D.arc(this.x, this.y, this.radius, 0, 2 * Math.PI); //creates ball
    ctx2D.fillStyle = this.color;
    ctx2D.fill()
  ;}

  this.isClicked = function(clickX, clickY) {
    // Calculate the distance from the click to the center of the ball
    const distance = getDistance(clickX, clickY, this.x, this.y);
    // If the click is within the radius of the ball, change its color to red
    if (distance < this.radius) {
      this.color = 'red';}
  };
;} //end of Ball object

//array of Balls
let ballz = [];
for (let i = 0; i < 10; i++) { //number of balls
  ballz.push(new Ball())
;}

function animate() {
if (winInWid!= window.innerWidth || winInHgt != window.innerHeight) {
    winInWid = window.innerWidth; 
    winInHgt = window.innerHeight	
;}
 
requestAnimationFrame(animate); 
ctx2D.clearRect(0, 0, winInWid, winInHgt);
  
for (let i = 0; i < ballz.length; i++ ) {
  ballz[i].update();
  ballz[i].x += ballz[i].dx;
  ballz[i].y += ballz[i].dy;
// x and y swicthed
if (ballz[i].x + ballz[i].radius > winInWid || ballz[i].x - ballz[i].radius < 0) {
  ballz[i].dx = -ballz[i].dx;}
  
if (ballz[i].y + ballz[i].radius >= winInHgt) {
  ballz[i].dy = -ballz[i].dy * grav;}
else {ballz[i].dy +=ballz[i].vel;}
	
if (mousex > ballz[i].x - 20 &&
  mousex < ballz[i].x + 20 &&
  mousey > ballz[i].y - 50 &&
  mousey < ballz[i].y + 50 &&
  ballz[i].radius < 70) {
		//ballz[i].x += +1; //what does this do?
    ballz[i].radius += 5;} //increase and decrease had no effect
// else if?
else { 
  if (ballz[i].radius > ballz[i].startradius) {
    ballz[i].radius += -5;}
;} 

;} // end of for loop  
;} //end of animation  - compare here
  
animate(); 
 
canvas.addEventListener('click', function(event) {
  const rect = canvas.getBoundingClientRect(); // To adjust mouse position based on the canvas position
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;

  // Check each ball to see if it's been clicked
for (var i = 0; i < ballz.length; i++) {
  ballz[i].isClicked(clickX, clickY);}
})


  

  









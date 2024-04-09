const canvas = document.getElementById("flagCanvas");
const ctx = canvas.getContext("2d");

const redBlock = () => {
ctx.beginPath(); 
ctx.moveTo(60,0);

  ctx.lineTo(500,0); 
  ctx.lineTo(500,100);
  ctx.lineTo(250,100);
  ctx.lineTo(60,0);
  ctx.strokeStyle = "red";
   ctx.fillStyle = "red";
   ctx.fill();
   ctx.stroke();} 
setTimeout(redBlock, 1000);

const navyBlock = () => {
ctx.beginPath(); 
ctx.moveTo(60,300);

  ctx.lineTo(500,300); 
  ctx.lineTo(500,200);
  ctx.lineTo(250,200);
  ctx.lineTo(60,300);
   ctx.strokeStyle = "navy";
   ctx.fillStyle = "navy";
   ctx.fill();
   ctx.stroke();} 
setTimeout(navyBlock, 2000);

const greenRect = () => {
ctx.beginPath(); 
    ctx.rect(250, 120, 250, 60); 
   ctx.strokeStyle = "green";
   ctx.fillStyle = "green";
   ctx.fill();
   ctx.stroke();} 
setTimeout(greenRect, 3000);

const greenSlant1 = () => {
ctx.beginPath(); 
ctx.moveTo(0,0);

  ctx.lineTo(30,0); 
  ctx.lineTo(250,120);
  ctx.lineTo(250, 180);
  ctx.lineTo(0,30);
   ctx.strokeStyle = "green";
   ctx.fillStyle = "green";
   ctx.fill();
     ctx.stroke();} 
setTimeout(greenSlant1, 4000);

const greenSlant2 = () => {
ctx.beginPath(); 
ctx.moveTo(0,300);

  ctx.lineTo(30,300); 
  ctx.lineTo(250,180);
  ctx.lineTo(250, 120);
  ctx.lineTo(0,270);
   ctx.strokeStyle = "green";
   ctx.fillStyle = "green";
   ctx.fill();
     ctx.stroke();} 
setTimeout(greenSlant2, 5000);

const goldTri1 = () => {
ctx.beginPath(); 
ctx.moveTo(200,150);

  ctx.lineTo(0,150); 
  ctx.lineTo(0,30);
   ctx.strokeStyle = "gold";
   ctx.fillStyle = "gold";
   ctx.fill();
     ctx.stroke();} 
setTimeout(goldTri1, 6000);

const goldTri2 = () => {
ctx.beginPath(); 
ctx.moveTo(200,150);

  ctx.lineTo(0,150); 
  ctx.lineTo(0, 270);
   ctx.strokeStyle = "gold";
   ctx.fillStyle = "gold";
   ctx.fill();
     ctx.stroke();} 
setTimeout(goldTri2, 7000);

const blackTri1 = () => {
ctx.beginPath(); 
ctx.moveTo(175,150);

  ctx.lineTo(0,150); 
  ctx.lineTo(0, 50);
   ctx.strokeStyle = "black";
   ctx.fillStyle = "black";
   ctx.fill();
     ctx.stroke();} 
setTimeout(blackTri1, 8000);

const blackTri2 = () => {
ctx.beginPath(); 
ctx.moveTo(175,150);

  ctx.lineTo(0,150); 
  ctx.lineTo(0, 250);
   ctx.strokeStyle = "black";
   ctx.fillStyle = "black";
   ctx.fill();
     ctx.stroke();} 
setTimeout(blackTri2, 9000);

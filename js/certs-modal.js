const openCertModal = () => {
document.getElementById("certModal").style.display="block";}

const closeCertModal = () => {
document.getElementById("certModal").style.display="none";}

let slideIndex = 1;
showCerts(slideIndex);

function plusCerts(n) 
{showCerts(slideIndex += n);}

function currentCert(n) 
{showCerts(slideIndex = n);}

function showCerts(n) {
let i;
let slides = document.getElementsByClassName("certs");
let dots = document.getElementsByClassName("certpic");
let captionTxt = document.getElementById("caption");
  
if (n > slides.length){slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
  
for (i=0; i < slides.length; i++) {
  slides[i].style.display = "none";}
   
for (i=0; i < dots.length;i++){
  dots[i].className = dots[i].className.replace(" w3-opacity-off", "")}
	 
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " w3-opacity-off";}
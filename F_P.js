let slideIndex =1;
showSlides(slideIndex);

function plusSlides(n)
{
  showSlides(slideIndex += n);
}

function currentSlide(n)
{
  showSlides(slideIndex = n);
}

function showSlides(n)
{
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
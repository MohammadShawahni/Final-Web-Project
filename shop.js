let slideIndex =1;
showSlides(slideIndex);


let slid=1;
showSlid(slid);


let slid2=1;
showSlid2(slid2);


let slid3=1;
showSlid3(slid3);




/* div   num 1  *.........................................*/
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides fade");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
/*end of  div  num 1...................................*/


/* div  num 2 ..........................................*/
function aa(n) {
    showSlid(slid += n);
  }
  
  function bb(n) {
    showSlid(slid = n);
  }
  

function showSlid(n) {
    let i;
    let slides = document.getElementsByClassName("mys");
    if (n > slides.length) {slid = 1}    
    if (n < 1) {slid = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slid-1].style.display = "block";  
  }
  /*end of div  num 2  .............................................*/



 /* div num 3 ...................................................................*/
  function cc(n) {
    showSlid2(slid2 += n);
  }
  
  function dd(n) {
    showSlid2(slid2 = n);
  }
  

function showSlid2(n) {
    let i;
    let slides = document.getElementsByClassName("mys2");
    if (n > slides.length) {slid2 = 1}    
    if (n < 1) {slid2 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slid2-1].style.display = "block";  
  }
  /*end of  div  num 3...................................................*/



  /*div num 4...........................................................*/
  function ee(n) {
    showSlid3(slid3 += n);
  }
  
  function ff(n) {
    showSlid3(slid3 = n);
  }
  

function showSlid3(n) {
    let i;
    let slides = document.getElementsByClassName("mys3");
    if (n > slides.length) {slid3 = 1}    
    if (n < 1) {slid3 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slid3-1].style.display = "block";  
  }

/*end of div num 4.................................................*/

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
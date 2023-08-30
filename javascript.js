// inicio carrossel
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); 
}
// fim carrossel

// inicio pistas
function exibirPista1()
{
    document.querySelector('#pista1').style.display="block";
    document.querySelector('#elementosPista2').style.display="block";
    
}


function exibirPista2()
{
    document.querySelector('#pista2').style.display="block";
    document.querySelector('#elementosPista3').style.display="block";
    
}

function exibirPista3()
{
    document.querySelector('#pista3').style.display="block";
    document.querySelector('#elementosResultado').style.display="block";
}

function exibirResultado()
{
    document.querySelector('#resultado').style.display="block";
        
}
// fim pista

//MENU SUPERIOR, EVENTO DE SCROLL########################################################

window.addEventListener('scroll',
function (){
    const menu = document.getElementById('menu');
    if (window.scrollY>=180){
        menu.classList.remove('menu-closed');
        menu.classList.add('menu');
    }else if (window.scrollY<180){
        menu.classList.remove('menu')
        menu.classList.add('menu-closed')
    }
})
document.addEventListener('DOMContentLoaded', function () {
window.addEventListener('scroll',
    function (){
        const homeLight = document.getElementById('home-menu');
        const slideshowLight = document.getElementById('slideshow-menu');
        const financeLight = document.getElementById('finance-menu');
        const techniqueLight = document.getElementById('assistance-menu');
        const contactLight = document.getElementById('contact-menu');
        console.log(homeLight, slideshowLight, financeLight, techniqueLight, contactLight);

        if(!homeLight || !slideshowLight || !financeLight || !techniqueLight || !contactLight){
            console.error('uno o mas elem del menu no fueron encontrados')
        }

        //Limpio todas las classes
        [homeLight, slideshowLight, financeLight, techniqueLight, contactLight].forEach((item) => {
           item.classList.remove('light-on')
           item.classList.add('light-off') 
        });
        //condicion
        if (window.scrollY>=180 && window.scrollY<550){
           slideshowLight.classList.add('light-on');
           slideshowLight.classList.remove('light-off');
            
        } else if (window.scrollY>=550 && window.scrollY<1100){
            financeLight.classList.add('light-on');
            financeLight.classList.remove('light-off');
        } else if (window.scrollY>=1100 && window.scrollY<1700){
            techniqueLight.classList.add('light-on');
            techniqueLight.classList.remove('light-off');
        }else if (window.scrollY>=1700 && window.scrollY<2000){
            contactLight.classList.add('light-on');
            contactLight.classList.remove('light-off');
        }
    }

    
    )})
function scrollToSection(targetId){
        if (event)
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement){
            targetElement.scrollIntoView({behavior:"smooth", block: "start"});
        }
    }
function scrollToHome(){
    scrollToSection("home");
}
function scrollToSlide(){
    scrollToSection("slideshow-section");
}
function scrollToFinance(){
    scrollToSection("finance-section");
}
function scrollToTechnique(){
    scrollToSection("assistance-section");
}
function scrollToContact(){
    scrollToSection("footer-contact");
}

//MENU BURGER  ###################################################################

document.getElementById("menuIcono").addEventListener("click", function() {
    this.style.transition = "transform 0.5s";
    this.style.transform = this.style.transform === "rotate(360deg)" ? "rotate(0deg)" : "rotate(360deg)";
  });
function menuBurger(){   
  let MenuBurger = document.getElementById('burger-list');
  if (MenuBurger.style.opacity === '1'){
    MenuBurger.style.opacity = '0';
  } else {
    MenuBurger.style.opacity = '1';
  }
 }

// FUNCIONALIDADES DEL CARRUSEL##########################################################

 // mecanismo del slideshow
 let indiceActual = 0;
 const products = document.querySelectorAll('.product');
 function showProduct(indice) {
     products.forEach(product => {
         product.classList.remove('active', 'prev', 'next');
     });
     // Asigna clases a los autos anterior, actual y siguiente
     products[indice].classList.add('active');
     const indicePrev = (indice - 1 + products.length) % products.length;
     const indiceNext = (indice + 1) % products.length;
     products[indicePrev].classList.add('prev');
     products[indiceNext].classList.add('next');
 } 

// botones next, previous

let intervalo;

 function iniciarIntervalo(){
    clearInterval(intervalo);
    intervalo=setInterval(nextProduct, 5000);
 }

 function nextProduct() {
     indiceActual = (indiceActual + 1) % products.length;
     showProduct(indiceActual);
     iniciarIntervalo();
 }

 function previousProduct() {
     indiceActual = (indiceActual - 1 + products.length) % products.length;
     showProduct(indiceActual);
     iniciarIntervalo();
 }
 
 showProduct(indiceActual);
 iniciarIntervalo();

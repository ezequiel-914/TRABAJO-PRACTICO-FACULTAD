

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
}
)
window.addEventListener('scroll',
    function (){
        const homeLight = document.getElementById('home-menu');
        const slideshowLight = document.getElementById('slideshow-menu');
        const financeLight = document.getElementById('finance-menu');
        const techniqueLight = document.getElementById('assistance-menu');
        const contactLight = document.getElementById('contact-menu');
        console.log(homeLight, slideshowLight, financeLight, techniqueLight, contactLight)
        //Limpio todas las classes
        [homeLight, slideshowLight, financeLight, techniqueLight, contactLight].forEach((item) => {
           item.classList.remove('light-on')
           item.classList.add('light-off') 
        });
        //condicion
        if (window.scrollY>=0 && window.scrollY<150){
           slideshowLight.classList.add('light-on');
           slideshowLight.classList.remove('light-off');
            
        } else if (window.scrollY>=200 && window.scrollY<300){
            financeLight.classList.add('light-on');
            financeLight.classList.remove('light-off');
        } else if (window.scrollY>=400 && window.scrollY<450){
            techniqueLight.classList.add('light-on');
            techniqueLight.classList.remove('light-off');
        }
    }
    )


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
 // Funcionalidad del carrusel
 let indiceActual = 0;
 const products = document.querySelectorAll('.product');

 function showProduct(indice) {
     // Quita clases anteriores
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

 function nextProduct() {
     indiceActual = (indiceActual + 1) % products.length;
     showProduct(indiceActual);
 }

 function previusProduct() {
     indiceActual = (indiceActual - 1 + products.length) % products.length;
     showProduct(indiceActual);
 }
 // Inicializar mostrando el primer auto
 showProduct(indiceActual);
 setInterval(nextProduct, 5000)
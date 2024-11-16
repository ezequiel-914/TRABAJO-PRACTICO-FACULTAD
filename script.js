

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
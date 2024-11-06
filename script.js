function slideshow(){
    let slide = document.getElementById('autos');
    let ocultar = document.getElementById('slideshow');
    let slideOver= ocultar.style.overflowX;
    let currenTranslateX = slide.style.transform;
    
    if (currenTranslateX=== 'translateX(-10px)') {
        slide.style.transform = 'translateX(-400px)';
        slideOver= 'hidden';}
    else if (currenTranslateX=== 'translateX(-400px)'){
        slide.style.transform = 'translateX(-800px)';
        slideOver= 'hidden';
    } else if (currenTranslateX=== 'translateX(-800px)'){
        slide.style.transform = 'translateX(-1200px)';
        slideOver= 'hidden';
    } else if (currenTranslateX=== 'translateX(-1200px)'){
        slide.style.transform = 'translateX(-1600px)';
        slideOver= 'hidden';
    } else if (currenTranslateX=== 'translateX(-1600px)'){
        slide.style.transform = 'translateX(-2000px)';
        slideOver= 'hidden';
    } else if (currenTranslateX=== 'translateX(-2000px)'){
        slide.style.transform = 'translateX(-2200px)';
        slideOver= 'hidden';
    }else {
        slide.style.transform = 'translateX(-10px)';
        slideOver= 'hidden';
    }
}
setInterval(slideshow,3000);

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
  if (MenuBurger.style.transform === 'translateX(-20px)'){
    MenuBurger.style.transform = 'translateX(200px)';
  } else {
    MenuBurger.style.transform = 'translateX(-20px)';
  }
  
  
  console.log(MenuBurger.style.transform)

 }
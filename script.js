function slideshow(){
    let slide = document.getElementById('autos');
    let currenTranslateX = slide.style.transform;
    
    if (currenTranslateX=== 'translateX(-1px)') {
        slide.style.transform = 'translateX(-400px)';}
    else if (currenTranslateX=== 'translateX(-400px)'){
        slide.style.transform = 'translateX(-800px)';
    } else if (currenTranslateX=== 'translateX(-800px)'){
        slide.style.transform = 'translateX(-1200px)';
    } else if (currenTranslateX=== 'translateX(-1200px)'){
        slide.style.transform = 'translateX(-1600px)';
    } else if (currenTranslateX=== 'translateX(-1600px)'){
        slide.style.transform = 'translateX(-2000px)';
    } else if (currenTranslateX=== 'translateX(-2000px)'){
        slide.style.transform = 'translateX(-2200px)';
    }else {
        slide.style.transform = 'translateX(-1px)';
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
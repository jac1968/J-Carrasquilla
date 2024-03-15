
// animar botón de menú hamburguesa

document.querySelector(".barras-menu").addEventListener("click", animaBarras)

const  barra1 = document.querySelector(".linea1--barras")
const  barra2 = document.querySelector(".linea2--barras")
const  barra3 = document.querySelector(".linea3--barras")
const navMenu = document.querySelector(".nav__menu")

 function  animaBarras() {
    barra1.classList.toggle("activa_barra1")
    barra2.classList.toggle("activa_barra2")
    barra3.classList.toggle("activa_barra3") 
    navMenu.classList.toggle("activa_menu") 
 }

 const links = document.querySelectorAll(".nav__link")

for (const link of links) {
  link.addEventListener('click', function () {
    barra1.classList.remove("activa_barra1")
    barra2.classList.remove("activa_barra2")
    barra3.classList.remove("activa_barra3")
    navMenu.classList.remove("activa_menu")
  })
}

/* Usando la libreria typing.js */
var typed = new Typed('#typing', {
  strings: ['Frontend', 'Backend', 'FullStack'],
  typeSpeed: 65,
  loop: true,
  cursorChar: '__'
})

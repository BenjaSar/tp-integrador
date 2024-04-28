/* toggle icon navbar */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

/* Animacion de desplazamiento al apretar una seccion especifica del navbar*/

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
    
    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);
    
    
    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
}

/*Animacion para desplazar el navbar responsive */


//
document.addEventListener("DOMContentLoaded", function() {
    var testimonios = document.querySelectorAll(".testimoniosContainer .testimonio");
    var index = 0;

    function mostrarTestimonio() {
        testimonios.forEach(function(testimonio) {
            testimonio.classList.remove("active");
        });
        testimonios[index].classList.add("active");
        index = (index + 1) % testimonios.length;
    }

    mostrarTestimonio();

    setInterval(mostrarTestimonio, 6000);
});

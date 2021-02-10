const navSlide = () => {
    const burger = document.querySelector ('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener ('click', () => {
    //Toggle nav
        nav.classList.toggle('nav-active');

    //Animacion links
    navLinks.forEach((link, index) => {

        if (link.style.animation) {
            link.style.animation = '';
        }
        else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
        }

    });

    //Animacion icono

    burger.classList.toggle('toggle');

    });

}

navSlide();

// efecto opacidad

let firstHeading = document.getElementById("first-heading");

var position = firstHeading.getBoundingClientRect()

console.log(position.top);

function isVisible(element) {
    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = -100; 

    if(elementBox.top - window.innerHeight < distanceFromTop) {
        return true;
    } else {
        return false;
    }
}

function scanDocument() {
    let sectionList = document.querySelectorAll('.hidden');
    sectionList.forEach(function(section) {
        if(isVisible(section)) {
            section.classList.remove('hidden');
        };
    });

}


document.addEventListener("scroll", scanDocument);


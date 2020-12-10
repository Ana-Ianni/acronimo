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

$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });
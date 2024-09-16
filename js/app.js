 // Swiper Slides
document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper', {
        autoplay: {
           delay: 5000,
           disableOnInteraction: false
        },
    
        // Optional parameters
       direction: 'horizontal',
       loop: true,
       speed: 2000,
       watchSlidesProgress: true,
       parallax: true,
    
       // If we need pagination
       pagination: {
           el: '.swiper-pagination',
           type: 'fraction',
       },
    
       // Navigation arrows
       navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
       },
    })
})


// Navbar Sticky Fixed

const mainNav = document.querySelector(".header");

window.addEventListener("scroll", () => {
   if (document.documentElement.scrollTop > 2) {
      mainNav.classList.add("sticky");
   } else {
      mainNav.classList.remove("sticky");
   }
})

function toggleMenu() {
   let menu = document.querySelector('.header_menu');
   let barsIcon = document.querySelector('.menu_side_area i');
 
   // Toggle the left position to show/hide the menu
   menu.style.left = menu.style.left === '0px' ? '-250px' : '0px';
 
   // Toggle the class names between 'fa-bars' and 'fa-xmark'
   if (barsIcon.classList.contains('fa-bars')) {
       barsIcon.classList.remove('fa-bars');
       barsIcon.classList.add('fa-xmark');
   } else {
       barsIcon.classList.remove('fa-xmark');
       barsIcon.classList.add('fa-bars');
   }
 }
 
// Slick Slider Jquery

$('.comentslick').slick({
   dots: true,
   Infinity: true,
   slidesToShow: 5,
   slidesToScroll: 2,
   adaptativeHeight: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false
   },
   responsive: [
      {
         breakpoint: 1400,
         settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
         }
      },
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
         }
      },
      {
         breakpoint: 800,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
           
         }
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
           
         }
      }

   ]
})

// Any questions? section

document.getElementById('accordionContainer').addEventListener("click", () => {
   let target = event.target;

   // check if the clicked element is an accordion header
   if (target.classList.contains('accordion-header')) {
      let section = target.nextElementSibling;

      //toggle the active class to trigger the transition
      section.classList.toggle("active");

      // hide all other sections
      let allSection = document.querySelectorAll('.accordion-section-content');

      allSection.forEach(function(otherSection){
         if (otherSection !== section && otherSection.classList.contains('active')){
               otherSection.classList.remove('active')
         }
      })    
   }  
})

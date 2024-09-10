 // Swiper Slides
document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper', {
        autoplay: {
           delay: 3000,
           disableOnInteraction: false
        },
    
        // Optional parameters
       direction: 'horizontal',
       loop: true,
       speed: 1200,
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


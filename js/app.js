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


// Floating Chat
let element = $('.floating-chat');
let myStorage = localStorage;

if (!myStorage.getItem('chatID')) {
    myStorage.setItem('chatID', createUUID());
}

setTimeout(function() {
    element.addClass('enter');
}, 1000);

element.click(openElement);

function openElement() {
    var messages = element.find('.messages');
    var textInput = element.find('.text-box');
    element.find('>i').hide();
    element.addClass('expand');
    element.find('.chat').addClass('enter');
    var strLength = textInput.val().length * 2;
    textInput.keydown(onMetaAndEnter).prop("disabled", false).focus();
    element.off('click', openElement);
    element.find('.header button').click(closeElement);
    element.find('#sendMessage').click(sendNewMessage);
    messages.scrollTop(messages.prop("scrollHeight"));
}

function closeElement() {
    element.find('.chat').removeClass('enter').hide();
    element.find('>i').show();
    element.removeClass('expand');
    element.find('.header button').off('click', closeElement);
    element.find('#sendMessage').off('click', sendNewMessage);
    element.find('.text-box').off('keydown', onMetaAndEnter).prop("disabled", true).blur();
    setTimeout(function() {
        element.find('.chat').removeClass('enter').show()
        element.click(openElement);
    }, 500);
}

function createUUID() {
    // http://www.ietf.org/rfc/rfc4122.txt
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

function sendNewMessage() {
    var userInput = $('.text-box');
    var newMessage = userInput.html().replace(/\<div\>|\<br.*?\>/ig, '\n').replace(/\<\/div\>/g, '').trim().replace(/\n/g, '<br>');

    if (!newMessage) return;

    var messagesContainer = $('.messages');

    messagesContainer.append([
        '<li class="self">',
        newMessage,
        '</li>'
    ].join(''));

    // clean out old message
    userInput.html('');
    // focus on input
    userInput.focus();

    messagesContainer.finish().animate({
        scrollTop: messagesContainer.prop("scrollHeight")
    }, 250);
}

function onMetaAndEnter(event) {
    if ((event.metaKey || event.ctrlKey) && event.keyCode == 13) {
        sendNewMessage();
    }
}

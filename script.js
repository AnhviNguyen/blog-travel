window.addEventListener('scroll', function() {
    if (window.pageYOffset >= 60) {
        document.querySelector('header').classList.add('fixed-header');
    } else {
        document.querySelector('header').classList.remove('fixed-header');
    }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 9000, 
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20, 
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 30, 
    },
  },
});
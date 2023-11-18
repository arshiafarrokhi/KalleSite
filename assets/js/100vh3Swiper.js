var swiper3nd100vh = new Swiper(".mySwiper3nd100vh", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  loopedSlides: 8,
  centeredSlides: true,
  slidesPerView: 'auto',

  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

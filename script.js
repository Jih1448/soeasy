new Swiper(".mySwiper1", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});
var MainSwiper = new Swiper(".mySwiper2", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var SubSwiper = new Swiper(".mySwiper3", {
  loop: true,
  effect: "fade",
  fadeEffect: { crossFade: true },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  },
});
MainSwiper.controller.control = SubSwiper;
SubSwiper.controller.control = MainSwiper;

// Init Swipper js
var swiper = new Swiper('.swiper-container', {
  speed: 300,
  slideToClickedSlide: true,
  allowSlideNext: true,
  touchEventsTarget: 'wrapper',
  simulateTouch: true,
  allowTouchMove: true,
  preventClicks: true,
  watchSlidesProgress: true,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  updateOnWindowResize: true,
  initialSlide: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

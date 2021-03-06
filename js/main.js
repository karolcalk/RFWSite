// preloader animation
const animePreloader = $('.welcome-section');
setInterval(function () {
  animePreloader.removeClass('content-hidden');
}, 800);
setTimeout(function () {
  animePreloader.addClass('content-hidden').fadeOut();
}, 3500);


//----------preloader animation----------
// nav animation script
window.onload = function () {

  const t1 = new TimelineMax({
    paused: true
  });
  t1.to('.overlay', .6, {

    top: 0,
    ease: Expo.easeInOut
  });
  t1.staggerFrom('.menu ul li', .6, {
    y: 100,
    opacity: 0,
    ease: Expo.easeOut
  }, .2);
  t1.reverse();
  $(document).on('click', '.menu-btn', function () {
    t1.reversed(!t1.reversed());
  })
  $(document).on('click', '.nav li', function () {
    t1.reversed(!t1.reversed());
  })
  document.querySelector('.col-lg.overlay ').style.display = 'block';
}


// ----nav animation script---------

// ----photo-categoires animation


$('.cat-photo').jaliswall({
  item: '.cat-item',
  columnClass: '.cat-column'
})



// owl-carousel animation for rafal services
$('.services').owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    }
    ,
    1000: {
      items: 3
    }
  }

})
// --------------------------------------
// mouse scroll down 

jQuery('.middle').click(function (e) {
  $('.middle').addClass('middle-fade-out')
  $('html, body').animate({
    scrollTop: window.innerHeight,

  }, 1000)
});

// ----photo-categoires animation /

TweenMax.from(".left-col", 2, {
  // width: "0%",
  ease: Expo.easeInOut
});

TweenMax.from(".logo", 2, {
  delay: 2.5,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".buy", 2, {
  delay: 2.8,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".year", 2, {
  delay: 3.1,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".album-name", 2, {
  delay: 2.4,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".album-artist", 2, {
  delay: 2.6,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".about h1", 2, {
  delay: 3,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".album-name2", 2, {
  delay: 3.2,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".album-artist2", 2, {
  delay: 3.4,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".album-genre2", 2, {
  delay: 3.6,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".media p", 2, {
  delay: 3.6,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.staggerFrom(
  ".media ul li",
  2, {
  delay: 3.8,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
},
  0.1
);

TweenMax.from(".album-name3", 2, {
  delay: 4,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".album-artist3", 2, {
  delay: 4.2,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".next", 2, {
  delay: 4.4,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".more", 2, {
  delay: 4.6,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
});
//@media for add snim class
// const ml = window.matchMedia('(max-width:1000px)');
// if (ml.matches) {
//   document.querySelector('.right-col').classList.add('anim');
//   document.querySelector('.right-col .bottom').classList.add('anim');
// }


// anime sections  on scrolling website
// ScrollReveal({ reset: true });
window.sr = ScrollReveal();
sr.reveal('.anim', { delay: 150 });


// smooth scrolling


// instafeed.js
$(document).ready(function () {
  var userFeed = new Instafeed({
    get: 'user',
    userId: '8784148313',
    limit: 12,
    resolution: 'standard_resolution',
    accessToken: 'AQCoIiRN1G8CARf_JWXo4ce3ji909yJxdGZy_Y5llQDljxc-Zl9ZYQq7dLZ390qaiDIcGmC5MlSDAM8bT_eaanNOh4yQnnvosb8QhwL9EPGKkYIGtSfPFHm_JuRxWEDDTlXcPCF3xGdew-XCKdV1-N2Gd8LtHpDUBFUhzuWfbt_Bpmi9FoFYxj25TJjNuX8hblteslYEVYRx-TtH7nKjNYy9ekAQ7Hy_vESxSyLAZlLqAQ#_',
    sortBy: 'most-recent',
    template: '<div class="gallery"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
  })
  userFeed.run();

})


//kopiowanie do schowa maila

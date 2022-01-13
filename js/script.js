const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

new WOW().init();

jQuery('.drawer-icon').on('click', function (e) {
  e.preventDefault();

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');

  return false;
});

// スムーススクロール //
jQuery('a[href^="#"]').click(function () {

  var header = jQuery('.header').innerHeight();
  var id = jQuery(this).attr('href');
  var position = 0;
  if (id != '#') {
    var position = jQuery(id).offset().top - header;
  }
  jQuery("html, body").animate({
      scrollTop: position
    },
    300);
});

// スクロール検知 //
jQuery(window).on('scroll', function() {
  if ( 100 < jQuery(this).scrollTop()) {
    jQuery('.to-top').addClass('is-show');
  } else {
    jQuery('.to-top').removeClass('is-show');
  }
});

// クリックイベントの処理 //
jQuery('.header_nav li a').click(function() {
  jQuery('.header_nav li a').removeClass('is-active');
  jQuery(this).addClass('is-active');
});




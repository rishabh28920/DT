$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      autoplay: true,
      items: 1,
      nav: true,
      loop: true,
      autoplayHoverPause: true,
      animateOut: 'slideOutUp',
      animateIn: 'slideInUp',
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
    });
    $('.play').on('click', function() {
    owl.trigger('play.owl.autoplay', [1000]);
      console.log('play');
  })
  $('.stop').on('click', function() {
    owl.trigger('stop.owl.autoplay');
         console.log('stop');
  });
  });
  
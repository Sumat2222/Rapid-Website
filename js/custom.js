// CUSTOM SCRIPTS - CUSTOM.JS


// OWL CAROUSEL

$(document).ready(function () {
  new WOW().init();
});

$(".counter").counterUp({
  delay: 15,
  time: 1000
});


$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    dotsSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      800: {
        items: 5
      },
      1000: {
        items: 6
      }
    }
  })
});

// NAVBAR SCROLL

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 1) {
    $(".st-header").addClass("fixed-nav");
  } else {
    $(".st-header").removeClass("fixed-nav");
  }
});

var externalJS = (function() {
  return {
    initCarousel: function() {
      $('.your-class').slick({
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          centerMode: true,
          autoplay: true,
          variableWidth: true,
          arrows: false
          })
    }
}

})(externalJS||{});



/*
slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
          slidesToShow: 1
*/
      /*$('.carousel').carousel({
        interval: 3000,
        pause: false
      })*/
var externalJS = (function() {
  return {
    initCarousel: function() {
      $('.your-class').slick({
        /*  speed: 1000,
          centerMode: true,
          infinite: true,
          autoplay: true,
          variableWidth: true,*/
          autoplay: true,
          centerMode: true,
          infinite: true,
          variableWidth: true,
          arrows: false,
          swipe: true,
          swipeToSlide: true,
          touchMove: true
          });
    }
}

})(externalJS||{});
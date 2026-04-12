$(document).ready(function(){
    $('.photo-gallery').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768, // smaller screens
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });

  $('.photo-gallery').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('video').each(function() {
      this.pause();
    });
  });
  
  
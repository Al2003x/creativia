
$(document).ready(function(){
  $('.features').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
     
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        prevArrow: '<button class="prev-arrow"></button>',
        nextArrow: '<button class="next-arrow"></button>',
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
      	 prevArrow: '<button class="prev-arrow"></button>',
        nextArrow: '<button class="next-arrow"></button>',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
   ]
  });
  $('.clients__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots: true,
    autoplay: true,
    
  });
   $('.our__team-skills').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
     
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        prevArrow: '<button class="prev-arrow"></button>',
        nextArrow: '<button class="next-arrow"></button>',
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
         prevArrow: '<button class="prev-arrow"></button>',
        nextArrow: '<button class="next-arrow"></button>',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
   ]
  });
 $('.blog__slider').slick({
    slidesToShow: 2,
    infinite: false,
    slidesToScroll: 1,
    prevArrow: '<button class="prev-top"></button>',
    nextArrow: '<button class="next-bottom"></button>',
    vertical: true,
    verticalSwiping: true,

    responsive: [
      {
        breakpoint: 578,
        settings: {
          verticalSwiping: false
        }
      },
    ]
 });
});



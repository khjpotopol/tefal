$(function(){
    //슬라이더
   $(".mainSlider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
       autoplay:true,
       autoplaySpeed:8000,
   })
    
    $(".slick-dots li button").addClass("slide_Btn");
    $(".slick-prev").text("01");
    $(".slick-next").text("02");
    
    $(".slick-arrow").wrapAll("<div class='mainBg'></div>");
    $(".mainBg").append("<span></span>");
    
    
    
    $(".con01T02").click(function(){
        $(".con01B02").css("z-index","10")
    })
    
    $(".con01T01").click(function(){
        $(".con01B02").css("z-index","-10")
    })
    /*페이드인,아웃 효과주기*/
    
    
    $(".con02").css("background-position","-230px");
   
    
    $(".con02_01").hover(function(){
         $(".con02_01").css("width","70%").css("background-position","0px");
         $(".con02_02").css("width","30%");
    },function(){
        $(".con02_01").css("width","50%").css("background-position","-230px");
        $(".con02_02").css("width","50%");
    })
    
    $(".con02_02").hover(function(){
         $(".con02_02").css("width","70%").css("background-position","0px");
         $(".con02_01").css("width","30%").css("background-position","-430px");
    },function(){
        $(".con02_01").css("width","50%").css("background-position","-230px");
        $(".con02_02").css("width","50%").css("background-position","-230px");
    })
    
    
    
    
    
$('.mainSlider').on('init reInit afterChange',
		function(event, slick, currentSlide){
			var status = $(this).find('.slick-prev');
			var status2 = $(this).find('.slick-next');
			var i = slick.currentSlide;
			var slidesLength = slick.slideCount;
			var numberSlide1 = i + 1 <= slidesLength ? i + 1 : i - (slidesLength - 1);
			var numberSlide2 = i + 2 <= slidesLength ? i + 2 : i - (slidesLength - 2);

			status.html('0'+numberSlide1);
			status2.html('<strong>'+'0'+numberSlide2+'</strong>');
	});
    
    
    
    
    
    
    /*
    var con2=$(".con02").hover();
    
    if(con2){function(){
        $(".con02_01").css("width","70%"),
        $(".con02_02").css("width","30%"),
    }}
    */
    
    /*
    $(".con02_01").hover(function(){
        $(".con02_01").css("width","70%");
        $(".con02_02").css("width","30%");
    });
    */
    
    
    
    
    
    /*
    $(function(){
        $(".mainBg span").animate({
           left:"-100"}8000).animate({
            left:"100"}8000) 
        })
    })
    */
    
    /*
    $(".mainBg span").width("100%");
    */
    /*
      var slideCount = $('.mainBg');
      var slickSlide = $('.mainSlider li');

      slickSlide.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        
        var i = (currentSlide ? currentSlide : 0) + 1;
        $(this).find('.mainBg').html('.slick-prev') + i + '.slick-next' + slick.slideCount;
      });

    
    slickSlide.slick({
      slide: '.slider__item',
      slideToShow: 1,
      fade: true,
      arrows:true,
      prevArrow:'<button type="button" class="slide-btn slide-btn-prev"><img src="img/slide-prev.png" alt="image"></button>',
      nextArrow:'<button type="button" class="slide-btn slide-btn-next"><img src="img/slide-next.png" alt="image"></button>',

    });
    */
    /*
    var $status = $('.pagingInfo');
    var $slickElement = $('.mainSlider');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.text(i + '/' + slick.slideCount);
    });

    $slickElement.slick({
      autoplay: true,
      dots: true
    });
    */
    
})
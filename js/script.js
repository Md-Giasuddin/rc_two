
$(document).ready(function(){
	
     

		// banner slick slider start
		$('.banner_text_all').slick({
		  dots: true,
		  autoplay: true,
		  arrows:false,
		  infinite: true,
		  speed: 500,
		  fade: true,
		  cssEase: 'linear'
	});
	// banner slick slider end
	

	
	// testmonial part start
	$('.main_testomonial_slide').slick({
		  dots: false,
		  autoplay: true,
		  arrows:false,
		  infinite: true,
		  speed: 500,
		  slidesToShow: 1,
        slidesToScroll: 1
		  
	});
	// testmonial part end
	
	
	// second skill start  
	$('.skill_content').appear(function(){
	$('.skills').percentcircle({
		animate : true,
		diameter : 120,
		guage: 6,
		bgColor: '#ddd',
		coverBg: '#efefef',
		fillColor: '#de2168',
		percentSize: '20px',
		percentWeight: '700'
		
		});
	});
    
    $(".counterup-text span").counterUp({
        delay:5,
        time:500
    });
	
	
}); 





// filterizer
	 $(function() {
            //Initialize filterizr with default options
            $('.filtr-container').filterizr();
        });
		
		
		
// register part hide show
		
	
	
	
$(function ($) {
   

   $('.filtr-container').filterizr();
    
    $('.simplefilter li').click(function() {
        $('.simplefilter li').removeClass('active');
        $(this).addClass('active');
    });
	
	
	 //wow js
    new WOW().init();
			 //counterUp js
  $('.venobox').venobox(); 

});




// counter part

$(document).ready(function(){
	
	 // custom formatting example
      $('#earth').data('countToOptions', {
        formatter: function (value, options) {
          return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
      });

      // start all the timers
      $('.timer').each(count);

      function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
      }
	
}); 


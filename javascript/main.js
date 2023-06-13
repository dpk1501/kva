$(document).ready(function(){

  $('.screen').css('opacity','0%');
  setTimeout(function(){ $('.screen').css('opacity','25%'); },1800);
  setTimeout(function(){ $('.screen').css('opacity','50%'); },1900);
  setTimeout(function(){ $('.screen').css('opacity','75%'); },2000);
  setTimeout(function(){ $('.screen').css('opacity','100%'); }, 2100);

});

$('#nav-icon3').click(function() {
  var clicks = $(this).data('clicks');
  if (clicks) {
    $('#item').css("opacity", "0");
    $('#item').css({transition : 'opacity 0.5s ease-in-out'});
  } else {
    $('#item').css("opacity", "1");
    $('#item').css({transition : 'opacity 0.5s ease-in-out'});
  }
  $(this).data("clicks", !clicks);
});

// $('#nav-icon3').on("click", function(){
//   $('#item').css("opacity", "1");
//   $('#item').css({transition : 'opacity 0.5s ease-in-out'});
// });


	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});



( function($) {
  
  $(document).ready(function() {
    
    var s           = $('.slider'),
        sWrapper    = s.find('.slider-wrapper'),
        sItem       = s.find('.slide'),
        btn         = s.find('.slider-link'),
        sWidth      = sItem.width(),
        sCount      = sItem.length,
        slide_date  = s.find('.slide-date'),
        slide_title = s.find('.slide-title'),
        slide_text  = s.find('.slide-text'),
        slide_more  = s.find('.slide-more'),
        slide_image = s.find('.slide-image img'),
        sTotalWidth = sCount * sWidth;
    
    sWrapper.css('width', sTotalWidth);
    sWrapper.css('width', sTotalWidth);
    
    var clickCount  = 0;
    
    btn.on('click', function(e) {
      e.preventDefault();

      if( $(this).hasClass('next') ) {
        
        ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
      } else if ( $(this).hasClass('prev') ) {
        
        ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
      }
      TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })


      //CONTENT ANIMATIONS

      var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
      var toProperties = {autoAlpha:0.8, x:'0', y:'0'};

      TweenLite.fromTo(slide_image, 1, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
      TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
      TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
      TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
      TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);

    });
          
  });
})(jQuery);

$('.overlay').addClass('overlay-blue');
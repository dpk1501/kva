$(document).ready(function(){

  $('.screen').css('opacity','0%');
  setTimeout(function(){ $('.screen').css('opacity','25%'); },1800);
  setTimeout(function(){ $('.screen').css('opacity','50%'); },1900);
  setTimeout(function(){ $('.screen').css('opacity','75%'); },2000);
  setTimeout(function(){ $('.screen').css('opacity','100%'); }, 2100);

});

// меню
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
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});

// перемещение по меню

$('.news').click(function() {
    window.open("news.html");
});
$('.order').click(function() {
    window.open("order.html");
});
$('.contacts').click(function() {
    window.open("contacts.html");
});
$('.store').click(function() {
    window.open("store.html");
});
$('.about').click(function() {
    window.open("order.html");
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

  $('.slider').each(function(){
      var $this = $(this);
      var $group = $this.find('.slide-group');
      var $slides = $this.find('.slide');
      var buttonArray = [];
      var currentIndex = 0;
      var timeout;

      var $nav = $('.slide-nav').find('div');
  
       $nav.on('click', function (event) {
          event.preventDefault();
          console.log($(this));
          if ($(this).hasClass('next')) {
              if (currentIndex === $slides.length -1) {
                  move(0);
              }
              move(currentIndex + 1);
          } else {
              if (currentIndex === 0) {
                  move($slides.length -1);
              }
              move(currentIndex - 1);
          }
      });

  function move(newIndex) {
      var animateLeft, slideLeft;

      advance();

      if ($group.is(':animated') || currentIndex === newIndex) {
          return;
      }

      buttonArray[currentIndex].removeClass('active');
      buttonArray[newIndex].addClass('active');

      if (newIndex > currentIndex) {
          slideLeft = '100%';
          animateLeft = '-100%';
      } else {
          slideLeft = '-100%';
          animateLeft = '100%';
      }

      $slides.eq(newIndex).css({
          left: slideLeft,
          display: 'block'
      });

      $group.animate({left: animateLeft}, function() {
          $slides.eq(currentIndex).css({display: 'none'});
          $slides.eq(newIndex).css({left: 0});
          $group.css({left: 0});
          currentIndex = newIndex;
      });
  }

  function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {                    
          if (currentIndex < ($slides.length - 1)) {
              move(currentIndex + 1);
          } else {
              move(0);
          }
      }, 4000);
  }

  $.each($slides, function(index) {
      var $button = $('<button type="button" class="slide-btn">&bull;</button>');
      if (index === currentIndex) {
          $button.addClass('active');
      }
      $button.on('click', function(){
          move(index);
      }).appendTo('.slide-buttons');
      buttonArray.push($button);
  });

  advance();
  })

//   страница с заказом

$('.orderplease').on('click', () => {
    $('.login-box1').show();
    $('.login-box').hide();
});

function scrollFooter(scrollY, heightFooter)
{
    console.log(scrollY);
    console.log(heightFooter);

    if(scrollY >= heightFooter)
    {
        $('footer').css({
            'bottom' : '0px'
        });
    }
    else
    {
        $('footer').css({
            'bottom' : '-' + heightFooter + 'px'
        });
    }
}

$(window).load(function(){
    var windowHeight        = $(window).height(),
        footerHeight        = $('footer').height(),
        heightDocument      = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;

    // Definindo o tamanho do elemento pra animar
    $('#scroll-animate, #scroll-animate-main').css({
        'height' :  heightDocument + 'px'
    });

    // Definindo o tamanho dos elementos header e conteúdo
    $('header').css({
        'height' : windowHeight + 'px',
        'line-height' : windowHeight + 'px'
    });

    $('.wrapper-parallax').css({
        'margin-top' : windowHeight + 'px'
    });

    scrollFooter(window.scrollY, footerHeight);

    // ao dar rolagem
    window.onscroll = function(){
        var scroll = window.scrollY;

        $('#scroll-animate-main').css({
            'top' : '-' + scroll + 'px'
        });
        
        $('header').css({
            'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
        });

        scrollFooter(scroll, footerHeight);
    }
});


$(function() {
  $('.marquee').marquee({
    duration: 7000,
    startVisible: true,
    duplicated: true
  });
});
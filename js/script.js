$(function(){

//*** fixed on scroll ***//

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 66) {
            $('nav').addClass('fixed');
        }
        else {
            $('nav').removeClass('fixed');
        }
    });

//*** slider ***//

    // $('.button_next').click(function(){
    //   $('.two_content1').addClass('hidden');
    //   $('.two_content2').addClass('show');
    //
    //
    // });
    $('.button_next1').addClass('active');

    $('.button_next1').click(function(){
      $('.two_content2').hide();
      $('.two_content3').hide();
      $('.two_content1').fadeIn();
      $('.button_next1').addClass('active');
      $('.button_next2').removeClass('active');
      $('.button_next3').removeClass('active');


    });

    $('.button_next2').click(function(){
      $('.two_content1').hide();
      $('.two_content3').hide();
      $('.two_content2').fadeIn();
      $('.button_next2').addClass('active');
      $('.button_next1').removeClass('active');
      $('.button_next3').removeClass('active');
    });

    $('.button_next3').click(function(){
      $('.two_content1').hide();
      $('.two_content2').hide();
      $('.two_content3').fadeIn();
      $('.button_next3').addClass('active');
      $('.button_next1').removeClass('active');
      $('.button_next2').removeClass('active');
    });



});

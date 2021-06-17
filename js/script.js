
$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });

});

/*
<div class="row" align="center">
  <div class="content">
    <h3 class="title">Contact Info</h3>
    <div class="info">
      <h3><i class="fas fa-envelope"></i> krishnamnaidus13@gmail.com</h3>
      <h3><i class="fas fa-phone"></i>9346073161</h3>
      <h3><i class="fas fa-phone"></i>8099817551</h3>
      <h3><i class="fas fa-map-marker-alt"></i>Hyderabad</h3>

    </div>
  </div>


*/

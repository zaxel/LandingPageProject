$(function(){
    $('.toggles button').click(function(){
        var get_id = this.id;
        var get_current = $('.posts .' + get_id);

        $('.post').not(get_current).hide(500);
        get_current.show(500);
    });

    $('#showall').click(function(){
        $('.post').show(500);
    });
});


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:8,
        margin:40
    });
  });

  if($(window).width() < 480){
    $(".owl-carousel").owlCarousel({
        items:3,
        margin:10
    });
  }
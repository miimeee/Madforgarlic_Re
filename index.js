$(function(){
  // index.html 슬라이드 
  $('.slide-box').slick({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // aside tab-menu
  $(".sub-menu-tab ul li").click(function(){
    $(this).addClass("now")
    $(this).siblings("li").removeClass("now")
  })
})
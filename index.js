$(function () {
  // slick
  $(".slide-box").slick({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  // aside tab-menu
  $(".sub-menu-tab ul li").click(function () {
    $(this).addClass("now");
    $(this).siblings("li").removeClass("now");
  });
  // sub_store
  $(".store-name").click(function () {
    $(this).next().stop().slideToggle(300);
    $(this).toggleClass("active");
  });
  // responsive
  $(".trigger").click(function () {
    $(this).toggleClass("active");
    $(".header-wrapper").toggleClass("active");
  });
});

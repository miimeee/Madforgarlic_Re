$(function () {
  // index.html 슬라이드
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
    console.log("킆릭");
    $(this).siblings("li").removeClass("now");
  });

  // store.html
  $(".store-name").click(function () {
    $(this).next().stop().slideToggle(300);
    $(this).toggleClass("active");
  });

  // responsive
  // Trigger
  $(".trigger").click(function () {
    $(this).toggleClass("active");
    // gnb
    $(".header-wrapper").toggleClass("active");
  });
  $("section, .menu a").click(function () {
    $(".trigger").removeClass("active");
    $(".header-wrapper").removeClass("active");
  });
});

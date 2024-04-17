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
  // 스크롤 이동 시 실행되는 코드
  $(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > 4500) {
      $(".contents-container05-txt").css({
        animation: "fadeIn 1s 0s linear both",
      });
    } else if (scrollTop > 1200) {
      $(".contents-container02 > div > p").css({
        animation: "up 0.7s 0s linear both",
      });
    } else if (scrollTop > 400) {
      $(".contents-container01-txt").css({
        animation: "up 0.5s 0s linear both",
      });
      $(".contents-container01-img > img").css({
        animation: "up 0.5s 0.5s linear both",
      });
    } else {
    }
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

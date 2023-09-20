// ボタンメニュー
$(function () {
  var btnMenu = $(".js__btn-menu");
  var navList = $(".nav__list");

  btnMenu.on("click", function (){
    btnMenu.toggleClass("is-active");
    navList.toggleClass("is-show");
  });

  navList.on("click" , function (){
    btnMenu.removeClass("is-active");
    navList.removeClass("is-show");
  });
})


// メインビジュアル背景スライダー
window.addEventListener("DOMContentLoaded", () => {
  const mvSlider = new Swiper(".mv-slider", {
    loop: true,
    loopedSlides: 2,
    slidesPerView: "auto",
    speed: 21000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });
});

// スムーススクロール
$('a[href^="#"]').on("click", function() {
  var speed = 400;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? "html" : href);
  var position = target.offset().top;
  $("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing"
  );
  return false;
});
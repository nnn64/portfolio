// $(window).on('load resize', function() {
//   var windowWidth = window.innerWidth;
//   var elements = $('.left__box');
//   if (windowWidth >= 768) {
//     Stickyfill.add(elements);
//   }else{
//     Stickyfill.remove(elements);
//   } 
// });


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

  const mv2Slider = new Swiper(".mv2-slider", {
    loop: true,
    loopedSlides: 2,
    slidesPerView: "auto",
    speed: 21000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true,
    },
  });
});

// スムーススクロール
// #で始まるa要素をクリックした場合に処理
$('a[href^="#"]').on("click", function() {
  var speed = 400;
  // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
  var href = $(this).attr("href");
  // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
  var target = $(href == "#" || href == "" ? "html" : href);
  // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
  var position = target.offset().top;
  // スムーススクロール linear（等速） or swing（変速）
  $("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing"
  );
  return false;
});
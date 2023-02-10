
/* MAIN NAV */

$('.sub_menu_wrap').hide();
$('.main_menu > a').mouseover(function(){  
    $('.sub_menu_wrap').hide();
    $(this).parent().find('.sub_menu_wrap').stop().slideDown(200);
  });
$('.sub_menu_wrap').mouseleave(function(){
  $(this).stop().slideUp(200);
});


/* SEARCH */

$('.search').click(function(e){
    e.preventDefault();
    $('.search_popup_wrap').show();
    $('.black_bg').show();
  
  });
  
  $('.search_popup_wrap > button').click(function(e){
    e.preventDefault();
    $('.search_popup_wrap').hide();
    $('.black_bg').hide();
    console.log('button');
  });




   /* HEART CHECK */
$('.fa-heart').click(function(e){
  e.preventDefault();
    $(this).toggleClass('fa-solid');
    $(this).css('color', '#1E2F3F');

    if ($(this).hasClass('fa-solid') == false) {
      $(this).css('color', '#8E8E8E');
    }
});




/* COLOR CLICK */ 
$('.img_white').hide();

$('.black_color').on('click', function(){
  $('.img_black').show();
  $('.img_white').hide();
  $('.black_color').addClass('on');
  $('.white_color').removeClass('on');

  $('video').get(0).load();
  $('.stop').show();
  $('.play').hide();
});

$('.white_color').on('click', function(){
  $('.img_white').show();
  $('.img_black').hide();
  $('.white_color').addClass('on');
  $('.black_color').removeClass('on');

  $('video').get(1).load();
  $('.stop').show();
  $('.play').hide();
});




/* SIZE CHOICE */ 
$('.size_ct > li').on('click', function(){
  $(this).find('a').addClass('active');
  $('.size_ct > li').not($(this)).find('a').removeClass('active');
});




/* ACCORDION */
$(document).ready(function() {
  $('.detail_explain .dt_info .dt_info_tt').addClass('active');
  $('.detail_explain .dt_info .dt_info_ct').slideDown();
  $('.info_tt').on('click', function() {
      if($(this).hasClass('active')) {
        $(this).siblings('.info_ct').slideUp();
        $(this).removeClass('active');
      }
      else {
        $('.info_ct').slideUp();
        $('.info_tt').removeClass('active');
        $(this).siblings('.info_ct').slideToggle();
        $(this).toggleClass('active');
      }
  });     
});
  




/* RECOMMEND SLIDE */

// -------------- 계속 주석 처리
// let slideWrap = $(".recommend_ct"),
//     slideShow = slideWrap.find(".recommend_wrap"),
//     slideList = slideShow.find(".recommend_wrap > ul"),
//     slides = slideList.find(".rc_slide"),
//     slideBtn = slideWrap.find(".rc_btn");

// let slideCount = slides.length,
//     slideWidth = slides.innerWidth(),
//     showNum = 3,
//     num = 0,
//     currentIndex = 0,
    
//     slideCopy = $(".rc_slide:lt("+ showNum +")").clone();
//     slideList.append(slideCopy);

// //이미지 움직이기
// function backShow(){
//   if( num == 0 ){
//     //시작
//     num= slideCount;
//     slideList.css("left", -num * slideWidth + "px");
//   }
//   num--;
//   slideList.stop().animate({ left : -slideWidth * num +"px"}, 400);
// }

// function nextShow(){
//   if( num == slideCount ){
//     //마지막
//     num= 0;
//     slideList.css("left", num);
//   }
//   num++;
//   slideList.stop().animate({ left : -slideWidth * num +"px"}, 400);
// }

// //왼쪽, 오른쪽 버튼 설정
// slideBtn.on("click","button",function(){
//   if( $(this).hasClass("prev")){
//     //왼쪽 버튼을 클릭
//     backShow();
//   } else {
//     //오른쪽 버튼을 클릭
//     nextShow();
//   }
// });


// --------------
// const slides = document.querySelector('.recommend_wrap > ul'); //전체 슬라이드 컨테이너
// const slideImg = document.querySelectorAll('.rc_slide'); //모든 슬라이드들
// let currentIdx = 0; //현재 슬라이드 index
// const slideCount = slideImg.length; // 슬라이드 개수
// const prev = document.querySelector('.prev'); //이전 버튼
// const next = document.querySelector('.next'); //다음 버튼
// const slideWidth = 397; //한개의 슬라이드 넓이
// const slideMargin = 24; //슬라이드간의 margin 값
// const showNum  = 5;

// slideCopy = $(".rc_slide:lt("+ showNum +")").clone().appendTo( '.recommend_wrap > ul' );
// //slides.append(slideCopy);

// console.log('copy',slideCopy)
// //전체 슬라이드 컨테이너 넓이 설정
// slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

// function moveSlide(num) {
//   slides.style.left = -num * 421 + 'px';
//   currentIdx = num;
//   console.log('111',slideImg)
// }

// prev.addEventListener('click', function () {
//   /*첫 번째 슬라이드로 표시 됐을때는 
//   이전 버튼 눌러도 아무런 반응 없게 하기 위해 
//   currentIdx !==0일때만 moveSlide 함수 불러옴 */

//   if (currentIdx !== 0) {
//     moveSlide(currentIdx - 1);
//   }
// });

// next.addEventListener('click', function () {
//   /* 마지막 슬라이드로 표시 됐을때는 
//   다음 버튼 눌러도 아무런 반응 없게 하기 위해
//   currentIdx !==slideCount - 1 일때만 
//   moveSlide 함수 불러옴 */
//   if (currentIdx !== currentIdx - 1) {
//     moveSlide(currentIdx + 1);
//   }
// });



// -------------- 계속 주석 처리
// $(".rc_pagnation ul li").eq(currentIdx-1).addClass("on").siblings().removeClass("on");
//   currentIdx++;
//   if(idx> $(".rc_pagnation ul li").length-3){
//     $(".rc_pagnation ul").animate({
//       "left":0
//     },0);
//     currentIdx=0;
       
// }




/* 참조 무한슬라이드 https://eunhee-programming.tistory.com/166  */

let slides = document.querySelector('.recommend_wrap > ul');
let slideImg = document.querySelectorAll('.recommend_wrap > ul > li');
let currentIdx = 0;
let slideCount = slideImg.length;
let prev = document.querySelector('.prev'); //이전 버튼
let next = document.querySelector('.next'); //다음 버튼
let slideWidth = 397; //슬라이드이미지 넓이
let slideMargin = 24; //슬라이드 끼리의 마진값
makeClone(); // 처음이미지와 마지막 이미지 복사 함수
initfunction(); //슬라이드 넓이와 위치값 초기화 함수



function makeClone() {
  let cloneSlide_first = slideImg[0].cloneNode(true);
  let cloneSlide_second = slideImg[1].cloneNode(true);
  let cloneSlide_third = slideImg[2].cloneNode(true);
  //let cloneSlide_forth = slideImg[3].cloneNode(true);
  let cloneSlide_last = slides.lastElementChild.cloneNode(true);
  slides.append(cloneSlide_first, cloneSlide_second, cloneSlide_third);
  slides.insertBefore(cloneSlide_last, slides.firstElementChild);
}


function initfunction() {
  slides.style.width = (slideWidth + slideMargin) * (slideCount + 2) + 'px';
  slides.style.left = -(slideWidth + slideMargin) + 'px';
}



next.addEventListener('click', function () {
  //다음 버튼 눌렀을때
  
  if (currentIdx <= slideCount - 1) {
    //슬라이드이동
    slides.style.left = -(currentIdx + 2) * (slideWidth + slideMargin) + 'px';
    slides.style.transition = `${0.5}s ease-out`; //이동 속도
  }
  if (currentIdx === slideCount - 1) {
    //마지막 슬라이드 일때
    setTimeout(function () {
      //0.5초동안 복사한 첫번째 이미지에서, 진짜 첫번째 위치로 이동
      slides.style.left = -(slideWidth + slideMargin) + 'px';
      slides.style.transition = `${0}s ease-out`;
    }, 500);
    currentIdx = -1;
  }
  currentIdx += 1;
 
});


prev.addEventListener('click', function () {
  //이전 버튼 눌렀을때
  console.log(currentIdx);
  if (currentIdx >= 0) {
    slides.style.left = -currentIdx * (slideWidth + slideMargin) + 'px';
    slides.style.transition = `${0.5}s ease-out`;
  }
  if (currentIdx === 0) {
    setTimeout(function () {
      slides.style.left = -slideCount * (slideWidth + slideMargin) + 'px';
      slides.style.transition = `${0}s ease-out`;
    }, 500);
    currentIdx = slideCount;
  }
  currentIdx -= 1;
});


let indicators = document.querySelector('.rc_pagnation > ul > li > button');
let nowIdx = 0;
//let sliderCount = slides.length;


// indicators.addEventListener('click', function(){
//   if(){

//   }
// });





/* RECOMMEND PAGINATION CLICK */ 

//----------------- pagination
// let slideWrapper = $('.recommend_wrap');
// let container = $('.recommend_wrap > ul');
// let indicators = $('.rc_pagnation > ul > li > button');
// let nowIdx = 0;
// let sliderCount = container.length;


// $(function(){
  
//   // 슬라이드 버튼 클릭
//   indicators.on('click', function(e){
//     e.preventDefault();

//     nowIdx = indicators.index(this);

//     indicators.eq(nowIdx).addClass('on');
//     indicators.eq(nowIdx).parent().siblings().children().removeClass('on');

//     container.animate({left:-421*nowIdx});

//   });
// });






/* VIDEO PLAY STOP */ 

$('.play').on('click', function(){
  $('video').get(0).play();
  $('video').get(1).play();
  $('.play').hide();
  $('.stop').show();
});


$('.stop').on('click', function(){
  $('video').get(0).pause();
  $('video').get(1).pause();
  $('.stop').hide();
  $('.play').show();
});




/* SIZE CHART CLICK */ 
$('.size_title > div > a').click(function(e){
  e.preventDefault();
  $('.size_popup').show();
  $('.black_bg_size').show();

});

$('.size_popup_ct > button').click(function(e){
  e.preventDefault();
  $('.size_popup').hide();
  $('.black_bg_size').hide();
});

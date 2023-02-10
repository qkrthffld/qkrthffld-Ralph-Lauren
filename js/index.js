


/* MAIN NAV */

$('.sub_menu_wrap').hide();
$('.main_menu > a').mouseover(function(){  
    $('.sub_menu_wrap').hide();
    $(this).parent().find('.sub_menu_wrap').stop().slideDown(200);
  });
$('.sub_menu_wrap').mouseleave(function(){
  $(this).stop().slideUp(200);
});


// $(document).ready(function(){
//   $('.slide_wrap').bxSlider({
//     auto: true, // 자동으로 애니메이션 시작
//     speed: 500,  // 애니메이션 속도
//     pause: 5000,  // 애니메이션 유지 시간 (1000은 1초)
//     mode: 'horizontal', // 슬라이드 모드 ('fade', 'horizontal', 'vertical' 이 있음)
//     autoControls: true, // 시작 및 중지버튼 보여짐
//     pager: true, // 페이지 표시 보여짐
//     captions: true, // 이미지 위에 텍스트를 넣을 수 있음
//   });
// });


/*
function currentIndex() {
  var $current = $(".slide_wrap > li").attr("data-slick-index");
  console.log(parseInt($current) + 1);
  $(".change_num").text(parseInt($current) + 1);
}

function totalIndex(){
  var itemLength = $('.slide_wrap > li').length;
  console.log(itemLength);
  $(".siwper_num .total").text(itemLength);
}

$(document).ready(function(){
  $('.slide_wrap').bxSlider({
    slide: "li", //슬라이드 되어야 할 태그 ex) div, li
    mode:'fade',
    slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
    speed: 500, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    //arrows: true, // 옆으로 이동하는 화살표 표시 여부
    //dots: false, // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay: false, // 자동 스크롤 사용 여부
    autoplaySpeed: 100, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    vertical: false, // 세로 방향 슬라이드 옵션
    //prevArrow: "<button type='button' class='btn_pause'></button>", // 이전 화살표 모양 설정
    //nextArrow: "<button type='button' class='btn_next'></button>", // 다음 화살표 모양 설정
    //dotsClass: "slick-dots", //아래 나오는 페이지네이션(점) css class 지정
    draggable: true, //드래그 가능 여부
    variableWidth: true,
    default : 'horizontal',
    //prevSelector:'.btn_pause',
    //nextSelector:'.btn_next',

    onSlideBefore: function ($slideElement, oldIndex, newIndex){
      var current_index = parseInt(newIndex + 1);
      if(current_index > 3){
      $('.siwper_num .change_num').text(current_index);
      }else{
      $('.siwper_num .change_num').text(current_index);
      };
     }
  });

});
*/


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




/* MAIN SLIDE */

let btnPrev = $('.btn_pause'),
btnAfter = $('.btn_next'),
slideNum = 0,
sliderIdx = $('.slide_wrap > li').length,
scrollCnt = 0,
navNum =0;
//prograssbar= $('.slide_progressbar');


// slide prev버튼
btnPrev.click(function() {
  if(slideNum != 0){
    moveSlide(slideNum-1);
  }else{
    moveSlide(sliderIdx-1);
  }
});

// slide after버튼
btnAfter.click(function() {
  if(slideNum != sliderIdx -1){
    moveSlide(slideNum+1);    
  }else{
    moveSlide(0);
  }
});

//슬라이드 이동 함수
function moveSlide(num){
  //let newleft = num*50+'%';
  let vLeft = num*-100+'%';
  $('.slide_wrap').css('left', vLeft);
  slideNum = num;
  $('.change_num').text(slideNum+1);
  $('.total').removeClass('changed');

}




/*
$(function(){
  let i = 0;
  $('.slide_btn > button').eq(0).click(function(){
    i++;
    if(i > 3){
      i = 3
    }
    $('.slide_wrap > li').css('left',-100*i+'%');
  });

  $('.slide_btn > button').eq(1).click(function(){
    i--;
    if(i < 0){
      i = 0;
    }
    $('.slide_wrap > li').css('left',-100*i+'%');
  });

});
*/



/*
let slides = document.querySelector(".slide_wrap");
let leftbtn = document.querySelector('.btn_pause');
let rightbtn=document.querySelector('.btn_next');
let slideNo = 0;
rightbtn.addEventListener("click",function goSlide(){
    if (slideNo<3){
        slideNo += 1;
        document.querySelector(`#slide${slideNo}`).style.transform=`translateX(${-100*slideNo}%)`;
        }
    }
);
leftbtn.addEventListener("click",function goSlide(){
    if(slideNo>0){
        slideNo -= 1;
        const whatwillchange=document.querySelector(`#slide${slideNo+1}`).style;
        whatwillchange.transform=`translateX(0%)`;
        }
    }
);
*/





/* BEST CONTENT TAB CLICK */

$('.best_category > li > a').on('click', function(e){
  
  e.preventDefault();      
  // 선택한 버튼의 selected 클래스 추가
  $(this).addClass('selected');
  
  //선택되지 않은 버튼은 selected 클래스 제거
  $('.best_category > li > a').not(this).removeClass('selected');

  //눌린 버튼의 href 요소
  let this_href = $(this).attr('href')

  //눌린 버튼의 href가 id인 요소의 hide 제거
  $(this_href).removeClass('hide');

  //눌리지 않은 버튼의 hide 추가
  $('.best_content > div ').not($(this_href)).addClass('hide');


  $('body'). on('scroll touchmove mousewheel', e=> { e.preventDefault(); e.stopPropagation(); });
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




/* BEST SLIDE */

// let slideWrapper = $('.best_content');
// let container = $('.best > .best_content > .best_item > div');
// let indicators = $('.best > .pagination_wrap > .pagination > li > button');
// let nowIdx = 0;
// let returnIdx = 0;


// $(function(){
  
//   // 슬라이드 버튼 클릭
//   indicators.on('click', function(e){
//     e.preventDefault();

//     nowIdx = indicators.index(this);

//     indicators.eq(nowIdx).parent().addClass('on');
//     indicators.eq(nowIdx).parent().siblings().removeClass('on');

    
//     container.animate({left:-312*nowIdx});
//   });


//   $('.best_category > li > a').on('click', function(e){
//     indicators.eq(returnIdx).parent().addClass('on');
//     indicators.eq(returnIdx).parent().siblings().removeClass('on');

//     container.animate({left:0});
//   });
  
// });









// var slides = document.querySelector('.best_content'),
//     slide = document.querySelectorAll('.best_content > div'),
//     currentIndex = 0,
//     slideCount = slide.length,
//     slideWidth = 292,
//     slideMargin = 24,
//     prevBtn = document.querySelector('.prev'),
//     nextBtn = document.querySelector('.next');


//     slides.style.width = (slideWidth + slideMargin)*slideCount - slideMargin  + 'px';

//     function moveSlide(num) {

//       slides.style.left = -num*316 + 'px';
//       currentIndex = num;
//     }

//     nextBtn.addEventListener('click', function(){
//       if(currentIndex < slideCount - 3 ){
//         moveSlide(currentIndex + 1);
//         console.log(currentIndex);
//       }else{
//         moveSlide(0);
//       }
      
//     });
//     prevBtn.addEventListener('click', function(){
//       if(currentIndex > 0 ){
//         moveSlide(currentIndex - 1);
//         console.log(currentIndex);
//       }else{
//         moveSlide(currentIndex < slideCount - 3 );
//       }
      
//     });









/* BEST DRAG SLIDE */

/*
let slider = document.querySelector('.best_item');
//console.log("slider:", slider);
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  //console.log("111");
  e.preventDefault();
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  console.log(isDown)
});

slider.addEventListener('mouseleave', (e) => {
  //console.log("2222");
  e.preventDefault();
  isDown = false;
  slider.classList.remove('active');

});

slider.addEventListener('mouseup', (e) => {
  //console.log("333");
  e.preventDefault();
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', e => {
  //console.log("444");
  if (!isDown) return;
  e.preventDefault();

  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;

});
*/



/* POLO RALPH LAUREN */

$('.polo_left > div > a').on('click', function(e){
  
  e.preventDefault();      
  // 선택한 버튼의 selected 클래스 추가
  $(this).addClass('selected');
  
  //선택되지 않은 버튼은 selected 클래스 제거
  $('.polo_left > div > a').not(this).removeClass('selected');

  //눌린 버튼의 href 요소
  let this_href = $(this).attr('href')

  //눌린 버튼의 href가 id인 요소의 hide 제거
  $(this_href).removeClass('hide');

  //눌리지 않은 버튼의 hide 추가
  $('.polo_right > div').not($(this_href)).addClass('hide');

 });




 /* STORY */
$('.story3').hide();
$('.more_btn').click(function(e){
  e.preventDefault();

  $('.story3').show();
  $('.more_btn').css('display','none');

});



 

   
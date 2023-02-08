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




/* RECOMMEND SLIDE */ 
let btnPrev = $('.prev'),
btnAfter = $('.next'),
slideNum = 0,
sliderIdx = $('.collection_slide > div').length,
scrollCnt = 0,
navNum =0;



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
  console.log('2222', slideNum)
});

//슬라이드 이동 함수
function moveSlide(num){
  let vLeft = num*-100+'%';
  $('.collection_slide').css('left', vLeft);
  slideNum = num;
  $('.change_num').text(slideNum+1);
  $('.total').removeClass('changed');
}






/* GIFT SLIDE */ 
let giftPrev = $('.gift_prev'),
giftAfter = $('.gift_next'),
giftSlideNum = 0,
giftSliderIdx = $('.gift_section_wrap > div').length,
giftNavNum =0;


// slide prev버튼
giftPrev.click(function() {
  if(giftSlideNum != 0){
    moveSlide(giftSlideNum-1);
  }else{
    moveSlide(giftSliderIdx-1);
  }
});

// slide after버튼
giftAfter.click(function() {
  if(giftSlideNum != giftSliderIdx -1){
    moveSlide(giftSlideNum+1);    
  }else{
    moveSlide(0);
  }
  console.log('3333', giftSlideNum)
});

//슬라이드 이동 함수
function moveSlide(giftnum){
  //let newleft = num*50+'%';
  let Left = giftnum*-100+'%';
  $('.gift_section_wrap').css('left', Left);
  giftSlideNum = giftnum;
  $('.gift_change_num').text(giftSlideNum+1);
  $('.gift_total').removeClass('changed');
}

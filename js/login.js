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



/* HEART CHECK */
let tabMenu = $('.tab_btn > li');
let tabSubMenu = $('.loginPage_content > div');


$('.tab_btn > li').click(function(e){
  e.preventDefault();
  let idx = tabMenu.index($(this));

  $(this).addClass('on');
  $(this).siblings().removeClass('on');

  tabSubMenu.addClass('on').hide();
  tabSubMenu.eq(idx).show();
  //$('.loginPage_content').siblings().removeClass('on');
});
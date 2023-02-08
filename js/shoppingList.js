
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





/* 페이지 나누기 */

// 페이징 클릭시


$('.number_wrap > div').on('click', function(){
  	var index =  $(this).index();
	$('.shirts_img').removeClass('on');
	$('.shirts_img').eq(index).addClass('on'); // 해당 내용 보임
	$('.number_wrap > div').removeClass('on');
	$(this).addClass('on'); // 불 들어옴

	var offset = $(".top").offset(); //해당 위치 반환
	$("html, body").animate({scrollTop: offset.top},1);
});




/*
var nowIdx = 0; // 현재 페이지

// 기본 함수
function show(i) { 
	nowIdx = i; // 클릭횟수
	var j = i * 3; // 클릭해서 넘어간 1번째 페이지
	$('.number_wrap > div').removeClass('on view');
	$('.number_wrap > div').eq(j).addClass('on'); // 클릭해서 넘어간 1번째 페이징 불
	$('.number_wrap > div').eq(j).addClass('view'); // 클릭해서 넘어간 페이징 3개 보임
	$('.number_wrap > div').eq(j+1).addClass('view');
	$('.number_wrap > div').eq(j+2).addClass('view');
	$('.shirts_img').removeClass('on');
	$('.shirts_img').eq(j).addClass('on'); // 클릭해서 넘어간 1번째 페이지 해당 내용 보임
}
console.log(nowIdx)
// 페이징 123일때 함수
function showFirst() { 
	$('.number_wrap > div').removeClass('view');
	$('.number_wrap > div').eq(0).addClass('view'); // 페이징 3개 보임 (불 처리 안함)
	$('.number_wrap > div').eq(1).addClass('view');
	$('.number_wrap > div').eq(2).addClass('view');
}

// 페이징 마지막일때 함수

function showLast(i) { 
	nowIdx = i; // 클릭횟수
	var j = i * 3; // 클릭해서 넘어간 1번째 페이지
	$('.number_wrap > div').removeClass('view');
	$('.number_wrap > div').eq(j).addClass('view'); // 페이징 마지막 3개 보임 (불 처리 안함)
	$('.number_wrap > div').eq(j+1).addClass('view');
	$('.number_wrap > div').eq(j+2).addClass('view');
}

var total =  $('.number_wrap > div').length;
var result = parseInt(total/3); // 3페이징씩 몇개인지

$('.next').on('click', function(){ // 다음버튼 클릭시
	var viewIdx = nowIdx + 1; // 현재 클릭수 = 이전 클릭수 + 1
	if(viewIdx > result){ // 마지막 페이지인데 다음버튼 클릭하면 (클릭수 초과)
		viewIdx = result; // 계속 마지막 페이지이게
		showLast(viewIdx); // 마지막 페이지 함수 실행
	} else {show(viewIdx);} // 마지막 페이지 아니면 기본 함수 실행
	
});

$('.prev').on('click', function(){ // 이전버튼 클릭시
	var viewIdx = nowIdx - 1; // 현재 클릭수 = 이전 클릭수 -1
	if(viewIdx < 0){ // 첫번째 페이지인데 이전버튼 클릭하면 (클릭수 음수)
		viewIdx = 0; // 계속 첫번째 페이지이게
		showFirst(); // 첫번째 페이지 함수 실행
	} else {show(viewIdx);} // 첫번째 페이지 아니면 기본 함수 실행
	
});

$('.first').on('click', function(){
	show(0);
});

$('.last').on('click', function(){
	show(result);
	$('.paging a').removeClass('on');
	$('.paging a').last().addClass('on');
});
*/

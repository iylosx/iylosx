/********************************************************
* 파 일 명 : main.css
* 작 성 자 : 김솔이
* 작 성 일 : 25-10-23
* 설    명 : 메인페이지에서만 적용되는 js를 저장
*********************************************************/
$(document).ready(function(){

/***********************************
 * 비주얼 slick 팝업 연결!!!!!!!!!!!
 */

$('.visual .popup').slick({
	autoplay: true, //팝업 자동 실행
	autoplaySpeed: 2000, //팝업이 머무는 시간
	speed: 1000, //팝업 전환 속도
	fade: true,  //페이드 효과 적용
	dots: false, //하단 페이지 버튼 (true, false)
	arrows: false,  //다음, 이전팝업 (true, false)
	//pauseOnHover: true, //마우스호버시 일시정지
	infinite: true, //무한반복
});


/***************
 * biz!!!
 * .biz .list ul li 에 마우스를 오버하면 active 클래스를 주고
 * .biz .list에는 over클래스를 추가해준다
 * ----------------언제 out??----------------------
 * 1. li에서 벗어남
 * 2. 다른 li에 오버함?
 * ****************/

	$('.biz .list ul li').on('mouseenter', function(){
		$(this).addClass('active')
		$('.biz .list').addClass('over')
	})
	$('.biz .list ul li').on('mouseleave', function(){
		$(this).removeClass('active')
		$('.biz .list').removeClass('over')
	})


/*********************
 * news !!!!!!!!!!!
 **********************/

const news_swiper = new Swiper('.news .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 36, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		769: {    /* 640px 이상일때 적용 */
			slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 40,
		},
		1025: {    /* 640px 이상일때 적용 */
			slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 49,
		},
	},
	//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
	// loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
	// autoplay: {  /* 팝업 자동 실행 */
	// 	delay: 2500,
	// 	disableOnInteraction: true,
	// },
	scrollbar: 
	{
        el: ".news .ctn_wrap .scrollbar",
        hide: false,
		draggable: true, //스크롤 바 드래그 가능
		dragSize: 150,  //스크롤바 사이즈
		
    },
});

/***********************
 * .service .list ul li에 마우스를 오버햇을 때
 * 오버한 li에 잇는 data-bg값을
 * .service .list ul li의 class로 준다
 * ****************/

	let service_name

	$('.service .list ul li').on('mouseenter', function(){
		service_name =$(this).attr('data-bg')
		// console.log(service_name)
		$('.service .list').attr('data-bg' , service_name)
	})

	$('.service .list ul li').on('mouseleave', function(){
		$('.service .list').attr('data-bg' , '')
	})

})//맨끝

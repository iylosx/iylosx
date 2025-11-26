$(document).ready(function(){

const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

	autoplay: {  /* 팝업 자동 실행 */
		delay: 5000,
		disableOnInteraction: true,
	},

	effect: "fade", /* fade 효과 */

	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */


});

    let mobile_size = 1024
    let window_w
    let device_status 

    function device_chk (){
        window_w = $(window).width()
        if(window_w > mobile_size){
            device_status ='pc'
        }else{
            device_status ='mo'
        }
    }

    device_chk()

    $(window).resize(function(){
        device_chk()
    })

$('.partners .partner_wrap .list li a').on('mouseenter', function() {
	if(device_status =='pc'){
		// 롤링 애니메이션 멈춤
		$('.partners .partner_wrap .list ul').css('animation-play-state', 'paused');
		
		// 현재 hover한 로고만 컬러
		$('.partners .partner_wrap .list li a').removeClass('on');
		$(this).addClass('on');
	}
});

$('.partners .partner_wrap .list li a').on('mouseleave', function() {
	if(device_status =='pc'){
		// 컬러 제거 → 다시 흑백
		$(this).removeClass('on');

		// 롤링 다시 재생
		$('.partners .partner_wrap .list ul').css('animation-play-state', 'running');
	}
});

const product_swiper = new Swiper('.product .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		1024: {    /* 640px 이상일때 적용 */
			slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 20,
		},
	},
	centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
	
	navigation: {
		nextEl: '.product .ctrl_btn .next',
		prevEl: '.product .ctrl_btn .prev',
	},
	
});
$(window).on('scroll mousemove', function(e){  /* html cursor가 마우스 포인터를 따라다니게 하는 값 */
	if(device_status =='pc'){
	$('.cursor').css('left', e.pageX + 'px');
	$('.cursor').css('top', e.pageY + 'px');
	}
});
$('.news .news_wrap .recent , .news .news_wrap .news_inner .news_gr1 , .news .news_wrap .news_inner .news_gr2').hover(function(){ /* 특정한 요소에 마우스를 올렸을때만 on 클래스 주기 */
	if(device_status =='pc'){
	$('.cursor').toggleClass('on');
	}
});

$('#category').on('change', function(){
    this.dataset.selected = "true";
});

})
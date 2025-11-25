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

})
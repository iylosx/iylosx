$(document).ready(function(){

const winner_swiper = new Swiper('.winner .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
        // 450: {    /* nnn px 이상일때 적용 */
		// 	slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
		// 	spaceBetween: 16,
		// },
		769: {    /* nnn px 이상일때 적용 */
			slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 24,
		},
   
	},
	//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
	loop: true  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

});

}) //document ..
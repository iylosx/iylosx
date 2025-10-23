/********************************************************
* 파 일 명 : main.css
* 작 성 자 : 김솔이
* 작 성 일 : 25-10-23
* 설    명 : 메인페이지에서만 적용되는 js를 저장
*********************************************************/
$(document).ready(function(){
    console.log('욘결')

/***********************************
 * 비주얼 slick 팝업 연결!!!!!!!!!!!
 */

$('.visual .popup').slick({
	autoplay: false, //팝업 자동 실행
	autoplaySpeed: 2000, //팝업이 머무는 시간
	speed: 1000, //팝업 전환 속도
	fade: true,  //페이드 효과 적용
	dots: false, //하단 페이지 버튼 (true, false)
	arrows: false,  //다음, 이전팝업 (true, false)
	//pauseOnHover: true, //마우스호버시 일시정지
	infinite: true, //무한반복
});


})//맨끝

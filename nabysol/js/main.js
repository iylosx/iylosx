$(document).ready(function(){

	
    let mobile_size = 1024
    let window_w
    let device_status 
	let mo_768 = 768

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

	const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

		autoplay: {  /* 팝업 자동 실행 */
			delay: 8000,
			disableOnInteraction: true,
		},
	
		effect: "fade", /* fade 효과 */
	
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
	
		pagination: {
			el: '.visual .paging',
			clickable: true,
			renderBullet: function (i, className) {
			return '<button class="' + className + '"><svg viewBox="0 0 73 73" xmlns="http://www.w3.org/2000/svg"><circle cx="36.5" cy="36.5" r="35.5" class="circle"></circle></svg></button>';
			/* svg에는 넓이높이 삭제, svg안에 circle이든 path든 fill/storke 삭제, 그리고 반드시 circle 클래스 추가 */
			}
		},
	
	
	});


	const facility_swiper = new Swiper('.facility .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 30, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			769: {   
				slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 50,
			},
			1025: {    
				slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 170,
			},
		},
		centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
	
		navigation: {
			nextEl: '.facility .ctrl_btn .next',
			prevEl: '.facility .ctrl_btn .prev',
		},
		speed: 1000

	});

	let scrolling = $(window).scrollTop()// 현재스크롤값


        function scroll_chk(){
            scrolling = $(window).scrollTop()


			function bgChangeBySection() {
				let scroll = $(window).scrollTop();
				let winH = $(window).height();
				let winBottom = scroll + winH;
			
				// section 정보 가져오기
				let sol = $('.solutions');
				let box = $('.box');
			
				let solTop = sol.offset().top;
				let solH = sol.outerHeight();
				let boxTop = box.offset().top;
				let boxH = box.outerHeight();
			
				// 노출된 높이 (음수는 0 처리)
				let solExposed = Math.max(0, winBottom - solTop);
				let boxExposed = Math.max(0, winBottom - boxTop);
			
				// 퍼센트 계산 (0 ~ 1 값)
				let solRatio = solExposed / solH; 
				let boxRatio = boxExposed / boxH;
			
			
				//  솔루션 섹션: 10% 보이면 밝게
				if (solRatio >= 0.1 && boxRatio < 0.2) {
					setLightTheme();
				}
				//  박스 섹션: 20% 보이면 어둡게
				else if (boxRatio >= 0.5) {
					setDarkTheme();
				}
				// 초기 영역
				else {
					setDarkTheme();
				}
			}
			
			
			
			// 밝은 테마
			function setLightTheme() {
				$('body').css('background-color', 'var(--light)');
				$('aside.quick .top button').css('color', 'var(--dark)');
				$('header.fixed').css('background-color', 'var(--light2)');
				$('header.fixed .gnb .gnb_wrap .gnb_list ul.depth1 > li > a').css('color', 'var(--main1-c)');
				$('aside.quick .top button , header.fixed .gnb .gnb_wrap .gnb_list ul.depth1 > li > a span , header.fixed .logo')
					.addClass('change');
				$('header.bg_on').css('background-color', 'var(--light50)');
			}
			
			// 어두운 테마
			function setDarkTheme() {
				$('body').css('background-color', 'var(--dark)');
				$('aside.quick .top button').css('color', 'var(--light)');
				$('header.fixed').css('background-color', 'var(--dark)');
				$('header.fixed .gnb .gnb_wrap .gnb_list ul.depth1 > li > a').css('color', 'var(--light2)');
				$('aside.quick .top button , header.fixed .gnb .gnb_wrap .gnb_list ul.depth1 > li > a span , header.fixed .logo')
					.removeClass('change');
				$('header.bg_on').css('background-color', 'var(--dark50)');
			}
			
			
			// 실행
			$(window).on('scroll resize load', function () {
				bgChangeBySection();
			});
			
			
			// 밝은 테마
			function setLightTheme() {
				$('body').css('background-color', 'var(--light)');
				$('aside.quick .top button').css('color', 'var(--dark)');
				$('header.fixed').css('background-color', 'var(--light2)');
				$('header.fixed .gnb .gnb_wrap .gnb_list ul.depth1 > li > a').css('color', 'var(--main1-c)');
				$('aside.quick .top button , header.fixed .gnb .gnb_wrap .gnb_list ul.depth1 > li > a span , header.fixed .logo')
					.addClass('change');
				$('header.bg_on').css('background-color', 'var(--light50)');
			}
			
			// 어두운 테마
			function setDarkTheme() {
				$('body').css('background-color', 'var(--dark)');
				$('aside.quick .top button').css('color', 'var(--light)');
				$('header.fixed').css('background-color', 'var(--dark)');
				$('header.fixed .gnb .gnb_wrap .gnb_list ul.depth1 > li > a').css('color', 'var(--light2)');
				$('aside.quick .top button , header.fixed .gnb .gnb_wrap .gnb_list ul.depth1 > li > a span , header.fixed .logo')
					.removeClass('change');
				$('header.bg_on').css('background-color', 'var(--dark50)');
			}
			
			
			// 실행
			$(window).on('scroll resize load', function () {
				bgChangeBySection();
			});
        }

        scroll_chk()  //문서로딩 후 1번
        $(window).scroll(function(){
            scroll_chk()  // 스크롤할때마다
            
        })


		const solutions_swiper = new Swiper('.solutions .swiper', { /* 팝업을 감싼는 요소의 class명 */
			slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
			spaceBetween: 30, /* 팝업과 팝업 사이 여백 */
			breakpoints: {
				
				1025: {    
					slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
					spaceBetween: 24,
				},
			},
			loop: true, 

			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			}
			
			
		});

		if (window_w <= 786) {
			solutions_swiper.autoplay.start();
		} else {
			solutions_swiper.autoplay.stop();
		}


		$(window).on('pointermove mousemove touchmove', function(e){
			if (!$('.cursor_sol').hasClass('on')) return; // on 아닐 땐 움직이지 않음
		
			$('.cursor_sol').css({
				left: e.pageX + 'px',
				top: e.pageY + 'px'
			});
		});
		$('.solutions .solutions_list .swiper-slide').hover(function(){ /* 특정한 요소에 마우스를 올렸을때만 on 클래스 주기 */
			$('.cursor_sol').toggleClass('on');
		});

		
		const medic_swiper = new Swiper('.medic .swiper', { /* 팝업을 감싼는 요소의 class명 */

			autoplay: {  /* 팝업 자동 실행 */
				delay: 5000,
				disableOnInteraction: true,
			},
		
			effect: "fade", /* fade 효과 */
		
			loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

			
		});

		$(window).on('pointermove mousemove touchmove', function(e){
			if (!$('.cursor_box').hasClass('on')) return; // on 아닐 땐 움직이지 않음
		
			$('.cursor_box').css({
				left: e.pageX + 'px',
				top: e.pageY + 'px'
			});
		});
		$('.box .review a , .box .treatment a').hover(function(){ /* 특정한 요소에 마우스를 올렸을때만 on 클래스 주기 */
			$('.cursor_box').toggleClass('on');
		});

		

		var handleCookie = {
			setCookie: function (name, val, exp) {
				var date = new Date();
				date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
				document.cookie = name + "=" + val + ";expires=" + date.toUTCString() + ";path=/";
			},
			getCookie: function (name) {
				var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
				return value ? value[2] : null;
			}
		};
		
		// 페이지 로드 시 팝업 자동 체크
		$('.layerpopup').each(function(){
			let popName = $(this).data('name');  // pop01, pop02...

			if (device_status == 'mo') {
				$('.layerpopup').each(function(){
					if ($(this).hasClass('recent')) {
						$(this).show();
					} else {
						$(this).hide();
					}
				});
			}

			if(handleCookie.getCookie(popName) === 'y'){
				$(this).hide();
			} else {
				$(this).show();
			}
		});
		
		// 닫기 버튼 - 자기 팝업만 닫기
		$('.layerpopup .close').on('click', function(){
			let target = $(this).data('name');
			$('.layerpopup[data-name="'+ target +'"]').hide();
			$('.popup_bg').hide()
		});
		
		// 오늘 하루 보지 않기
		$('.layerpopup .today').on('click', function(){
			let target = $(this).data('name');
			handleCookie.setCookie(target, 'y', 1);
			$('.layerpopup[data-name="'+ target +'"]').hide();
			$('.popup_bg').hide()
		});


})//끝!!!

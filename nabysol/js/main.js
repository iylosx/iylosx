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


			if(scrolling > 3440){
                $('body').css(
					'background-color', 'var(--light)'
				)
				$('aside.quick .top button').css(
					'color' , 'var(--dark)'
				)
				$('header.fixed').css(
					'background-color', 'var(--light2)'
				)
				if(device_status =='pc'){
					$('header.fixed .gnb .gnb_wrap .gnb_list ul.depth1 > li > a').css(
						'color' , 'var(--main1-c)'
					)
				}
				$('aside.quick .top button , header.fixed .gnb .gnb_wrap .gnb_list ul.depth1 > li > a span , header.fixed .logo').addClass('change')
				
				$('header.bg_on').css(
					'background-color', 'var(--light50)'
				)
			
            }else{
				$('body').css(
					'background-color', 'var(--dark)'
				)
				$('aside.quick .top button').css(
					'color' , 'var(--light)'
				)
				$('header.fixed').css(
					'background-color', 'var(--dark)'
				)
				$('header.fixed .gnb .gnb_wrap .gnb_list ul.depth1 > li > a').css(
					'color' , 'var(--light2)'
				)
				$('aside.quick .top button , header.fixed .gnb .gnb_wrap .gnb_list ul.depth1 > li > a span , header.fixed .logo , header.bg_on').removeClass('change')

				$('header.bg_on').css(
					'background-color', 'var(--dark50)'
				)
			}
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


		// $(window).on('pointermove mousemove touchmove', function(e){  /* html cursor가 마우스 포인터를 따라다니게 하는 값 */
		// 	console.log('지금')
		// 	$('.cursor_sol').css('left', e.pageX + 'px');
		// 	$('.cursor_sol').css('top', e.pageY + 'px');
		// });
		// $('.solutions .solutions_list .swiper-slide').hover(function(){ /* 특정한 요소에 마우스를 올렸을때만 on 클래스 주기 */
		// 	$('.cursor_sol').toggleClass('on');
		// });

		
		const medic_swiper = new Swiper('.medic .swiper', { /* 팝업을 감싼는 요소의 class명 */

			// autoplay: {  /* 팝업 자동 실행 */
			// 	delay: 7000,
			// 	disableOnInteraction: true,
			// },
		
			effect: "fade", /* fade 효과 */
		
			loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		
		});
		

})//끝!!!

$(document).ready(function(){
        
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 5000,
        //     disableOnInteraction: true,
        // },

        effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },
        

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .btn_prev',  
        },

    });
    // visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    // visual_swiper.autoplay.start();  /* 재생 기능 */
    $('.visual .ctrl_btn .btn_stop').on('click', function(){
        visual_swiper.autoplay.stop();
        $(this).hide()
        $('.visual .ctrl_btn .btn_play').show()
        console.log('정지버튼')
    })
    $('.visual .ctrl_btn .btn_play').on('click', function(){
        visual_swiper.autoplay.start();
        $(this).hide()
        $('.visual .ctrl_btn .btn_stop').show()
        console.log('재생버튼')
    })


    //-->> 브라우저 로딩 시 쳌 // 스크롤 시 쳌 ..
    //동일한 체크를 두 번 실행 .. -->> 이런 땐 함수 처리

    let scrolling    //<<< 변수 선언
    function scroll_chk(){    //함수선언
        scrolling = $(window).scrollTop()
        if(scrolling > 0){
        $('header').addClass('fixed')
        }else{
        $('header').removeClass('fixed')
        }
    }

    //문서 로딩 시 단 1번만 함수 실행
    scroll_chk()

    //브라우저가 스크롤 될 때마다 실행
    $(window).scroll(function(){
        scroll_chk()
    })


        const book_swiper = new Swiper('.book .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 3, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 678px 이상일때 적용 */
                slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        
        navigation: {
            nextEl: '.book .book_wrap .ctrl_btn .btn_next',
            prevEl: '.book .book_wrap .ctrl_btn .btn_prev',
        },
    });


}) /// 맨끝 !!
$(document).ready(function(){


    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },
    
        effect: "fade", /* fade 효과 */
    
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    
        
    
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .btn_wrap .btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .btn_wrap .btn_prev',  
        },
    
    });
   
    $('.visual .btn_wrap .btn_play').on('click', function(){
        visual_swiper.autoplay.start();
        $(this).hide()
        $('.visual .btn_wrap .btn_stop').show()

    })
    $('.visual .btn_wrap .btn_stop').on('click', function(){
        visual_swiper.autoplay.stop();
        $(this).hide()
        $('.visual .btn_wrap .btn_play').show()
    })
    

        const webzine_swiper = new Swiper('.webzine .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto' , /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 'auto',
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        // loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 2500,
        //     disableOnInteraction: true,
        // },
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
        // pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
        //     el: '.swiper-pagination', /* 해당 요소의 class명 */
        //     clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        //     type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        // },
    });

    $('footer .top').on('click', function(){
        // console.log('연결')
        $('html, body').animate({
            scrollTop: 0
        }, 500)

    })

})//document

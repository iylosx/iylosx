$(document).ready(function(){
    let visual_time = 8000
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: visual_time,
            disableOnInteraction: true,
        },
    
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });
    $('.visual .ctrl_btn .stop ').on('click', function(){
        visual_swiper.autoplay.stop();
        $(this).hide()
        $('.visual .ctrl_btn .play ').show()
        $('.visual .ctrl_btn .paging_bar span ').stop()
    })
    $('.visual .ctrl_btn .play ').on('click', function(){
        visual_swiper.autoplay.start();
        $(this).hide()
        $('.visual .ctrl_btn .stop ').show()
        paging_bar_ani()
        
    })

    function paging_bar_ani() {
        $('.visual .ctrl_btn .paging_bar span ').stop() //애니메이션 종료
        $('.visual .ctrl_btn .paging_bar span ').width(0) //슬라이드 교체 시 넓이0 초기화
        $('.visual .ctrl_btn .paging_bar span ').animate({
            width: '100%'
        }, visual_time)
    }

    // 처음 로드 시 한번 실행
    paging_bar_ani();

    // 슬라이드 변경될 때마다 실행
    visual_swiper.on('slideChange', function () {
        paging_bar_ani();
        $('.visual .ctrl_btn .play').hide()
        $('.visual .ctrl_btn .stop').show()
        

    });
})
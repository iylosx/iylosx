$(document).ready(function(){

    //비주얼팝업
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

    //스팟팝업

    let window_w = $(window).width();
    let isCenter = window_w < 1451 ? true : false;

    const spot_swiper = new Swiper('.spot .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        centeredSlides: isCenter,
        breakpoints: {
            769: {    /* 769px 이상일때 적용 */
                slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
                 centeredSlides: isCenter,
            },
        },

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
       
    });

    function syncMapToSlide() {
        // 실제 슬라이드 index (duplicate 제외된!)
        let real = spot_swiper.realIndex;
    
        // data-name 가진 원본 슬라이드 리스트만 추출
        let originalSlides = $('.spot .swiper-slide[data-name]')
            .filter(function () {
                return !$(this).hasClass('swiper-slide-duplicate');
            });
    
        // 현재 real index에 해당하는 슬라이드의 data-name 가져오기
        let name = originalSlides.eq(real).data('name');
    
        // 버튼 active 조정
        $('.spot .spot_map .txt button').removeClass('active');
        $('.spot .spot_map .txt button[data-name="' + name + '"]').addClass('active');
    }
    
    
    /* --------------------------------------
        2) 슬라이드 바뀔 때마다 싱크
    --------------------------------------- */
    spot_swiper.on('slideChange', function () {
        syncMapToSlide();
    });
    
    
    /* --------------------------------------
        3) 버튼 클릭 → 해당 슬라이드 이동
    --------------------------------------- */
    $('.spot .spot_map .txt button').on('click', function () {
        let name = $(this).data('name');
    
        // name 같은 원본 슬라이드 index 찾기 (duplicate 제외)
        let originalSlides = $('.spot .swiper-slide[data-name]')
            .filter(function () {
                return !$(this).hasClass('swiper-slide-duplicate');
            });
    
        let targetIndex = originalSlides.index(
            originalSlides.filter('[data-name="' + name + '"]')
        );
    
        // loop 상태에서도 올바르게 이동
        spot_swiper.slideToLoop(targetIndex);
    });
    
    
    /* --------------------------------------
        4) 페이지 로드 시 1회 초기 싱크 실행
    --------------------------------------- */
    $(document).ready(function () {
        setTimeout(syncMapToSlide, 100); 
    });
    

    const footer_swiper = new Swiper('footer .f_button .list .banner .banner_list .swiper', { /* 팝업을 감싼는 요소의 class명 */

        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            769: {    /* 769px 이상일때 적용 */
                slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        navigation: {
            nextEl: 'footer .f_button .list .banner .ctrl_btn .next',
            prevEl: 'footer .f_button .list .banner .ctrl_btn .prev',
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });


    
    AOS.init({
    offset: 150, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
    duration: 800, // 애니메이션 효과가 작동되는 시간
    easing: 'ease', // 가속도
    });
    
}) // js end
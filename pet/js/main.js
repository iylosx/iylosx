$(document).ready(function(){

    //지금 어떤 브라우저 사이즈 상태인지 확인 //

    let mobile_size = 1024
    let win_w
    let device_status  //pc or mobile

    function device_chk(){   //== 함수정의!!
        win_w = $(window).width()
        if(win_w > mobile_size) {
            device_status = 'pc'
        }else {
            device_status = 'mo'
        }
        console.log(device_status)
    }
    
    device_chk()   //로딩되면 한번 실행!!

    $(window).resize(function(){
        device_chk()
    })

    //*****************확인 끝..//

        //************메뉴 오버스타일 제어**********//
        $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
            if(device_status == 'pc'){
                $('header').addClass('menu_pc')
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
                $(this).addClass('over')
            }
        })
        
        $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
            if(device_status == 'pc'){
                $(this).removeClass('over')
            }
        })
        $('header').on('mouseleave', function(){
            $(this).removeClass('menu_pc')
        })
        $('header .util .sch .sch_open').on('focusin', function(){
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
        })
        $('header .util .login').on('focusout', function(){
            $('header').removeClass('menu_pc')
        })
    
        
        //**************비주얼에 스위퍼팝업 연결*****************//
        let visual_time = 8000
        const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

            autoplay: {  /* 팝업 자동 실행 */
                delay: visual_time,
                disableOnInteraction: true,
            },
        
            effect: "fade", /* fade 효과 */
        
            loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        
        });
        // visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        // visual_swiper.autoplay.start();  /* 재생 기능 */
        $('.visual .ctrl_btn .stop').on('click', function(){
            visual_swiper.autoplay.stop();
            $(this).hide()
            $('.visual .ctrl_btn .play').css('display', 'flex')
            $('.visual .ctrl_btn .paging .bar span').stop() //애니메이션 종료
        })
        $('.visual .ctrl_btn .play').on('click', function(){
            visual_swiper.autoplay.start();
            $(this).hide()
            $('.visual .ctrl_btn .stop').css('display', 'flex')
            updateCurrent()
        })


        // 전체 슬라이드 개수 (loop 상태에서도 실제 슬라이드 개수만)
        const totalSlides = $('.visual .swiper .swiper-slide').not('.swiper-slide-duplicate').length;
        $('.visual .paging .total').text(totalSlides); // 총 개수 표시

        // 현재 슬라이드 번호 표시 함수
        function updateCurrent() {
            let realIndex = visual_swiper.realIndex + 1; // 실제 인덱스 (0부터 시작하므로 +1)
            $('.visual .paging .current').text(realIndex);
            $('.visual .ctrl_btn .paging .bar span').stop() //애니메이션 종료
            $('.visual .ctrl_btn .paging .bar span').width(0) //슬라이드 교체 시 넓이0 초기화
            $('.visual .ctrl_btn .paging .bar span').animate({
                width: '100%'
            }, visual_time)
        }

        // 처음 로드 시 한번 실행
        updateCurrent();

        // 슬라이드 변경될 때마다 실행
        visual_swiper.on('slideChange', function () {
            updateCurrent();

        });

        /***************************
         * 모바일 메뉴
         * header .gnb .gnb_wrap ul.depth1 > li > a
         * 1. 닫혀있는 메뉴를 클릭하면 기존에 열려있던 다른 메뉴를 닫고 나만 open 추가
         * 2. 열린 메뉴(open)를 클릭하면 나 자신(this)을 닫음(removeClass)
         * ++ 링크이동 무시
         * 열린메뉴와 닫힌메뉴 구분법? class = open ..
         ***************************/
        $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function (e){
            if(device_status == 'mo') {
                e.preventDefault();
                if($(this).parent().hasClass('open') == true){
                    $(this).next().slideUp() 
                    $(this).parent().removeClass('open')
                }else{
                    $('header .gnb .gnb_wrap ul.depth1 > li.open > ul.depth2').slideUp()
                    $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                    $(this).parent().addClass('open')
                    $(this).next().slideDown()
                }
            }
        })


        /********************************
         * 열기를 클릭하면 header mo 추가
         * header .gnb .gnb_open
         * ******************************/

        $('header .gnb .gnb_open').on('click', function(){
            $('header').addClass('menu_mo')
        })
        $('header .gnb .gnb_close').on('click', function(){
            $('header').removeClass('menu_mo')
        })

        

        /**************************
         * 헤더고정 = 스크롤을 내리면 header에 fixed
         * *******************/

        let scrolling //스크롤값

        function scroll_chk(){
            scrolling = $(window).scrollTop()
            if(scrolling > 0){
                $('header').addClass('fixed')
            }else{
                $('header').removeClass('fixed')
            }
        }

        scroll_chk() // 1. 로딩되고 1번실행 ~
        $(window).scroll(function(){
            scroll_chk()
        })



        /****************************************************
         * find 팝업 시작 !!
         */
        const find1_swiper = new Swiper('.find .item1 .swiper', { /* 팝업을 감싼는 요소의 class명 */
            slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
            spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
            breakpoints: {
                640: {    /* 640px 이상일때 적용 */
                    slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                    spaceBetween: 24,
                },
            },
            
            navigation: {
                nextEl: '.find .item1 .next',
                prevEl: '.find .item1 .prev',
            },
            
        });
        const find2_swiper = new Swiper('.find .item2 .swiper', { /* 팝업을 감싼는 요소의 class명 */
            slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
            spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
            breakpoints: {
                640: {    /* 640px 이상일때 적용 */
                    slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                    spaceBetween: 24,
                },
            },
            
            navigation: {
                nextEl: '.find .item2 .next',
                prevEl: '.find .item2 .prev',
            },
            
        });

})//맨끝


$(document).ready(function(){

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
        // console.log(device_status)
    }
    $(window).resize(function(){
        device_chk()
    })


    device_chk()


    /*헤더탑 팝업*/
    const header_top_swiper = new Swiper('header .header_top .header_pop .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5500,
            disableOnInteraction: true,
        },
    
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    
       
    });  

 let scrolling = $(window).scrollTop()// 현재스크롤값


        function scroll_chk(){
            scrolling = $(window).scrollTop()
            // console.log(diff_scroll)/


            if(scrolling > 0){
                $('header .header_menu').addClass('fixed')
            }else{
                $('header .header_menu').removeClass('fixed')
            }
        }

        scroll_chk()  //문서로딩 후 1번
        $(window).scroll(function(){
            scroll_chk()  // 스크롤할때마다
            
        })
        
        /****메뉴 오버******/



    /*팝업 여닫기*/
    $('header .header_top .header_pop .close button').on('click', function(){
        $('header .header_top').slideUp()
        $('header .header_menu .util .popup button').fadeIn()
    }) 
    $('header .header_menu .util .popup button').on('click', function(){
        $('header .header_top').slideDown()
        $('header .header_menu .util .popup button').fadeOut()
    })

    //퀵메뉴

    $('aside .quick_open').on('click', function(){
        $(this).hide()
        $('aside .quick_close').show()
        $('aside .quick_wrap').fadeIn("fast")
    })
    $('aside .quick_close').on('click', function(){
        $(this).hide()
        $('aside .quick_open').show()
        $('aside .quick_wrap').fadeOut("fast")
    })

    $('aside .quick_wrap ul li.top').on('click', function(){

        $('html, body').animate({
            scrollTop:0
        },500)

    })

    /*header_menu 1차 메뉴에 마우스를 오버하면 open_pc클래스를 주고 fixed 스타일과 동일한 스타일이 들어감*/

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        if(device_status == 'pc'){
        $('header .header_menu').addClass('open_pc')
        $(this).addClass('on')
        
        }
    })
     $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
        if(device_status == 'pc'){
        $('header .header_menu').removeClass('open_pc')
        $(this).removeClass('on')
        }
     })
    
})//js end
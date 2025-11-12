$(document).ready(function(){

    /*헤더탑 팝업*/
    const header_top_swiper = new Swiper('header .header_top .header_pop .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5500,
            disableOnInteraction: true,
        },
    
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    
       
    });  

    /*팝업 여닫기*/
    $('header .header_top .header_pop .swiper ul li .close').on('click', function(){
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
    

})//js end
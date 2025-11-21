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
    }

    device_chk()

    $(window).resize(function(){
        device_chk()
    })

    
    $('header .gnb .gnb_wrap .gnb_list ul.depth1 > li').on('mouseenter', function(){
        if(device_status =='pc'){
            $('header').addClass('menu_pc')
            $(this).addClass('over')
        }
        
    })
    $('header .gnb .gnb_wrap .gnb_list ul.depth1 > li').on('mouseleave', function(){
        if(device_status =='pc'){
            $(this).removeClass('over')
            $('header').removeClass('menu_pc')
        }
    })

    let scrolling = $(window).scrollTop()// 현재스크롤값
        let prev_scroll  // 이전에 스크롤된값
        let diff_scroll // 차이값
    
        function scroll_chk(){
            prev_scroll = scrolling
            scrolling = $(window).scrollTop()
            diff_scroll = prev_scroll - scrolling
            // console.log(diff_scroll)/

            if(diff_scroll < 0){  //스크롤을 위로 올리면
                $('header').addClass('up')
            }else{  //아래로 내리면
                $('header').removeClass('up')    
            }

            if(scrolling > 0){
                $('header').addClass('fixed')
            }else{
                $('header').removeClass('fixed')
            }
        }

        scroll_chk()  //문서로딩 후 1번
        $(window).scroll(function(){
            scroll_chk()  // 스크롤할때마다
            
        })

        //모바일메뉴!!!!
        $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(){
            if(device_status == 'mo'){
                // e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
                gnb_open = $(this).parent().hasClass('on')
                gnb_active = $(this).parent().find('.active').length
                //console.log(gnb_open)
                if((gnb_open == true) || (gnb_active > 0)){ //열려있다면
                    $(this).parent().removeClass('on')
                    $(this).next().slideUp()
                }else{
                    $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
                    $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp()
                    $(this).parent().addClass('on')
                    $(this).next().slideDown()
                }
            }
        });
        

        ///header .gnb .gnb_wrap .gnb_close
        //header .gnb .gnb_open
        $('header .gnb .gnb_open').on('click', function(){
            $('header').addClass('menu_mo')
        })
        $('header .gnb .gnb_wrap .gnb_close').on('click', function(){
            $('header').removeClass('menu_mo')
        })
})
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
    

    $('header .gnb .gnb_wrap .gnb_list ul li').on('mouseenter', function(){
        if(device_status =='pc'){
            $('header').addClass('menu_pc')
            $(this).addClass('over')
        }
    })

    $('header .gnb .gnb_wrap .gnb_list ul.depth1 > li').on('mouseenter', function(){
        if(device_status =='pc'){
            $(this).addClass('over');
            $('header').addClass('menu_pc');
        
    
            let hasDepth2 = $(this).children('ul.depth2').length > 0;
        
            if (hasDepth2) {
                $('header').addClass('bg_on');
            } else {
                $('header').removeClass('bg_on');
            }
        }
    });
    
    $('header .gnb .gnb_wrap .gnb_list ul.depth1 > li').on('mouseleave', function(){
        if(device_status =='pc'){
            $(this).removeClass('over');
            $('header').removeClass('menu_pc');
            $('header').removeClass('bg_on');
        }
    });

    $('header .gnb .gnb_wrap .gnb_list ul.depth1 > li > a').on('click', function(e){
        if(device_status =='mo'){
            e.preventDefault()
            gnb_open = $(this).parent().hasClass('on')
            if(gnb_open == true){ //열려있다면
                $(this).parent().removeClass('on')
                $(this).next().slideUp()
            }else{
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
                $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp()
                $(this).parent().addClass('on')
                $(this).next().slideDown()
            }
        }
    })
    
    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_mo')
    })
    $('header .gnb .gnb_wrap .gnb_close').on('click', function(){
        $('header').removeClass('menu_mo')
    })



 let scrolling = $(window).scrollTop()// 현재스크롤값


        function scroll_chk(){
            scrolling = $(window).scrollTop()

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

        $('aside .top button').on('click', function(){
             $('html, body').animate({
            scrollTop:0
            },500)
        })

})//끝!!
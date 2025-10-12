$(document).ready(function(){

    $('header .gnb').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('header').addClass('menu_over')
        }
    })
    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_over')
    })
    
   
        $('header .gnb .gnb_wrap ul.depth1  > li').on('mouseenter focusin', function(){
            if(device_status == 'pc'){
                $(this).addClass('on')
            }
        })
        $('header .gnb .gnb_wrap ul.depth1  > li').on('mouseleave focusout', function(){
            $(this).removeClass('on')
        })

        $('header .util .lang .lang_open').on('focusin', function(){
            $('header').removeClass('menu_over')
        })
    
    
    
    
    /***********************
    1. a에 걸린 링크가 pc에서는 이동하지만, 모바일에서는 2차가 열리는 버튼으로 작용해야 한다 
       -- 1024 이하부터는 모바일로 간주, 1025이상부터 pc
    2. 모바일에서 1차메뉴 클릭 시 2차메뉴 보이게 (li에 on 클래스 추가) 
    3. 내가 열리면 다른 애는 닫혀야 한다 >> 클릭했을 때 메뉴가 열렸는지 닫혔는지 판단 (li에 on이 있나?)
    *******************************/
    
    let mobile_size = 1024
    let device_status //pc 모바일 구분
    let win_w //브라우저 넓이

    function size_chk(){
        win_w = $(window).width()
        if(win_w > mobile_size){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        console.log(device_status)
    }
    size_chk() // 함수호출 ==> 브라우저가 로딩되고 한번 실행됨
    $(window).resize(function(){
        size_chk() // 함수호출 ==> 브라우저가 리사이즈 될때마다 실행됨
    })

    
    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click touchstart', function(e){
        if(device_status == 'mobile'){
            e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
        
            if($(this).parent().hasClass('on') == true){
                $(this).parent().removeClass('on')
                $(this).next().slideUp()
            }else{
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
                $('header .gnb .gnb_wrap ul.depth1  > li > ul.depth2').slideUp()
                $(this).parent().addClass('on')
                $(this).next().slideDown()
            }    
        }
    });
    

    $('header .gnb .gnb_open').on('click', function (){
        $('header').addClass('menu_over')
        $('header .gnb .gnb_bg').show()
    })
     $('header .gnb .gnb_close').on('click', function (){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_bg').hide()
    })



}) //꽁다리
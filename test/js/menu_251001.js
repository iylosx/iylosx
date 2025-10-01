$(document).ready(function(){

    //메뉴에 마우스를 오버하면 header에 menu_over 추가
    //header 흰색 배경 밖으로 마우스가 나가면 menu_over 삭제
    
    $('header .gnb').on('mouseenter', function(){
        $('header').addClass('menu_over')
    })
    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_over')
    })

    //1 마우스를 오버한 1차메뉴 li에 over 클래스
    //2 이전에 오버했던 메뉴 li에서는 over 삭제
    //이벤트 대상 ?? li .. 

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        $(this).addClass('over')
    })
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
        $(this).removeClass('over')
    })

    /*
        1. header .gnb .gnb_wrap ul.depth1 > li에 open 클래스가 추가
        2. 다른 열린 메뉴가 있다면 닫아줌
        3. 메뉴를 다시 클릭하면 닫힘 

        -->> 열린메뉴와 닫힌메뉴 구분 방법 
        li에 open이 있으면 열린 메뉴 ... 없으면 닫힌 메뉴
    */

        $('header .gnb .gnb_wrap ul.depth1 > li').on('click', function(){
            let open_true = $(this).hasClass('open')
            console.log(open_true)
            if(open_true==true){ //열려있다면 
                $(this).removeClass('open')
            }else{ //닫혀있다면
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $(this).addClass('open')
            }
        })

        /*
            header .gnb .gnb_open  를 클릭하면 header에 menu_open 클래스 추가
            header .gnb .gnb_close 를 클릭하면 header에 menu_open 클래스 제거
        */
       $('header .gnb .gnb_open').on('click', function(){
            $('header').addClass('menu_open')
       })
       $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
   })

})//꽁다리

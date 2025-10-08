$(document).ready(function(){

    $('header .gnb').on('mouseenter focusin', function(){
        $('header').addClass('menu_over')
    })
    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_over')
    })
    

    $('header .gnb .gnb_wrap ul.depth1  > li').on('mouseenter', function(){
        $(this).addClass('on')
    })
    $('header .gnb .gnb_wrap ul.depth1  > li').on('mouseleave', function(){
        $(this).removeClass('on')
    })
}) //꽁다리
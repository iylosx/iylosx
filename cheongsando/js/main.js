$(document).ready(function(){

    console.log('연결되었습니다.')//console연결확인

    $('.tour .list ul li').on('mouseenter', function(){
        //console.log('오버했다')
        $('.tour .list ul li').removeClass('on')
        $(this).addClass('on')
    })

    $('footer .right_area .family button.open').on('click', function(){
        //console.log('열기 클릭함')
        $('footer .right_area .family').addClass('open')
    })

    $('footer .right_area .family button.close').on('click', function(){
        //console.log('닫기 클릭함')
        $('footer .right_area .family').removeClass('open')
    })

    $('footer .right_area .top').on('click', function(){
        // console.log('탑클릭했음')
        let scrolling = $(window).scrollTop()
        console.log(scrolling)
        //$(window).scrollTop(0)
        $('html, body').animate({
            scrollTop : 0
        }, 500)
    })


}) //document.ready
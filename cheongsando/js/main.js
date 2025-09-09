$(document).ready(function(){

    console.log('연결되었습니다.')//console연결확인

    $('.tour .list ul li').on('mouseenter', function(){
        //console.log('오버했다')
        $('.tour .list ul li').removeClass('on')
        $(this).addClass('on')
    })

    $('footer .right_area .family button.open').on('click', function(){
        //console.log('클릭함')
        $('footer .right_area .family').addClass('open')
    })
})
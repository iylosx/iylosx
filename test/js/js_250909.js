console.log('연결되었습니다.')//콘솔에 뜨는 애들 .. 테스트 용도로 씁니다

$(document).ready(function(){

    console.log('111111')

    $('.box').on('mouseenter', function(){
        console.log('오버했다 ~~!~!~!!~')
        $('.box').addClass('on')
    })//mouseenter
    $('.box').on('mouseleave', function(){
        console.log('내려갔다!@!@!!')
        $('.box').removeClass('on')
    })//mouseleave

})//$(document).ready
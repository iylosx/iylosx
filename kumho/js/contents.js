/************************
 * 각 컨텐츠에서만 구현됨
 * *********************************/


/****************
 *      인터랙티브 시작은 영역이 브라우저 상단에 닿았을 때
 *        --> 영역의 상단값 보다 스크롤 된 값이 크면 인터랙티브 시작
 *          ceo_area_start < ceo_scroll -- function !
 * 
 *      종료는 영역의 하단이 브라우저 하단 위로 올라올 때 
 *          ceo_area_end - ceo_win_h < ceo_scroll
 * 
 *      //영역 안에 들어가기 전 (인터랙티브 시작 전)
 *      //영역에 들어갔을 때 (인터랙티브 진행중)
 *      //영역에서 들어갔을 때 (인터랙티브 종료)
 * *******************/

$(document).ready(function(){
    let ceo_length = $('.ctn_ceo').length
    function ceo_ani(){
        let ceo_win_h = $(window).height() //브라우저 높이
        let ceo_scroll = $(window).scrollTop()  /// 현재 스크롤값
        let ceo_area_name = $('.ctn_ceo .ceo_head') // 선택자
        let ceo_wrap = $('.ctn_ceo .ceo_head .ceo_photo') //인터랙티브 대상을 감싸는 범위영역
        let ceo_obj = $('.ctn_ceo .ceo_head .ceo_photo .ceo_img') //넓어져야 하는 애 (대상)
        let ceo_obj_start = 50
        let ceo_obj_end = 100
        let ceo_obj_count //현재 계산한 넓이값

        let ceo_obj_bg = $('.ctn_ceo .ceo_head .ceo_photo .ceo_img .bg') //배경 어둡게 깔아주기
        let ceo_obj_bg_start = 0
        let ceo_obj_bg_end = 0.6
        let ceo_obj_bg_count // 현재 opacity 값

        let ceo_area_start = ceo_area_name.offset().top //시작위치 (맨위서부터 계산한)
        let ceo_area_end = ceo_area_start + ceo_area_name.height() -  ceo_win_h // 끝나는 위치 (위에서부터 계산)
        let ceo_total = ceo_area_end - ceo_area_start //전체스크롤값
        let ceo_diff   //진행중에 스크롤 된 값
        let ceo_per 
        
        // console.log(ceo_total)

        /*
            진행중일 때 몇퍼센트 스크롤 했느냐?????
            (1000px 동안 인터랙티브 할건데 100px스크롤 하게 되면 10% .. )
            계산식 
            현재 스크롤 값 *100 / 전체스크롤값

            처음의 넓이값 50 - 종료 넓이값 100
            진행율이 50% === 75
            (종료값 - 처음값) * 진행율/100 + 처음값
            (50)*0.5 + 50
            25+50 = 75
        */

        // console.log('시작', ceo_area_start , '종료', ceo_area_end, '스크롤',ceo_scroll)
        if(ceo_scroll > ceo_area_end){
            // console.log('종료')
            ceo_wrap.attr('data-status', 'end')
            ceo_obj.width(ceo_obj_end + '%')
            ceo_obj.height(ceo_obj_end + '%')
            ceo_obj_bg.css('opacity', ceo_obj_bg_end)
        }else if (ceo_scroll < ceo_area_start){
            // console.log('시작전')
            ceo_wrap.attr('data-status', 'start')
            ceo_obj.width(ceo_obj_start + '%')
            ceo_obj.height(ceo_obj_start + '%')
            ceo_obj_bg.css('opacity', ceo_obj_bg_start)
        }else{
            // console.log('진행중')
            ceo_wrap.attr('data-status', 'ing')
            ceo_diff = ceo_scroll - ceo_area_start
            ceo_per = ceo_diff * 100 / ceo_total
            // console.log(ceo_diff, ceo_total, ceo_per)
            ceo_obj_count = ceo_obj_start + (ceo_obj_end - ceo_obj_start) * (ceo_per / 100)
            ceo_obj_count = ceo_obj_count * 1.5
            if(ceo_obj_count > ceo_obj_end){
                ceo_obj_count = 100
            }
            // console.log(ceo_obj_count)
            ceo_obj.width(ceo_obj_count + '%')
            ceo_obj.height(ceo_obj_count + '%')
            ceo_obj_bg_count = ceo_obj_bg_start + (ceo_obj_bg_end - ceo_obj_bg_start) * (ceo_per / 100)
            ceo_obj_bg_count = ceo_obj_bg_count * 3
            if(ceo_obj_bg_count > ceo_obj_bg_end){
                ceo_obj_bg_count = ceo_obj_bg_end
            }
            ceo_obj_bg.css('opacity', ceo_obj_bg_count)

        }
        
    }



    //console.log($('.ctn_ceo').length)
    if(ceo_length > 0){
        ceo_ani() //브라우저가 로딩되면 1번만
    }
    $(window).scroll(function(){
        if(ceo_length > 0){
            ceo_ani() //브라우저가 스크롤 될때마다
        }
    })



})//맨끝!!!!!!
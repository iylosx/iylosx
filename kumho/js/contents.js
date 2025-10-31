$(document).ready(function(){
    let ceo_length = $('.ctn_ceo').length;
    function ceo_ani(){
        let ceo_win_h = $(window).height();
        let ceo_scroll = $(window).scrollTop();
        let ceo_area_name = $('.ctn_ceo .ceo_head');
        if(ceo_area_name.length === 0) return; // 요소 없을 때 오류 방지

        let ceo_wrap = $('.ctn_ceo .ceo_head .ceo_photo');
        let ceo_obj = $('.ctn_ceo .ceo_head .ceo_photo .ceo_img');
        let ceo_obj_start = 50, ceo_obj_end = 100, ceo_obj_count;
        let ceo_obj_bg = $('.ctn_ceo .ceo_head .ceo_photo .ceo_img .bg');
        let ceo_obj_bg_start = 0, ceo_obj_bg_end = 0.6, ceo_obj_bg_count;

        let ceo_area_start = ceo_area_name.offset().top;
        let ceo_area_end = ceo_area_start + ceo_area_name.height() - ceo_win_h;
        let ceo_total = ceo_area_end - ceo_area_start;
        let ceo_diff, ceo_per;

        if(ceo_scroll > ceo_area_end){
            ceo_wrap.attr('data-status', 'end');
            ceo_obj.css({width: ceo_obj_end + '%', height: ceo_obj_end + '%'});
            ceo_obj_bg.css('opacity', ceo_obj_bg_end);
        } else if (ceo_scroll < ceo_area_start){
            ceo_wrap.attr('data-status', 'start');
            ceo_obj.css({width: ceo_obj_start + '%', height: ceo_obj_start + '%'});
            ceo_obj_bg.css('opacity', ceo_obj_bg_start);
        } else {
            ceo_wrap.attr('data-status', 'ing');
            ceo_diff = ceo_scroll - ceo_area_start;
            ceo_per = ceo_diff * 100 / ceo_total;
            ceo_obj_count = ceo_obj_start + (ceo_obj_end - ceo_obj_start) * (ceo_per / 100);
            ceo_obj_count = Math.min(ceo_obj_count * 1.5, ceo_obj_end);
            ceo_obj.css({width: ceo_obj_count + '%', height: ceo_obj_count + '%'});
            ceo_obj_bg_count = ceo_obj_bg_start + (ceo_obj_bg_end - ceo_obj_bg_start) * (ceo_per / 100);
            ceo_obj_bg_count = Math.min(ceo_obj_bg_count * 3, ceo_obj_bg_end);
            ceo_obj_bg.css('opacity', ceo_obj_bg_count);
        }
    }

    if(ceo_length > 0) ceo_ani();
    $(window).on('scroll', function(){
        if(ceo_length > 0) ceo_ani();
    });

    /***************************************************
     *      회 사 소 개         >             연   혁
     * *************************************************/
    let history_length = $('.ctn_history').length;

    const snbScroll = function() {
        const $menu_wrap = $(".ctn_history .his_bar ul");
        const $menu_li = $menu_wrap.find("li");
        function scrollToElement($element) {
            const containerWidth = $menu_wrap.width();
            const itemWidth = $element.outerWidth(true);
            const totalItemsWidth = $menu_wrap[0].scrollWidth;
            const newScrollPosition = ($element.index() === 0) ? 0 :
                ($element.index() === $menu_li.length - 1) ? totalItemsWidth - containerWidth :
                $element.position().left + $menu_wrap.scrollLeft() - (containerWidth - itemWidth) / 2;
            $menu_wrap.animate({scrollLeft: newScrollPosition}, 500);
        }
        const $activeItem = $menu_wrap.find(".active");
        if ($activeItem.length) scrollToElement($activeItem);
    };

    if(history_length > 0) snbScroll();

    function his_head(){
        let obj_name = $('.ctn_history .his_head');
        if(obj_name.length === 0) return;
        let obj_txt = 'h3 strong';
        let scrolling = $(window).scrollTop();
        let win_h = $(window).height();
        for(let i=0; i<obj_name.length; i++){
            let obj_top = obj_name.eq(i).offset().top;
            let obj_start = obj_top - win_h + (win_h * 0.4);
            let obj_end = obj_top - win_h + (win_h * 0.8);
            let obj_per = 0;
            if(scrolling > obj_end) obj_per = 100;
            else if(scrolling > obj_start) obj_per = (scrolling - obj_start) / (obj_end - obj_start) * 100;
            obj_name.eq(i).find(obj_txt).css('width', obj_per + '%');
        }
    }

    function his_area(){
        let obj_name = $('.ctn_history .his_wrap');
        let obj_nav = $('.ctn_history .his_bar ul li');
        let scrolling = $(window).scrollTop();
        let win_h = $(window).height();
        for(let i=0; i<obj_name.length; i++){
            let obj_top = obj_name.eq(i).offset().top;
            let obj_start = obj_top - win_h + (win_h * 0.4);
            let obj_end = obj_top + obj_name.eq(i).height() - (win_h * 0.6);
            if((scrolling < obj_end) && (scrolling > obj_start)){
                obj_nav.removeClass('active');
                obj_nav.eq(i).addClass('active');
            }
        }
    }

    function his_nav(){
        let scrolling = $(window).scrollTop();
        let win_h = $(window).height();
        let obj_area = $('.ctn_history');
        if(obj_area.length === 0) return;
        let obj_name = $('.ctn_history .his_bar');
        let obj_top = obj_area.offset().top;
        let obj_start = obj_top;
        let obj_end = obj_top + obj_area.height() - win_h;

        if(scrolling > obj_end){
            // console.log('안보임');
            obj_name.addClass('hide')
        }else if(scrolling < obj_start){
            // console.log('시작전');
            obj_name.addClass('hide')
        }else {
            // console.log('진행중');
            obj_name.removeClass('hide')
        }
    }

    if(history_length > 0){
        his_head();
        his_area();
        his_nav();
    }

    $(window).on('scroll resize', function(){
        if(history_length > 0){
            his_head();
            his_area();
            his_nav();
        }
    });
});

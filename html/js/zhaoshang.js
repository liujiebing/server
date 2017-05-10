(function(){
    var ua = navigator.userAgent.toLowerCase();
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
        (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
            (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
                (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
                    (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

    var $TapTop = $('.tap_top');
    var scrollFunc = function(e) {
        e = e || window.event;
        var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        if (scrollTop > 50) {
            $('.div_top').hide();
            if ($TapTop.hasClass('tap_top_hide')) {
                $TapTop.removeClass('tap_top_hide');
            }
        }
        else {
            $('.div_top').show();
            if (!$TapTop.hasClass('tap_top_hide')) {
                $TapTop.addClass('tap_top_hide');
            }
        }

        var scrolledLength =  $('body').height() - scrollTop;
        if (scrolledLength < 600) {
            $('.div_bottom').show();
        }
        else {
            $('.div_bottom').hide();
        }
    }

    $TapTop.click(function() {
        if (Sys.firefox){
            document.documentElement.scrollTop = 0;
        }
        $('body').scrollTop(0);
    });

    if(document.addEventListener){
        document.addEventListener('DOMScroll',scrollFunc,false);
    }
    window.onscroll=document.onscroll=scrollFunc;
    scrollFunc();
})();
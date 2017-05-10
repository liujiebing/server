(function(){
    var $textscroll = $('.text-scroll div.frame');

    var itemHeight = 222;
    var setTextscrollItem = function() {
        itemHeight = $textscroll[0].offsetHeight;
        $('.title-wrapper').css(
            "height",itemHeight
        );
    };


    var projectsScroll = function(){
        var PS = projectsScroll;
        PS.curIndex = 0;
        PS.enabled = true;
        var $nav = $(".opacity-anim");
        PS.count = $('div.opacity-anim ul li').length;
        PS.$ScrollItem = $('.scroll_item');
        var $textScroll = $('.text-scroll .scroll')[0];

        PS.moveTo = function(index) {
            if (index < 0) {
                return;
            }
            else if (index > PS.count - 1) {
                return;
            }

            PS.curIndex = index;

            for (var i = 0; i < PS.$ScrollItem.length; i++) {
                var curItem = $(PS.$ScrollItem[i]);
                if (i < index) {
                    if (!curItem.hasClass("scroll-pre")) {
                        curItem.removeClass("scroll-current scroll-next").addClass("scroll-pre");
                    }
                }
                else if (i == index) {
                    if (!curItem.hasClass("scroll-current")) {
                        curItem.removeClass("scroll-pre scroll-next").addClass("scroll-current");
                    }
                }
                else {
                    if (!curItem.hasClass("scroll-next")) {
                        curItem.removeClass("scroll-pre scroll-current").addClass("scroll-next");
                    }
                }
            }
            $nav.find("li").removeClass("active").eq(index).addClass("active");

            var transformStyle1 = '-' + (parseInt(itemHeight) * index) + 'px';
            $(".frame .scroll").animate({top:transformStyle1},"fast");
        }

        PS.timestamp = 0;
        PS.minIntervals = 1200;
        PS.moveToPre = function() {
            if (PS.curIndex <= 0) {
                return;
            };
            var Tmptimestamp = Date.parse(new Date());
            if (Tmptimestamp - PS.timestamp < PS.minIntervals) {
                return;
            };
            PS.timestamp = Tmptimestamp;
            PS.moveTo(PS.curIndex - 1);
        }

        PS.moveToNext = function() {
            if (PS.curIndex >= PS.count - 1) {
                return;
            };
            var Tmptimestamp = Date.parse(new Date());
            if (Tmptimestamp - PS.timestamp < PS.minIntervals) {
                return;
            };
            PS.timestamp = Tmptimestamp;
            PS.moveTo(PS.curIndex + 1);
        }
    };

    var scrollFunc = function(e) {
        e = e || window.event;
        var bNext = true;

        if (e.wheelDelta) {
            if (e.wheelDelta > 0) {
                bNext = false;
            };
        }
        else {
            if (e.detail < 0) {
                bNext = false;
            };
        }

        if (bNext) {
            projectsScroll.moveToNext();
        }
        else {
            projectsScroll.moveToPre();
        }
    };

    $('.opacity-anim').find("a").click(function(e) {
        var index = $(this).closest("li").index();
        projectsScroll.moveTo(index);
    });

    if(document.addEventListener){
        document.addEventListener('DOMMouseScroll',scrollFunc,false);
    }
    window.onmousewheel=document.onmousewheel=scrollFunc;

    projectsScroll();
    setTextscrollItem();
    window.onresize = setTextscrollItem;
})();
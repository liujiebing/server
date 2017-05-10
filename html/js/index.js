var xigou = {};
xigou.fn = {};

(function(xigou, window, document) {
	var $nav = $(".opacity-anim");
	var $btnShowCode = $('.btn_show_code');
	var $divCode = $('.div_code');

	$nav.find("a").click(function(e) {
		var index = $(this).closest("li").index();
		xigou.fn.projectsScroll.moveTo(index);

	});

	$btnShowCode.mouseenter(function() {
		$divCode.show();
	});

	$btnShowCode.mouseleave(function() {
		$divCode.hide();
	});

	var resetBtnPos = function() {
		var padding = $('.a_top').height() * 33/226;
		var itemWidh = $('.a_top').height() * 183/226;
		var itemHeight = itemWidh * 48/183;

		//$('.div_top_btn').css("left",padding);
		//$('.btn_item').css("width", itemWidh);
		//$('.btn_item').css("height", itemHeight);

		//$('.div_code').css("left", 2*itemWidh + 20);
		//$('.div_code').css("width", itemWidh);
		//$('.div_code').css("height", itemWidh);
		//$('.div_code').css("top", itemWidh * 70 / 194);
	};
	resetBtnPos();
	window.onresize = resetBtnPos;

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
			xigou.fn.projectsScroll.moveToNext();
		}
		else {
			xigou.fn.projectsScroll.moveToPre();
		}		
	}

	if(document.addEventListener){
	    document.addEventListener('DOMMouseScroll',scrollFunc,false); 
	}
	window.onmousewheel=document.onmousewheel=scrollFunc;	

	xigou.fn.projectsScroll = function (){
		var PS = xigou.fn.projectsScroll;
		var $root = $(this);
		var $projects = $root.find(".project");
		var $titlesScroll = $('.text-scroll div.scroll')[0];
		var $shopis = $('.shop_is div.scroll')[0];

		PS.enabled = true;
		PS.index = 0;

		var count = $('div.opacity-anim ul li').length;
		PS.moveTo = function (index) {
			PS.index = index;

			var i = 0;
			$('.scroll_item').each(function() {
				if (i < index) {
					if (!$(this).hasClass("scroll-pre")) {
						$(this).removeClass("scroll-current scroll-next").addClass("scroll-pre");
					}
				}
				else if (i == index) {
					if (!$(this).hasClass("scroll-current")) {
						$(this).removeClass("scroll-pre scroll-next").addClass("scroll-current");
					};
				} else{
					if (!$(this).hasClass("scroll-next")) {
						$(this).removeClass("scroll-pre scroll-current").addClass("scroll-next");
					};
				};
				i++;
			})
			$nav.find("li").removeClass("active").eq(index).addClass("active");
			$('.text-scroll div.scroll div').removeClass("onCur");
			$('.text-scroll div.scroll div').eq(index).addClass("onCur");

			var transformStyle1 = '-' + (145 * index) + 'px';
			var transformStyle2 = '-' + (70 * index) + 'px';
			$("#iText").animate({top:transformStyle1},"fast");

			$("#iText1").animate({top:transformStyle2},"fast");
			

			if (index == count - 1) {
				if (!$('.menu').hasClass('menu_hide')) {
					$('.menu').addClass('menu_hide');
				}
			}
			else {
				if ($('.menu').hasClass('menu_hide')) {
					$('.menu').removeClass('menu_hide');
				}
			}
		}

		var timestamp = Date.parse(new Date()); 
		timestamp = 0;
		PS.moveToPre = function() {
			if (PS.index <= 0) {
				return;
			};
			var Tmptimestamp = Date.parse(new Date());
			if (Tmptimestamp - timestamp < 1500) {
				return;
			};
			timestamp = Tmptimestamp;
			PS.moveTo(PS.index - 1);
		}
		PS.moveToNext = function() {
			if (PS.index >= count - 1) {
				return;
			};
			var Tmptimestamp = Date.parse(new Date());			
			if (Tmptimestamp - timestamp < 1500) {
				return;
			};
			timestamp = Tmptimestamp;
			PS.moveTo(PS.index + 1);
		}
	}
	xigou.fn.projectsScroll();

}(xigou, window, document));
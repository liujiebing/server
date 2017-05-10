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

    // 物流
    $('#show_logistics').click(function() {
        var $this = $(this);
        if ($this.hasClass('down')) {   // 隐藏
            $this.removeClass('down').addClass('up');
            $('#logistics_detail .div_detail').hide();
            $('#logistics_detail_a').show();
        }
        else {  // 显示
            $this.removeClass('up').addClass('down');
            $('#logistics_detail .div_detail').show();
            $('#logistics_detail_a').hide();
        }
    });
    $('#logistics_detail_a').click(function(){
        var $this =  $('#show_logistics');
        $this.removeClass('up').addClass('down');
        $('#logistics_detail .div_detail').show();
        $('#logistics_detail_a').hide();
    });

    // 售后
    $('#show_aftersales').click(function() {
        var $this = $(this);
        if ($this.hasClass('down')) {   // 隐藏
            $this.removeClass('down').addClass('up');
            $('#aftersales_detail .div_detail').hide();
            $('#aftersales_detail_a').show();
        }
        else {  // 显示
            $this.removeClass('up').addClass('down');
            $('#aftersales_detail .div_detail').show();
            $('#aftersales_detail_a').hide();
        }
    });
    $('#aftersales_detail_a').click(function(){
        var $this =  $('#show_aftersales');
        $this.removeClass('up').addClass('down');
        $('#aftersales_detail .div_detail').show();
        $('#aftersales_detail_a').hide();
    });

    // 优惠券
    $('#show_coupon').click(function() {
        var $this = $(this);
        if ($this.hasClass('down')) {   // 隐藏
            $this.removeClass('down').addClass('up');
            $('#coupon_detail .div_detail').hide();
            $('#coupon_detail_a').show();
        }
        else {  // 显示
            $this.removeClass('up').addClass('down');
            $('#coupon_detail .div_detail').show();
            $('#coupon_detail_a').hide();
        }
    });
    $('#coupon_detail_a').click(function(){
        var $this = $('#show_coupon');
        $this.removeClass('up').addClass('down');
        $('#coupon_detail .div_detail').show();
        $('#coupon_detail_a').hide();
    });

    // 商品
    $('#show_items').click(function() {
        var $this = $(this);
        if ($this.hasClass('down')) {   // 隐藏
            $this.removeClass('down').addClass('up');
            $('#items_detail .div_detail').hide();
            $('#items_detail_a').show();
        }
        else {  // 显示
            $this.removeClass('up').addClass('down');
            $('#items_detail .div_detail').show();
            $('#items_detail_a').hide();
        }
    });
    $('#items_detail_a').click(function(){
        var $this = $('#show_items');
        $this.removeClass('up').addClass('down');
        $('#items_detail .div_detail').show();
        $('#items_detail_a').hide();
    });

    // 实名认证
    $('#show_auth').click(function() {
        var $this = $(this);
        if ($this.hasClass('down')) {   // 隐藏
            $this.removeClass('down').addClass('up');
            $('#auth_detail .div_detail').hide();
            $('#auth_detail_a').show();
        }
        else {  // 显示
            $this.removeClass('up').addClass('down');
            $('#auth_detail .div_detail').show();
            $('#auth_detail_a').hide();
        }
    });
    $('#auth_detail_a').click(function(){
        var $this = $('#show_auth');
        $this.removeClass('up').addClass('down');
        $('#auth_detail .div_detail').show();
        $('#auth_detail_a').hide();
    });

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
		console.log(scrolledLength);
        if (scrolledLength < 1800) {
            $('.div_bottom_bg').show();
			$('.bottom_desc_title').show();
        }
        else {
            $('.div_bottom_bg').hide();
        }
    };

    $TapTop.click(function() {
        if (Sys.firefox){
            document.documentElement.scrollTop = 0;
        }
        $('body,html').scrollTop(0);
    });

    if(document.addEventListener){
        document.addEventListener('DOMScroll',scrollFunc,false);
    }
    window.onscroll=document.onscroll=scrollFunc;
})();
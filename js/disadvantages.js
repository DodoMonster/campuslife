$(function(){
    var $navLi=$(".nav-pills li"),
        $tda=$(".mao"),
        length=$navLi.lengths;
    $navLi.each(function(i){
        $navLi.eq(i).click(function(){
            $navLi.removeClass("active");
            $(this).addClass("active");
            console.log(i);
            var j=length-i;
            $("body").stop(false,true).animate({
                scrollTop:$("#item_"+j).offset().top-30
            },800);
        });
    });
    $tda.each(function(i){
        $tda.eq(i).click(function(){
            console.log(i);
            var j=i+1;
            // console.log($("#item_"+j));
            $("body").stop(false,true).animate({
                scrollTop:$("#item_"+j).offset().top-30
            },800);
        });
    });

    $(".gotoTop a").click(function(){
        $("body").stop(false,true).animate({
            scrollTop:0
        },800);
    });

    $(window).scroll(function(){
        //当九宫格看不见时自动显示顶部导航栏
        var bodyTop=$("#item_1").offset().top-80,
            scTop=$(window).scrollTop();
        if(scTop>=bodyTop){
            $("ul.nav").fadeIn();
        }
        else {
            $("ul.nav").fadeOut();
        }
    })
})
$(".menu").click(function(){
    if ($(".navigation").is(":hidden")){
        $(".navigation").slideDown();
        $(".menu").addClass("menuGo");
    }
    else{
        $(".navigation").slideUp();
        $(".menu").removeClass("menuGo");
    }
});

function imgReload()
{
    var imgHeight = 0;
    var wtmp = $("body").width();
    $(".banner ul li").css({width:wtmp + "px"});
    // $(".banner ul").css({height:900+'px'});
}

$(window).resize(
    function(){
        imgReload();
    }
);

$(document).ready(function(e) {
    imgReload();
    var unslider = $('.banner').unslider({
        dots: true,
        fluid: true
    }),
    data = unslider.data('unslider');

    $('.unslider-arrow').click(function() {
        var fn = this.className.split(' ')[1];
        data[fn]();
    });
});

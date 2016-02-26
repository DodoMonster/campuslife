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

        var dis_1=$("#item_1").offset().top-80,
            dis_2=$("#item_2").offset().top-80,
            dis_3=$("#item_3").offset().top-80,
            dis_4=$("#item_4").offset().top-80,
            dis_5=$("#item_5").offset().top-80,
            dis_6=$("#item_6").offset().top-80;
            console.log(scTop,dis_1,dis_2,dis_3,dis_4);
            if(scTop<dis_1){
                $navLi.removeClass("active");
                $navLi.eq(0).addClass("active");
            }
            else if(scTop<=dis_2){
                $navLi.removeClass("active");
                $navLi.eq(6).addClass("active");
            }
            else if(scTop<=dis_3){
                $navLi.removeClass("active");
                $navLi.eq(5).addClass("active");
            }
            else if(scTop<=dis_4){
                $navLi.removeClass("active");
                $navLi.eq(4).addClass("active");
            }
            else if(scTop<=dis_5){
                $navLi.removeClass("active");
                $navLi.eq(3).addClass("active");
            }
            else if(scTop<=dis_6){
                $navLi.removeClass("active");
                $navLi.eq(2).addClass("active");
            }
            else{
                $navLi.removeClass("active");
                $navLi.eq(1).addClass("active");
            }
    })

})

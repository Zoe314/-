
    
    // 轮播图

	// 调用轮轮播图播图的方法
	$('.carousel').carousel({
		interval:3000
	})

    //打字效果
    //要输出的内容
    var str ='爱是恒久忍耐，又有恩慈,爱是不嫉妒;爱是不自夸,不张狂,不作害羞的事;不求自己的益处,不轻易发怒;不计算人的恶,不喜欢不义,只喜欢真理;凡事包容,凡事相信,凡事盼望,凡事忍耐;爱是永不止息-----爱的颂歌';
    var s = 0;

    //定义函数
    function typist1(){
        $('.contt_left p').html(str.substring(0,s));

        //判断
        if(s++>str.length){
            s = 0;
            // 计时器
            setTimeout('typist1()',10000);
        }else{
            setTimeout('typist1()',500);
        }
    }
    typist1();

    //时光轴
    (function(e){
        function b(a){
            console.log(scrollTop);
            a=a.replace(/left|top/g,"0px");
            a=a.replace(/right|bottom/g,"100%");
            a=a.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
            a=a.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
            return[parseFloat(a[1],10),a[2],parseFloat(a[3],10),a[4]]}
            if(!document.defaultView||!document.defaultView.getComputedStyle){
                var f=e.curCSS;
                e.curCSS=function(a,c,b){
                    "background-position"===c&&(c="backgroundPosition");
                    if("backgroundPosition"!==c||!a.currentStyle||a.currentStyle[c])
                    return f.apply(this, arguments);
                    var g=a.style;
                    return!b&&g&&g[c]?g[c]:f(a,"backgroundPositionX",b)+" "+f(a,"backgroundPositionY",b)
                }
            }
            var d=e.fn.animate;
            e.fn.animate=function(a){
                "background-position"in a&&(a.backgroundPosition=a["background-position"],delete a["background-position"]);
                "backgroundPosition"in a&&(a.backgroundPosition="("+a.backgroundPosition);
                return d.apply(this,arguments)
            };
            e.fx.step.backgroundPosition=function(a){
                if(!a.bgPosReady){
                    var c=e.curCSS(a.elem,"backgroundPosition");
                    c||(c="0px 0px");c=b(c);a.start= [c[0],c[2]];
                    c=b(a.end);
                    a.end=[c[0],c[2]];
                    a.unit=[c[1],c[3]];
                    a.bgPosReady=!0}c=[];
                    c[0]=(a.end[0]-a.start[0])*a.pos+a.start[0]+a.unit[0];
                    c[1]=(a.end[1]-a.start[1])*a.pos+a.start[1]+a.unit[1];
                    a.elem.style.backgroundPosition=c[0]+" "+c[1]
                }
        }
    )(jQuery);

    (function(e){e.extend(e.fx.step,{
        backgroundPosition:function(b){
            function f(a){
                a=a.replace(/left|top/g,"0px");
                a=a.replace(/right|bottom/g,"100%");
                a=a.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
                a=a.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
                return[parseFloat(a[1],10),a[2],parseFloat(a[3],10),a[4]]
            }
            if(0===b.state&&"string"==typeof b.end){
                var d=e.curCSS(b.elem,"backgroundPosition"),d=f(d);
                b.start=[d[0],d[2]];d=f(b.end);b.end=[d[0],d[2]];
                b.unit=[d[1],d[3]]}d=[];
                d[0]=(b.end[0]-b.start[0])* b.pos+b.start[0]+b.unit[0];
                d[1]=(b.end[1]-b.start[1])*b.pos+b.start[1]+b.unit[1];
                b.elem.style.backgroundPosition=d[0]+" "+d[1]
            }
        }
    )})(jQuery);
                
    $(function(){
        function e(){
            c=$(".list li").eq(d).find(".year").html();
            $(".timeblock").attr("thisyear",c);
            var a=c.split(""),b=["numf","nums","numt","numfo"];
            for(i=0;4>i;i++)
            $("."+b[i]+"").stop(!0,!1).animate({backgroundPosition:"0px "+-24*a[i]},{duration:200})}
            $(".list .liwrap").mouseover(function(){
                $(".list li").removeClass("thiscur");
                $(this).parent().addClass("thiscur")
            });
            var b=0,f=$(".list li").length,d=0,a=!0,c;
            (function(){
                var a=$(window).height();
                890<=a&&(row=6);
                800<=a&&890>a&&(row=5);
                726<=a&& 800>a&&(row=4);
                726>a&&(row=3)}
            )();
            var h=f-row;
            $(".list").height(110*row);
            $("#content").height(110*row+25);
            $.fn.liOut=function(){
                $(this).find(".lileft").animate({left:"-400px"},500,"easeOutQuart");
                $(this).find(".liright").animate({right:"-700px"},500,"easeOutQuart")
            };
            $.fn.liIn=function(){
                $(this).find(".lileft").animate({left:"0px"},500,"easeOutQuart");
                $(this).find(".liright").animate({right:"0px"},500,"easeOutQuart")
            };
            $(".arrowdown").click(function(){
                a&&parseInt($(".list li:first").css("marginTop"))> -110*h&&(d++,b--,a=!1,$(".list li").eq(d-1).liOut(),$(".list li").eq(d+row-1).liIn(),$(".list li:first").animate({marginTop:110*b},600,"easeInOutQuad",function(){
                    a=!0;$(".arrowdown").css("opacity",1);
                    $(".arrowdown").removeClass("arrow_active")
                }),e()
            )});
            $(".arrowup").click(function(){
                a&&0!=parseInt($(".list li:first").css("marginTop"))&&(b++,d--,a=!1,$(".list li").eq(d).liIn(),$(".list li").eq(d+row).liOut(),$(".list li:first").animate({marginTop:110*b},600,"easeInOutQuad",function(){
                    a=!0;$(".arrowup").css("opacity", 1);
                    $(".arrowup").removeClass("arrow_active")
                }),e()
            )});
            $(".list").mousewheel(function(b,c){
                Math.abs(c);
                if(a){
                    var d=parseInt($(".list li:first").css("marginTop"));
                    0<c?0!=d&&($(".arrowup").addClass("arrow_active"),$(".arrowup").trigger("click")):d>-110*h&&($(".arrowdown").addClass("arrow_active"),$(".arrowdown").trigger("click"))
                }
            });
            $(".timeblock").attr("thisyear",c);
            $(".list li:gt("+(row-1)+")").find(".lileft").css({left:"-400px"});
            $(".list li:gt("+(row-1)+")").find(".liright").css({right:"-700px"});

    }); 

 <!-- 图片移入放大 -->
        $('.entry img').mouseenter(function(){
            //alert(111);
            $(this).css('transform','scale(1.2)');
        }).mouseleave(function(){
            $(this).css('transform','scale(1)');
        })
        
        <!-- 字体自动改变颜色 -->
        $('.zi').mouseenter(function(){
              $(this).find("a").css('color',changeBg());
              $(this).find("p").css('color',changeBg());

        }).mouseleave(function(){
            $(this).find("a").css('color',changeBg());
            $(this);
            $(this).find("p").css('color',changeBg());

        })
        <!-- 随机数函数 -->
        function rand(m,n){
            return Math.floor(Math.random()*(n-m+1)) + m;
        }
        
        function changeBg(){
            // 你想改变谁
           return 'rgb('+rand(0,255)+','+rand(0,255)+','+rand(0,255)+')';
        }
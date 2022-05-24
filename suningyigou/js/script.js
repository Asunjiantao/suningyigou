$(function() {
    $(".close").click(function() {
        $(".top-active").hide();
        $(".minus").show();
    })
    $(".minus").click(function() {
        $(".top-active").show();
        $(this).hide();
    })
    $(".nav-li").mouseenter(function() {
        var index = $(this).index();
        $(".nav-none").eq(index).slideDown();
        $(this).css({
            'backgroundColor': '#fff'
                // 'borderLeft': '1px solid #eee',
                // 'borderRight': '1px solid #eee'
        })
        $(this).find('span').html('&#xe685;')

    }).mouseleave(function() {
        $(".nav-none").hide();
        $(this).css({
            'backgroundColor': '#f5f5f5',
            'borderLeft': '0px solid #eee',
            'borderRight': '0px solid #eee'
        })
        $(this).find('span').html('&#xe686;')
    })

    $(".nav-r-li").mouseenter(function() {
        var index = $(this).index();
        $(this).children().siblings().slideDown();
        $(this).css({
            'backgroundColor': '#fff'
                // 'borderLeft': '1px solid #eee',
                // 'borderRight': '1px solid #eee'
        })
        $(this).find('span').html('&#xe685;');

    }).mouseleave(function() {
        $(".nav-r-none").hide();
        $(this).css({
            'backgroundColor': '#f5f5f5',
            'borderLeft': '0px solid #eee',
            'borderRight': '0px solid #eee'
        })
        $(this).find('span').html('&#xe686;')
    });

    // 轮播图
    var mySwiper = new Swiper('#swiperA', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true, // 开启自定切换  默认3s
        autoplay: {
            delay: 1000
        },

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })

    // 分类
    $(".lbt-left li").mouseenter(function() {
        $(this).css({
            'background': '#f3f3f3'
        })
        var index = $(this).index();
        $('.left-none').eq(index).show();
    }).mouseleave(function() {
        $(this).css({
            'background': '#fff'
        })
        var index = $(this).index();
        $('.left-none').eq(index).hide();
    })



    // 监听滚动条
    var boxtop1 = $(".lbt-container").offset().top;
    console.log(boxtop);
    var boxtop2 = $(".new-con").offset().top;
    console.log(boxtop2)
        // 绑定页面滚动事件
    $(window).scroll(function() {
        // 获取dom距离顶端的距离
        // console.log($(document).scrollTop());
        var boxnone = $(document).scrollTop();
        if (boxnone >= boxtop1 && boxnone <= boxtop2) {
            $(".left-scroll").show();
        } else {
            $(".left-scroll").hide();
        }

    });



    //////////////返回顶部
    $(".top").click(function() {
        $('body, html').animate({
            scrollTop: 0
        })
    })


    //////////////////////////////////////////////
    $(".tu li").mouseenter(function() {

        $(this).find('.container-con-hide').show();
    }).mouseleave(function() {
        $(this).find('.container-con-hide').hide();
    });
    $(".tu2 li").mouseenter(function() {
        $(this).find('.container-con-hide').show();
    }).mouseleave(function() {
        $(this).find('.container-con-hide').hide();
    });
    /////////////////////////////////////////////
    var mySwiper = new Swiper('#swiperB', {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true, // 开启自定切换  默认3s
        speed: 1000, //过度
        autoplay: {
            delay: 1000
        }
    });
    // mySwiper.el.mouseover = function() {
    //     mySwiper.autoplay.stop();
    // }

    // //鼠标离开开始自动切换
    // mySwiper.el.mouseout = function() {
    //     mySwiper.autoplay.start();
    // };

    $(".l-ul ul li").click(function() {
        var index = $(this).index();
        $(".l-ul ul li").eq(index).addClass('active').siblings().removeClass('active');
    });
    // 滚动监听    限时秒杀
    function Myxsms() {
        var boxtop = $(".xsms").offset().top - 200;

        $(window).scroll(function() {
            // 获取dom距离顶端的距离
            // console.log($(document).scrollTop());
            var boxnone = $(document).scrollTop();
            if (boxnone >= boxtop) {
                $(".l-ul ul li").eq(0).addClass('active').siblings().removeClass('active')
            } else {
                // $(".left-scroll").hide();
            }
        });
    }
    Myxsms();
    // 点击跳转 限时秒杀
    $(".l-ul-a").click(function() {
        $(document).scrollTop($(".xsms").offset().top - 200);
    });
    // 点击跳转 立即领卷
    $(".l-ul-b").click(function() {
        $(document).scrollTop($(".ljzx").offset().top - 200);
    });
    // 点击跳转 苏宁直播
    $(".l-ul-c").click(function() {
        $(document).scrollTop($(".snzb").offset().top - 200);
    });
    // 点击跳转 频道广场
    $(".l-ul-d").click(function() {
        $(document).scrollTop($(".pdgc").offset().top - 200);
    });
    // 点击跳转 为您推荐
    $(".l-ul-e").click(function() {
        $(document).scrollTop($(".wntj").offset().top - 200);
    });
    // 滚动监听   立即领卷
    function Myljzx() {
        var boxtop = $(".ljzx").offset().top - 200;
        $(window).scroll(function() {
            // 获取dom距离顶端的距离
            // console.log($(document).scrollTop());
            var boxnone = $(document).scrollTop();
            if (boxnone >= boxtop) {
                $(".l-ul ul li").eq(1).addClass('active').siblings().removeClass('active')
            } else {
                // $(".left-scroll").hide();
            }
        });
    }
    Myljzx();
    // 滚动监听   苏宁直播
    function Mysnzb() {
        var boxtop = $(".snzb").offset().top - 200;

        $(window).scroll(function() {
            // 获取dom距离顶端的距离
            // console.log($(document).scrollTop());
            var boxnone = $(document).scrollTop();
            if (boxnone >= boxtop) {
                $(".l-ul ul li").eq(2).addClass('active').siblings().removeClass('active')
            } else {
                // $(".left-scroll").hide();
            }
        });
    }
    Mysnzb();
    // 滚动监听    频道广场
    function Mypdgc() {
        var boxtop = $(".pdgc").offset().top - 200;

        $(window).scroll(function() {
            // 获取dom距离顶端的距离
            // console.log($(document).scrollTop());
            var boxnone = $(document).scrollTop();
            if (boxnone >= boxtop) {
                $(".l-ul ul li").eq(3).addClass('active').siblings().removeClass('active')
            } else {
                // $(".left-scroll").hide();
            }
        });
    }
    Mypdgc();
    // 滚动监听    为您推荐
    function Mywntj() {
        var boxtop = $(".wntj").offset().top - 200;

        $(window).scroll(function() {
            // 获取dom距离顶端的距离
            // console.log($(document).scrollTop());
            var boxnone = $(document).scrollTop();
            if (boxnone >= boxtop) {
                $(".l-ul ul li").eq(4).addClass('active').siblings().removeClass('active')
            } else {
                // $(".left-scroll").hide();
            }
        });
    }
    Mywntj();


    $(".new-nav li").mouseenter(function() {
        $(".new-nav li").eq($(this).index()).addClass('new-nav-active').siblings().removeClass("new-nav-active");
        $(".new-con ul").eq($(this).index()).show().siblings().hide();
        $(document).scrollTop($(".new-gc-title").offset().top + 500);

    });



    var boxtop = $(".new-nav").offset().top;
    console.log(boxtop);
    $(window).scroll(function() {
        // 获取dom距离顶端的距离
        // console.log($(document).scrollTop());
        var boxnone = $(document).scrollTop();
        if (boxnone >= boxtop) {
            $('.new-nav').css({
                'position': 'fixed',
                'top': '0',
                'left': ' calc(50% - 595px)',
                'z-index': '99999999999',
                'boxShadow': '1px 1px 5px #999',
                'width': '1190px',
                'margin': '10px auto'
            })
        } else {
            $('.new-nav').css({
                'position': '',
                'top': '',
                'left': '',
                'z-index': '99999999999'
            })
        }
    });



    $(".message li").mouseenter(function() {
        var index = $(this).index();
        $(".a-none").eq(index).show().css({
            'background': '#ffaa01',
            'color': '#383838'
        });
        $(this).children().css({
            'background': '#ffaa01'
        })

    }).mouseleave(function() {
        $(".a-none").hide();
        $(this).children().css({
            'background': ''
        })
    });

    $(".r-fix-con2 li").mouseenter(function() {
        var indexa = $(this).index();
        $(".a-none1").eq(indexa).show().css({
            'background': '#ffaa01',
            'color': '#383838'
        });
        $(this).children().css({
            'background': '#ffaa01'
        })

    }).mouseleave(function() {
        $(".a-none1").hide();
        $(this).children().css({
            'background': ''
        })
    })
    $(".r-fix-bootom li").mouseenter(function() {
        var indexb = $(this).index();
        $(".a-none2").eq(indexb).show().css({
            'background': '#ffaa01',
            'color': '#383838'
        });
        $(this).children().css({
            'background': '#ffaa01'
        })

    }).mouseleave(function() {
        $(".a-none2").hide();
        $(this).children().css({
            'background': ''
        })
    })
})
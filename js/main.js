//導盲磚滑動到指定地點
function click_scroll_t() {
    var scroll_offset = $("#main").offset();
    $("body,html").animate({
        scrollTop: scroll_offset.top
    }, 0);
    $("a[href='javascript:click_scroll_c()']").focus()
}
function click_scroll_u() {
    var scroll_offset = $("#header").offset();
    $("body,html").animate({
        scrollTop: scroll_offset.top
    }, 0);
}
function click_scroll_c() {
    var scroll_offset = $("#main").offset();
    $("body,html").animate({
        scrollTop: scroll_offset.top
    }, 0);
}
function click_scroll_b() {
    var scroll_offset = $("#footer").offset();
    $("body,html").animate({
        scrollTop: scroll_offset.top
    }, 0);
}

// footerNav JS start
$(function () {
    $('.footer_click').click(function () {
        $(this).toggleClass('up_st');
        $('.footer_link_box').slideToggle(400);
    });
});
// footerNav JS end
// menu fix JS start
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.navbar-nav').addClass('fixed_header');
        // $(".recommend_link").css("position", "relative");
    } else {
        $('.navbar-nav').removeClass('fixed_header');
        // $(".recommend_link").css("position", "absolute");
    }
});
// menu fix JS end
// window
$(window).on("load resize scroll", function () {
});
// f_index start
// $(function () {
//     $('#date_start, #date_end').datepicker({
//         language: 'zh-TW',
//         format: 'yyyy-mm-dd',
//         todayHighlight: true,
//         autoclose: true,
//     });
// });
// // pathCtrl parameter
var menu_path_1 = "",
    menu_path_2 = "",
    menu_path_3 = "",
    nav_target = "";
var localPathArr = {
    "nav_target": nav_target,
    "menu_path_1": menu_path_1,
    "menu_path_2": menu_path_2,
    "menu_path_3": menu_path_3
}
// leftmenu 控制 active and 存麵包屑
function leftMenuCtrl(localPathArr) {
    var path1 = localPathArr.menu_path_1,
        path2 = localPathArr.menu_path_2,
        path3 = localPathArr.menu_path_3;
    // path2 add active
    if (path2) {
        $("#left_menu_list").find("li.mainmenu_item").each(function (i, e) {
            if ($(e).attr("title") == path2) {
                $(e).siblings('li').removeClass('active');
                $(e).addClass("active");
            }
        });
    }
    // path3 add active
    if (path3) {
        $("#left_menu_list").find("li.mainmenu_item").find("li.submenu_item").each(function (i, e) {
            if ($(e).attr("title") == path3) {
                $(e).siblings('li').removeClass('active');
                $(e).addClass("active");
            }
        });
    }
    $("#left_menu_list").find("li").on("click", function (e) {
        localPathArr.menu_path_1 = $(".left_menu_title").find("h2").html();
        var is_submenu = $(this).hasClass("submenu_item");
        var has_submenu = $(this).children("ul.submenu").length;
        if (!has_submenu) {
            // no submenu
            if (!is_submenu) {
                // not submenu item
                localPathArr.menu_path_2 = $(this).attr("title");
                localPathArr.menu_path_3 = null;
                $(this).addClass("active")
                $(this).siblings('li').removeClass('active');
                // pathCtrl();
            } else {
                // submenu item
                localPathArr.menu_path_2 = $(this).parents("li.mainmenu_item").attr("title");
                localPathArr.menu_path_3 = $(this).attr("title");
                $(this).addClass('active');
                $(this).siblings('li.submenu_item').removeClass('active');
                $(this).parents("li.mainmenu_item").addClass("active");
                $(this).parents("li.mainmenu_item").siblings("li.mainmenu_item").removeClass("active");
                // pathCtrl();
                return false;
            }
        } else {
            // has submenu
            if ($(this).hasClass("open")) {
                $(this).removeClass("open").addClass("closed");
                $(this).removeClass("active");
            } else if ($(this).hasClass("closed")) {
                $(this).removeClass("closed").addClass("open");
                $(this).siblings('li').removeClass('active');
                $(this).toggleClass('active');
            }
            // pathCtrl();
        }
    });
}
// 取麵包屑
// function // pathCtrl() {
//     var path_1 = localPathArr.menu_path_1,
//         path_2 = localPathArr.menu_path_2,
//         path_3 = localPathArr.menu_path_3;
//     $(".path_1.JQ").html(path_1);
//     $(".main_content_title.JQ").html(path_1);
//     if (path_1 == path_2) {
//         $(".path_2_angle.JQ").hide();
//         $(".path_2.JQ").hide();
//         $(".path_3_angle.JQ").hide();
//         $(".path_3.JQ").hide();
//     }
//     if (path_3) {
//         $(".main_content_title.JQ").html(path_3);
//         $(".path_3.JQ").html(path_3);
//         $(".path_3_angle.JQ").show();
//         $(".path_2.JQ").html(path_2);
//     } else if (!path_3 && path_2) {
//         $(".main_content_title.JQ").html(path_2);
//         $(".path_2.JQ").html(path_2);
//         $(".path_3_angle.JQ").hide();
//         $(".path_3.JQ").hide();
//     }
// }
function goBack() {
    window.history.back();
}
function goTop() {
    $('html, body').animate({
        scrollTop: 0
    }, 'slow');
}
// datepicker
// $(document).ready(function () {
//     $("input.datepicker").datepicker({
//         format: 'yyyy/mm/dd',
//         language: 'zh-TW'
//     });
// });

function fit() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        // window.location.href= "手機網址";
        console.log(123);
    } else {
        // 如果是 cilck按下
        var oCilck = false;
        // 無障礙JS開始
        // 主選單無障礙
        // 第一層
        $(".navbar-nav").find("a.nav-link").keyup(function (event) {
            // console.log("滑鼠按下");
            $(".dropdown").removeClass("open");
            $(this).parent().addClass("open");
        })
        //第二層
        // 獲得焦點
        $(".dropdown-submenu").find('a').focus(function () {
            // $(this)..css("display","none");
            $(this).next(".dropdown-menu").css("display", "block");
        });
        // 離開焦點
        $(".dropdown-submenu").find("li:last-child a").blur(function () {
            $(this).parent().parent().css("display", "none");
            //   $(this).parents(".dropdown").addClass("open");
        });

        // 離開節點最後一個li a
        $(".navbar-nav>li:last-child").find(".dropdown-menu>li:last-child").find("a").blur(function () {
            $(".navbar-nav").find("li").removeClass("open");
        })
    }
}


$(window).resize(function () {
    fit();
});

fit();


//主選單無障礙離開


//搜尋下拉選單獲取焦點後
$(".JQpopular_search_a").on("focus", function () {
    if (!$(this).parent().hasClass('open')) {
        // console.log(123131);
        $(this).parent().addClass("open");
    }
});

$('.JQpopular_search').find("li:last-child a").blur(function () {
    $(this).parent().parent().parent().removeClass("open");
});
$("body").on("click", function () {
    $('.JQpopular_search').removeClass('open');
});

//搜尋下拉選單獲取焦點後
// 訊息公告
// console.log(21312323212);
// 無障礙JS結束
// f_index end
// s_index start
// s_index end
$(document).ready(function () {
    // console.log(123);
    /////////////////////object fit
    if (document.documentElement.style.objectFit == undefined) {
        //如果瀏覽器不支援 object-fit的話執行這邊
        $('.has-objectfit').each(function () {
            var $container = $(this);
            var imgCover = $container.find('img.fit-cover').prop('src');
            setBackgroundImg($container, imgCover, 'no-fit-cover');
            // var imgContain = $container.find('img.fit-contain').prop('src');	　　　　
            // setBackgroundImg($container,imgContain,'no-fit-contain');		　　
        });
    }
    // 核心處理的函式	
    function setBackgroundImg($container, $imgUrl, $class) {
        if ($imgUrl && $imgUrl.length > 0) {
            $container.css('backgroundImage', 'url(' + $imgUrl + ')').addClass($class);;
        }
    }

    var oTimer = setTimeout(function () {
        $(".Commonly_Used_div").removeAttr("tabindex");
    }, 500)


})





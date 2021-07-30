$(function() {
    var id_name;
    var openNum;
    var initMenu = 1;

    if (initMenu == 1) {
        initMenu++;
        $(".mainmenu>li").on('mouseover', function() {
            var targetMenuId = $(this).attr("id");
            $('.bg-submenu').css('height', '260px');
            $('.bg-submenu-holder').css('height', '260px');
            if (targetMenuId == "menu5") {
                $('.bg-submenu').css('height', '210px');
                $('.bg-submenu-holder').css('height', '210px');
            } else if (targetMenuId == "menu1" || targetMenuId == "menu2" || targetMenuId == "menu3") {
                $('.bg-submenu').css('height', '160px');
                $('.bg-submenu-holder').css('height', '160px');
            }
            var class_name = $(this).attr('class');
            var class_num = class_name.substr(5, 6);
            openNum = class_num;

            $(".mainmenu>li").each(function(i) {
                $(".mainmenu>li.menu-" + (i + 1)).find('a').removeClass('on');
                $("#sub-" + (i + 1)).hide();
                $(".mainmenu>li.menu-" + openNum).find('a').addClass('on');
                $("#sub-" + openNum).show();
            });
        });
    }
    $("#gnbmenu").hover(
        function() {

            $('.bg-submenu').stop(true, true).slideDown(0, function() {
                $('.bg-submenu-holder').show();


                $(".submenu").on('mouseover', function() {
                    id_name = $(this).attr('id');
                    var id_num = id_name.substr(4, 5)

                    $(".mainmenu>li").each(function(i) {
                        if (id_num == i) {
                            $(".mainmenu>li.menu-" + openNum).find('a').addClass('on');
                        } else {
                            $(".mainmenu>li.menu-" + i).find('a').removeClass('on');
                        }
                    });
                });


                $(".bg-submenu-holder").on('mouseover', function() {
                    $(".mainmenu>li").each(function(i) {
                        if (openNum == i) {
                            $(".mainmenu>li.menu-" + openNum).find('a').addClass('on');
                        } else {
                            $(".mainmenu>li.menu-" + i).find('a').removeClass('on');
                        }
                    });
                });
            });
        },
        function() {
            $('.bg-submenu').stop(true, true).slideUp(0, function() {
                $('.bg-submenu-holder').hide();
                $(".mainmenu>li").each(function(i) {
                    $(".mainmenu>li.menu-" + (i + 1)).find('a').removeClass('on');

                    $("#sub-" + (i + 1)).hide();
                });
            });
        }
    );
});


//Lang

$(document).ready(function() {
    $('.iot-lang-selected').on('click', function(e) {
        $(this).addClass('on');
        $('.iot-lang').addClass('on');
        //Protect loop
        e.stopPropagation();
        return false;
    });

    $('.iot-lang a').on('click', function() {
        var textVal = $(this).text();
        $(".iot-lang-selected").text(textVal);
        $('.iot-lang').removeClass('on');
        $('.iot-lang-selected').removeClass('on');
    });

    $(document).click(function() {
        var container = $(".iot-lang");
        if (!container.is(event.target) &&
            !container.has(event.target).length) {
            container.removeClass('on');
            $('.iot-lang-selected').removeClass('on');
        }
    });
    if ($(document).hasClass('single-item')) {
        $('.single-item').slick({
            autoplay: true,
            autoplaySpeed: 5000,
        });
    }

});
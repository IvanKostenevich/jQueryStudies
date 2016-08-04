//Task #1(Sorting Select)


(function ($) {

    $.fn.sortByValue = function () {
        var $options = this.children();
        var $sortedByValue = $options.sort(function (a, b) {
            var a1 = a.getAttribute('value');
            var b1 = b.getAttribute('value');
            if (a1 < b1) {
                return -1;
            } else if (a1 > b1) {
                return 1;
            } else {
                return 0;
            }
        });

        return this.empty().append($sortedByValue);
    };
})(jQuery);


(function ($) {
    $.fn.sortByText = function () {
        var $options = this.children();
        var $sortedByText = $options.sort(function (a, b) {
            var a1 = $(a).text();
            var b1 = $(b).text();
            if (a1 < b1) {
                return -1;
            } else if (a1 > b1) {
                return 1;
            } else {
                return 0;
            }
        });

        return this.empty().append($sortedByText);

    };

})(jQuery);

$.fn.reverse = [].reverse;

(function ($) {
    $.fn.sortByDirection = function () {
        var $sortedByDirection = this.children().reverse();
        return this.empty().append($sortedByDirection);

    };
})(jQuery);

(function ($) {
    $.fn.sortByTypeString = function () {
        var $options = this.children();
        var $sortedByTypeString = $options.sort(function (a, b) {
            var a1 = $.isNumeric($(a).text());
            var b1 = $.isNumeric($(b).text());
            if (a1 < b1) {
                return -1;
            } else if (a1 > b1) {
                return 1;
            } else {
                return 0;
            }
        });

        return this.empty().append($sortedByTypeString);

    };
})(jQuery);


(function ($) {
    $.fn.sortByTypeNumber = function () {
        var $options = this.children();
        var $sortedByTypeNumber = $options.sort(function (a, b) {
            var a1 = $.isNumeric($(a).text());
            var b1 = $.isNumeric($(b).text());
            if (a1 < b1) {
                return 1;
            } else if (a1 > b1) {
                return -1;
            } else {
                return 0;
            }
        });

        return this.empty().append($sortedByTypeNumber);

    };
})(jQuery);


//Task #8(Blocking Interface)


(function ($) {
    $.fn.blockInterface = function () {
        setTimeout(function () {
            $('body').append('<div class="overlay"/>');
            $('body').append('<div class="blocking-inf">Interface Blocked!</div>');

        }, 2000);

    };
})(jQuery);


//Task #3(Tab Control)

(function ($) {
    $.fn.tabControl = function () {


        this.find('ul').on('click', 'li', function () {
            var selectedTabAnchor = $(this).children('a').attr('href');
            var $tabSelected = $(selectedTabAnchor);
            $tabSelected.siblings().hide();
            $tabSelected.show();
            $(this).siblings().css({'border-bottom': '1px solid black'});
            $(this).css({'border-bottom': '1px solid white'});

        });


    };
})(jQuery);


$('.my-tabs').tabControl();


//Task #4(Notifications)

(function ($) {
    $.fn.notificationPlugin = function () {

        this.find('button').on('click', function () {
            $(this).siblings('p').show('slow').delay(3000).hide('slow');
        });

    };
})(jQuery);
$('.notification').notificationPlugin();


//Task #5(Navigate table with arrow-keys)

(function ($) {

$.fn.navigateArrows = function () {
    $('input').keydown(
        function (e) {
            if (e.keyCode == 39) {
                $( document.activeElement ).parent().next().children().focus();
            }
            if (e.keyCode == 37) {
                $( document.activeElement ).parent().prev().children().focus();
            }
        }
    );

}
})(jQuery);


$('table').navigateArrows();






























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
    $('body').append('<div class="overlay"/>');
    $('.overlay').css({
        'position': 'fixed',
        'top': '0',
        'left': '0',
        'height': '100%',
        'width': '100%',
        'background-color': 'rgba(0,0,0,0.5)',
        'z-index': '2'

    });
    $('body').append('<div class="module">Interface Blocked!</div>');
    $('.module').css({
        'width': '300px',
        'height': '200px',
        'line-height': '200px',
        'position': 'fixed',
        'top': '50%',
        'left': '50%',
        'margin-top': '-100px',
        'margin-left': '-150px',
        'background-color': 'white',
        'text-align': 'center',
        'z-index': '3'
    });
};
})(jQuery);



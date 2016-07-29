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



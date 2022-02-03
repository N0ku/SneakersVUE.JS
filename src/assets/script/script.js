$(window).scroll({
        previousTop: 0
    },
    function () {
        var currentTop = $(window).scrollTop();
        if (currentTop < this.previousTop) {
            $("header").fadeIn();
        } else {
            $("header").fadeOut();
        }
        this.previousTop = currentTop;
    });
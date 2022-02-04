$(window).scroll({
        previousTop: 0
    },
    function () {
        var scrollY = window.scrollY;
        if (scrollY > 100) {
            $("header").css("position", "fixed");
            var currentTop = $(window).scrollTop();
            if (currentTop < this.previousTop) {
                $("header").fadeIn();
            } else {
                $("header").hide();
            }
            this.previousTop = currentTop;
        } else {
            $("header").css("position", "absolute");
        }
    });

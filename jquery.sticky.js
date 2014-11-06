/*
Name: Jquery Sticky Elements
Author: Md. Ashraful Abedein Jonak
 var topps = window.pageYOffset + options.topSpacing;
*/
(function ($) {

    $.fn.sticky = function (options) {
        var ele = this;

            var offs = 0;


        var skrl = function (){
            if (ele.length) {
                var scrollPosition = $(document).scrollTop();

                // Once the user has started scrolling, show the short header
                if(offs == 0){ offs = ele.offset().top; }
                if (scrollPosition > offs) {
                    ele.css({
                        position:"fixed",
                        top:options.topSpacing + "px",
                        "z-index":"9999",
                        "-webkit-overflow-scrolling":"touch"
                    });
                    ele.addClass('short');

                } else {
                    ele.css({
                        position:"",
                        top:"",
                        "z-index":""
                    });
                    ele.removeClass('short');
                }
            }
        }
        $(window).scroll(skrl);

    }; //main fnc

})(jQuery);

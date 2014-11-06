/*
Name: Jquery More Less Elements 
Author: Md. Ashraful Abedein Jonak
*/
(function ($) {

    $.fn.moreless = function (options) {
        
        var ele = this;

        //var skrl = function (){
            if (ele.length) {
                jQuery(ele).each(function(){
                    var ol = this;
                    var mr = jQuery('li:gt(4)', this).length;
                    var me = jQuery('.show-links', this).length;
                    
                    if(mr && !me){
                        jQuery('li:gt(4)', this).hide();

                        jQuery(this).append('<li class="show-links show-more"> More</li>');
                        jQuery(this).append('<li class="show-links show-less"> Less</li>');
                        jQuery('.show-less',this).hide();

                        jQuery('.show-more', this).bind('click', function(){
                            jQuery('li:gt(4)', ol).show();
                            jQuery('.show-more', ol).hide();
                            jQuery('.show-less', ol).show();
                        });

                        jQuery('.show-less', this).bind('click', function(){
                            jQuery('li:gt(4)', ol).hide();
                            jQuery('.show-more', ol).show();
                            jQuery('.show-less', ol).hide();
                        });
                    }

                });
            }
        //}
       
    }; //main fnc

})(jQuery);

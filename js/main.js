 (function($, window, document) {

   $(function() {

        $(".header").click(function() {
            $(this).closest('div').next('.content').slideToggle();
            $(this).children("span").toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
        });

        $(".header h4, .header span, .header img").mouseover(function() {
            console.log("hit");
        });

   });

}(window.jQuery, window, document));

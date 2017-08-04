 (function($, window, document) {

   $(function() {

        $(".header").click(function() {
            $(this).closest('div').next('.content').slideToggle();
            $(this).children("span").toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
        });

   });

}(window.jQuery, window, document));

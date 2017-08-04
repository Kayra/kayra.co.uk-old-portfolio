 (function($, window, document) {

   $(function() {

        $(".header").click(function() {
            $(this).closest('div').next('.content').slideToggle();
            // console.log($(this).children("span.glyphicon.glyphicon-chevron-down.right"));
            $(this).children("span").toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
        });

   });

   // The rest of the code goes here!

}(window.jQuery, window, document));

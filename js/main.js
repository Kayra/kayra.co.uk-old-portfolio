 (function($, window, document) {

   $(function() {

        $(".header").click(function() {
            $(this).closest('div').next('.content').toggle();
        });

   });

   // The rest of the code goes here!

}(window.jQuery, window, document));

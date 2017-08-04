 (function($, window, document) {

   $(function() {

        $(".header").click(function() {
            $(this).closest('div').next('.content').slideToggle();
            $(this).children("span").toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
        });

        $(".header h4, .header span, .header img").mouseover(function() {

            var header = $(this).parent().siblings().find('h4');
            var span = $(this).parent().siblings().find('span');
            var img = $(this).parent().siblings().find('img');

        });

   });

}(window.jQuery, window, document));

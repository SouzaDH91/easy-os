(function($) {
    $(document).ready(function() {
       // get current URL path and assign 'active' class
       var pathname = window.location.pathname;
       $('#leftsidebar .menu .list > li > .ml-menu > li a[href="'+pathname+'"]').parent().addClass('active');
   });
 })(jQuery);
(function ($) {
    'use strict';

    var browserWindow = $(window);

    
    $('.single-accordion a').click(function(e) {
        e.preventDefault();
    
      var $this = $(this);
      var $content = $this.parent().parent().find('.accordion-content');

    
      if ($content.hasClass('show')) {
        $content.removeClass('show');
        $content.slideUp(350);
      } else {
          let $allContents  = $this.parent().parent().parent().find('.accordion-content');

          $allContents.removeClass('show').slideUp(350);
          $content.toggleClass('show');
          $content.slideToggle(350);
      }
  });


    $(".sliding-link").click(function(e) {
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
    });

    // :: 1.0 Preloader Active Code
    browserWindow.on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: 2.0 Nav Active Code
    if ($.fn.classyNav) {
        $('#musicaNav').classyNav();
    }


    // :: 4.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        browserWindow.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i>'
        });
    }




    // :: 8.0 audioPlayer Active Code
    if ($.fn.audioPlayer) {
        $('audio').audioPlayer();
    }



    $(function () {
        // Get the form.
        var form = $('#contact-form');

        // Get the messages div.
        var formMessages = $('#form-messages');

        $(form).submit(function (event) {
            // Stop the browser from submitting the form.
            event.preventDefault();

            // Serialize the form data.
            var formData = $(form).serialize();

            // Submit the form using AJAX.
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function(response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');
            
                // Set the message text.
                $(formMessages).text(response);
            
                // Clear the form.
                $('#name').val('');
                $('#email').val('');
                $('#subject').val('');
                $('#message').val('');
            })
            .fail(function(data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');
            
                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
        });
    });

})(jQuery);
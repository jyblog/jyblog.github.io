(function ($) {
  // Caption
  $('.article-entry').each(function (i) {
    $(this).find('img').each(function () {
      if ($(this).parent().hasClass('fancybox')) return

      var alt = this.alt

      if (alt) {
        $(this).after('<span class="caption">' + alt + '</span>')
      }

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>')
    })

    $(this).find('.fancybox').each(function () {
      $(this).attr('rel', 'article' + i)
    })
  })

  if ($.fancybox) {
    $('.fancybox').fancybox()
  }


  $(document).ready(function() {
	  var QRBox	=	$('#QRBox');
	  var MainBox	=	$('.MainBox');
	  var BTCQR	=	$('#BTCQR');
	  var AliPayQR	=	$('#AliPayQR');
	  var WeChatQR	=	$('#WeChatQR');
    var currentQR;

    $('#menu').click(function (event) {
      var nav = $('#main-nav');
      nav.toggle('fast');
    });

    $(window).resize(function () {
      var viewportWidth = $(window).width();
      if (viewportWidth > 468) {
        $('#main-nav').show('fast');
      } else {
        $('#main-nav').hide('fast');
      }
    });
  });
})(jQuery)

$(document).ready(function() {
  wrapImageWithFancyBox();
});


/**
* Wrap images with fancybox support.
*/
function wrapImageWithFancyBox() {
  $('img').not('.logo').each(function() {

      var $image = $(this);
      var imageCaption = $image.attr('alt');
      var $imageWrapLink = $image.parent('a');

      if ($imageWrapLink.size() < 1) {
         var src = this.getAttribute('src');
          var idx = src.lastIndexOf('?');
          if (idx != -1) {
              src = src.substring(0, idx);
          }
          $imageWrapLink = $image.wrap('<a href="' + src + '"></a>').parent('a');
      }

      $imageWrapLink.attr('data-fancybox', 'images');
      if (imageCaption) {
          $imageWrapLink.attr('data-caption', imageCaption);
      }
  });
}
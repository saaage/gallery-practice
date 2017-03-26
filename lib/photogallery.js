// store photoswipe module in 'PhotoSwipe'
let PhotoSwipe = require('photoswipe');

// store photoswipe user interface in 'PhotoSwipeUI_Default'
let PhotoSwipeUI_Default = require('../node_modules/photoswipe/dist/photoswipe-ui-default.js');

let openPhotoSwipe;

module.exports = {

   openPhotoSwipe: function() {

    var pswpElement = document.querySelectorAll('.pswp')[0];

      // build items array. items holds objects - can be photos or even custom html
      var items = [
          {
              src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
              w: 964,
              h: 1024
          },
          {
              src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
              w: 1024,
              h: 683
          }
      ];

      // define options (if needed)
      var options = {
               // history & focus options are disabled on CodePen
          history: false,
          focus: false,

          showAnimationDuration: 0,
          hideAnimationDuration: 0

      };


      // create a new photoSwipe object named gallery. gallery utilizes items with class .pswpElement, the default UI, our items array, and our options object
      var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);

      // call init
      return gallery.init();
  }

}

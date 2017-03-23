// photoswipe package has 2 modules. first can be called by name, second needs to be called with local path
require(['photoswipe','../node_modules/photoswipe/dist/photoswipe-ui-default'], function( PhotoSwipe, PhotoSwipeUI_Default ) {

      var openPhotoSwipe = () => {
      // switched to arrow function
          var pswpElement = document.querySelectorAll('.pswp')[0];

          // build items array
          var items = [
              {
                  html: '<h1>HELLO</h1>'
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
              closeOnScroll: false,
              modal: false,

              showAnimationDuration: 0,
              hideAnimationDuration: 0

          };

          var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
          gallery.init();
      };

      document.querySelector('.showcase__button--photoswipe').onclick = openPhotoSwipe;
});

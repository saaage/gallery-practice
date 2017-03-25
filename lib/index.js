// photoswipe package has 2 modules. first can be called by name, second needs to be called with local path
let PhotoSwipe = require('photoswipe');
let PhotoSwipeUI_Default = require('../node_modules/photoswipe/dist/photoswipe-ui-default.js');

// define a function openPhotoSwipe that uses exports of photoswipe and photoswipe-ui-default
var openPhotoSwipe = () => {
  var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
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


    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

function _init(){

  // run photoswipe at page load
  openPhotoSwipe();

  // add event listener to run photoswipe when photoswipe button is clicked
  document.querySelector('.showcase__button--photoswipe').onclick = openPhotoSwipe;

}

_init();

// Code below works. But I can not get photoswipe to work when I call openPhotoSwipe inside of init() as above

// require([
//         'photoswipe',
//         '../node_modules/photoswipe/dist/photoswipe-ui-default.js'
//     ], function( PhotoSwipe, PhotoSwipeUI_Default ) {
//
//   var openPhotoSwipe = function() {
//       var pswpElement = document.querySelectorAll('.pswp')[0];
//
//       // build items array
//       var items = [
//           {
//               src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
//               w: 964,
//               h: 1024
//           },
//           {
//               src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
//               w: 1024,
//               h: 683
//           }
//       ];
//
//       // define options (if needed)
//       var options = {
//                // history & focus options are disabled on CodePen
//           history: false,
//           focus: false,
//
//           showAnimationDuration: 0,
//           hideAnimationDuration: 0
//
//       };
//
//       var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
//       gallery.init();
// };
//     openPhotoSwipe();
//     // document.getElementById('btn').onclick = openPhotoSwipe;
// });

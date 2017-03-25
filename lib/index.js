// photoswipe package has 2 modules. first can be called by name, second needs to be called with local path

let PhotoSwipe = require('photoswipe');
let PhotoSwipeUI_Default = require('../node_modules/photoswipe/dist/photoswipe-ui-default.js');

var openPhotoSwipe = () => {
// switched to arrow function
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            html: '<h1>HELLOS</h1>'
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
  document.querySelector('.showcase__button--photoswipe').onclick = openPhotoSwipe;
}

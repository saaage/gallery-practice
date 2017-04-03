// store photoswipe module in 'PhotoSwipe'
let PhotoSwipe = require('photoswipe');

// store photoswipe user interface in 'PhotoSwipeUI_Default'
let PhotoSwipeUI_Default = require('../node_modules/photoswipe/dist/photoswipe-ui-default.js');

// slides are built using itembuilder.js and exported here
let slides = require('./itemsbuilder');

let openPhotoSwipe;

// items should pull aray from slidecreator
let items = [];

module.exports = {

  items: slides,

  openPhotoSwipe: function() {

    var pswpElement = document.querySelectorAll('.pswp')[0];


    // define options (if needed)
    var options = {
    // history & focus options are disabled on CodePen
    history: false,
    focus: false,

    showAnimationDuration: 0,
    hideAnimationDuration: 0

    };


    // create a new photoSwipe object named gallery. gallery utilizes items with class .pswpElement, the default UI, our items array, and our options object
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, this.items, options);

    // call init
    return gallery.init();

  }

}

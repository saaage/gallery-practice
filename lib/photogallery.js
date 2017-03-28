// store photoswipe module in 'PhotoSwipe'
let PhotoSwipe = require('photoswipe');

// store photoswipe user interface in 'PhotoSwipeUI_Default'
let PhotoSwipeUI_Default = require('../node_modules/photoswipe/dist/photoswipe-ui-default.js');

let openPhotoSwipe;

let items = [];


// This holds my custom html to be used in items
var myvar = '<div class="slide">'+
'      <img class= "slide__photo" src=\'http://static1.gamespot.com/uploads/original/1544/15443861/2973731-9226858081-20150.jpg\' alt="">'+
'      <div class="slide__chat">'+
'        <p class="slide__chat--text">Obsidian911: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!</p>'+
'        <p class="slide__chat--text">JLSlice: What a Save!</p>'+
'        <div class="slide__chat--addcomment">'+
'          <form class="addcomment__form" action="index.html" method="post">'+
'            <input type="text" class="addcomment__form--field" name="addcomment" value="Write comment here...">'+
'          </form>'+
'        </div>'+
'      </div>'+
'    </div>';

module.exports = {

  items: [
    {
      src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
      w: 964,
      h: 1024,

      // testing to see if photoswipe does anything with 'comment' or 'comments' property - nope
      comment: {
        userA: 'Obsidian911',
        userAmsg: 'LOLz'
      },

      // titles are displayed at the bottom of each picture
      title: 'This will be displayed'
    },
    {
      src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
      w: 1024,
      h: 683
    },
    {
      html: myvar,
      h: 683,
      w: 1024
    }
  ],

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

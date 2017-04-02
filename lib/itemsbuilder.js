// slidecreator should accept an image, attach a chat log, export as an array

let PhotoGallery = require('./photogallery.js');

let borat = 'Great Success!';

let url = 'http://static1.gamespot.com/uploads/original/1544/15443861/2973731-9226858081-20150.jpg'

let htmlTemplate = `<div class="slide">
      <img class="slide__photo" src=\"${url}"\>
      <div class="slide__chat">
        <p class="slide__chat--text">${borat}<p>
        <div class="slide__chat--addcomment">
          <form class="addcomment__form" action="index.html" method="post">
            <input type="text" class="addcomment__form--field" name="addcomment" placeholder="Write comment here...">
          </form>
        </div>
      </div>
    </div>`;

let items = [
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
    html: htmlTemplate,
    h: 683,
    w: 1024
  }
];

module.exports = items;

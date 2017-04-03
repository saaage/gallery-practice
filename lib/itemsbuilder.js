// slidecreator should accept an image, attach a chat log, export as an array
// let log = require('./chatlogs');
let PhotoGallery = require('./photogallery.js');
let pics = require('./photos')

function findPhotoObject(element) {
  return element.id === 'abc';
}

url = pics.photos.find(findPhotoObject).src;

let slide1 = `<div class="slide">
      <img class="slide__photo" src=\"${url}"\>
      <div class="slide__chat">
        <p class="slide__chat--text">YO<p>
        <div class="slide__chat--addcomment">
          <form class="addcomment__form" action="index.html" method="post">
            <input type="text" class="addcomment__form--field" name="addcomment" placeholder="Write comment here...">
          </form>
        </div>
      </div>
    </div>`;

let slide2 = `<div class="slide">
      <img class="slide__photo" src=\"${url}"\>
      <div class="slide__chat">
        <p class="slide__chat--text">Hello!<p>
        <div class="slide__chat--addcomment">
          <form class="addcomment__form" action="index.html" method="post">
            <input type="text" class="addcomment__form--field" name="addcomment" placeholder="Write comment here...">
          </form>
        </div>
      </div>
    </div>`;

// items is an array of objects. each object has one property named html that has a html string as a value
let items = [
  {
    html: slide1
  },
  {
    html: slide2
  }
];

module.exports = items;

// itemsbuilder will combine an image object with a chat object, and create an html string using both

let log = require('./chatlogs');
let PhotoGallery = require('./photogallery.js');
let pics = require('./photos')

let items = [];

// url = pics.photos.find(findPhotoObject).src;

// for each photo, create an html string that utilizes the id for that photo and it's corresponding chat log
for(ctr = 0; ctr< pics.photos.length; ctr++) {

  function findChatObject(element) {
    return element.id === pics.photos[ctr].id;
  }

  let conversationIndex = log.chats.findIndex(findChatObject);

  let htmlString = `<div class="slide">
        <img class="slide__photo" src=\"${pics.photos[ctr].src}"\>
        <div class="slide__chat">
          <p class="slide__chat--text">${log.returnComments(conversationIndex)}<p>
          <div class="slide__chat--addcomment">
            <form class="addcomment__form" action="index.html" method="post">
              <input type="text" class="addcomment__form--field" name="addcomment" placeholder="Write comment here...">
            </form>
          </div>
        </div>
      </div>`;

  let newObject = {
    html: htmlString
  };

  items.push(newObject);

}

module.exports = items;

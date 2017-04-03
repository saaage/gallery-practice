// itemsbuilder will combine an image object with a chat object into an html string and push into items array

let Conversation = require('./chatlogs');
let PhotoGallery = require('./photogallery');
let Pics = require('./photos')

module.exports = {

  // 'addSlide' will create an html string that utilizes the id for a photo and it's corresponding Conversation
  addSlide: function() {

      function findChatObject(element) {
        return element.id === Pics.photos[Pics.photos.length-1].id;
      }

      let conversationIndex = Conversation.chats.findIndex(findChatObject);

      let htmlString = `<div class="slide">
            <img class="slide__photo" src=\"${Pics.photos[Pics.photos.length-1].src}"\>
            <div class="slide__chat">
              <p class="slide__chat--text">${Conversation.returnComments(conversationIndex)}<p>
              <div class="slide__chat--addcomment">
                <form class="addcomment__form" action="index.html" method="post">
                  <input type="text" class="addcomment__form--field" name="addcomment" placeholder="Write comment here...">
                </form>
              </div>
            </div>
          </div>`;

      let newSlide = {
        html: htmlString
      };

      PhotoGallery.items.push(newSlide);
  }
}

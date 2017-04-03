// 'addphoto' will push an object into photos array as well as create a chat object with matching ID

let Conversation = require('./chatlogs');
let Pics = require('./photos');
let Slides = require('./itemsbuilder');

module.exports = {

  addNewPhoto: function(objectToPush) {
    Pics.photos.push(objectToPush);
    Conversation.chats.push({
      id: objectToPush.id,
      comments: ['MrFirstGuy: First!', 'MrSecondGuy: Shoot...']
    });
    Slides.addSlide();
  },

  // checkForm accepts an array of input elements and checks their validity
  checkForm: function(elementsArray) {
    let result= true;

    for(ctr=0; ctr < elementsArray.length; ctr++){
      if (!(elementsArray[ctr].checkValidity())){
        result = false;
      }
    }

    return result;
  }
}

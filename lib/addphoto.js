// add photo should push an object items array as well as create a chat object with a matching ID

// let slides = require('./itemsbuilder');
let conversation = require('./chatlogs');
let pics = require('./photos');


module.exports = {

  addNewPhoto: function(objectToPush) {
    pics.photos.push(objectToPush);
    conversation.chats.push({id: objectToPush.id});
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

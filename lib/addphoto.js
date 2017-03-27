// // TDD adding photos to 'items' in photogallery.js

let PhotoGallery = require('./photogallery');

module.exports = {

  addNewPhoto: function(objectToPush) {
    PhotoGallery.items.push(objectToPush);
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

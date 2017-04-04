let PhotoGallery = require('./photogallery');
let AddPhoto = require('./addphoto');
let Thumbs = require('./thumbnails');

document.addEventListener("DOMContentLoaded", function() {

  let newPhotoButton = document.querySelector('.showcase__addnewphoto');

  let uploadForm = document.querySelector('.upload');

  let saveButton = document.querySelector('.upload__form--submit');

  let thumbnails = document.querySelector('.showcase__photos');

  // Store elements that have class .showcase__photoswipe--initiator into an array
  let photoSwipeInitiators = document.querySelectorAll('.showcase__photoswipe--initiator');

  // ID will be used to assign an id to each photo/conversation that is pushed into items array
  let ID = function() {
    return '_' + Math.random().toString(36).substr(2,9);
  }

  // Use a for loop to add event listeners to each item in photoSwipeInitiators
  let addListeners = function() {
      for(ctr = 0; ctr < photoSwipeInitiators.length; ctr++) {
      photoSwipeInitiators[ctr].addEventListener("click", function() {
        PhotoGallery.openPhotoSwipe();
      });
      }
  }

  addListeners();

  newPhotoButton.addEventListener('click', function() {
    uploadForm.classList.toggle('upload--hidden');
  });

  // when save button is clicked, use AddPhoto to check form values and add new photo
  saveButton.addEventListener("click", function() {

    let newPhoto;

    // store inputfields
    let title = uploadform.elements["title"].value;
    let url = uploadform.elements["url"].value;
    let descript = uploadform.elements["description"].value;

    // create an array to hold all required fields. array will be iterated over, checking validity of each one
    let requiredInputFields = [];

    // if a field is type text or URL, push it into requiredInputFields
    for(ctr=0; ctr<uploadform.elements.length; ctr++){
      if(uploadform.elements[ctr].type == 'text' || uploadform.elements[ctr].type == 'url'){
        requiredInputFields.push(uploadform.elements[ctr]);
      }
    }

    // if all fields are valid, create a new object to be pushed into photos
    if(AddPhoto.checkForm(requiredInputFields)){

      newPhoto = {
        title: title,
        src: url,
        description: descript,
        id: ID()
      };

      AddPhoto.addNewPhoto(newPhoto);
      alert('Your photo has been added');
      thumbnails.insertAdjacentHTML('beforeend', Thumbs.addPhoto());
      uploadform.reset();

    } else {
      alert('Please try again!');
    }

  });

});

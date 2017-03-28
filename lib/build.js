let PhotoGallery = require('./photogallery');
let AddPhoto = require('./addphoto');

document.addEventListener("DOMContentLoaded", function() {

  // Store elements with showcase__photoswipe--initiator into an array
  let photoSwipeInitiators = document.querySelectorAll('.showcase__photoswipe--initiator');

  // use a for loop to add event listeners to each item in photoSwipeInitiators
  for(ctr = 0; ctr < photoSwipeInitiators.length; ctr++) {
    photoSwipeInitiators[ctr].addEventListener("click", function() {
      PhotoGallery.openPhotoSwipe();
    });
  }

  let newPhotoButton = document.querySelector('.showcase__addnewphoto');

  let uploadForm = document.querySelector('.upload');

  newPhotoButton.addEventListener('click', function() {
    uploadForm.classList.toggle('upload--hidden');
  })

  let saveButton = document.querySelector('.upload__form--submit');
  // when save button is clicked, use AddPhoto to check form values and add new photo
  saveButton.addEventListener("click", function() {

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

    let newPhoto;

    // if all fields are valid, create a new object to be pushed into items
    if(AddPhoto.checkForm(requiredInputFields)){

      newPhoto = {
        title: title,
        src: url,
        description: descript,
        h: 964,
        w: 1024
      };

      AddPhoto.addNewPhoto(newPhoto);
      alert('Your photo has been added');
      uploadform.reset();

    } else {
      alert('Please try again!');
    }

  })

});

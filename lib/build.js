let PhotoGallery = require('./photogallery');

document.addEventListener("DOMContentLoaded", function() {

  // Store elements with showcase__photoswipe--initiator into an array
  let photoSwipeInitiators = document.querySelectorAll('.showcase__photoswipe--initiator');

  // use a for loop to add event listeners to each item in photoSwipeInitiator
  for(ctr = 0; ctr < photoSwipeInitiators.length; ctr++) {
    photoSwipeInitiators[ctr].addEventListener("click", function() {
      PhotoGallery.openPhotoSwipe();
    });
  }

})

// photoswipe package has 2 modules. first can be called by name, second needs to be called with local path

let PhotoGallery = require('./photogallery');

document.addEventListener("DOMContentLoaded", function() {
  console.log('hello!');

  let photoSwipeInitiator = document.querySelectorAll('.showcase__photoswipe--initiator');
  // querySelector all returns an ARRAY of elements that contain the specified class. to use addEventListener we must iterate over the array or we will receive an error

  // use a for loop to add event listeners to each item in photoSwipeInitiator
  for(ctr = 0; ctr < photoSwipeInitiator.length; ctr++) {
    photoSwipeInitiator[ctr].addEventListener("click", function() {
      PhotoGallery.openPhotoSwipe();
    });
  }
})

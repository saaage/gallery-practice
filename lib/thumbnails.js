// thumbnails should display photos inline. each photo should launch photoswipe at it's correct index

let Photos = require('./photos');
let PhotoGallery = require('./photogallery');

module.exports = {
  //iterate over items and display each photo inline
  displayPhotos: function() {

    let htmlArray = [];

    let welcomeImage = `<img class="showcase__photoswipe--initiator" src=\"${PhotoGallery.items[0].src}"\ alt="">`;

    htmlArray.push(welcomeImage);

    // iterate over Photos.photos and push each source into htmlArray
    for(x=0; x<Photos.photos.length; x++){
      let nextImage = `<img class="showcase__photoswipe--initiator" src=\"${Photos.photos[x].src}"\ alt="">`;
      htmlArray.push[nextImage];
    }

    return htmlArray.join();

  }

}

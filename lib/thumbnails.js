// thumbnails should display photos inline. each photo should launch photoswipe at it's correct index

let Photos = require('./photos');

module.exports = {
  
  //iterate over items and display each photo inline
  addPhoto: function() {

    let newImage = `<img class="showcase__photoswipe--thumbs" src=\"${Photos.photos[Photos.photos.length-1].src}"\>`;

    return newImage;
  }

}

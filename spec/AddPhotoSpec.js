let AddPhoto = require('../lib/addphoto')
let Photos = require('../lib/photos');

let testObject = {
  description: 'This is a test object :)'
};

let testArray = [];

// addphoto accepts an object and pushes it into the 'items' array
describe("Add Photos should", ()=> {

  beforeEach(() =>{

    AddPhoto.addNewPhoto(testObject);

  });

  // evaluate the last index of PhotoGallery.items, it should be our testObject
  it("push an object into items array", function() {
    expect(Photos.photos[Photos.photos.length-1]).toBe(testObject);
  });

})

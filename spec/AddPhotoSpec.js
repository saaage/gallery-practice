let PhotoGallery = require('../lib/photogallery');
let AddPhoto = require('../lib/addphoto')

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
    expect(PhotoGallery.items[PhotoGallery.items.length-1]).toBe(testObject);
  });

})

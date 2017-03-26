let indexController = require('../lib/photogallery.js');

// Add photos suite
describe("Photo Gallery should", ()=> {

  // Mock document
  let document;

  // mock querySelector
  beforeEach(() =>{

    document = {
      querySelector: ()=>{}
    };

    //call _init from index.js so that specs will have access to 'document'
    indexController._init(document);

  });

  // specs for Add Photos
  it("prevent page from reloading");

  it("check for form validation errors");

  it("push to existing photo array");

})

// Comments suite
// describe("Comments page should");

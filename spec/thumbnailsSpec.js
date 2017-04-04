//thumbnails should return an html string

let Thumbs = require('../lib/thumbnails');

describe("Thumbnails should", ()=> {
  it("return an html string", ()=> {
    expect(typeof(Thumbs.addPhoto())).toBe('string');
  });
})

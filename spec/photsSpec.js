// photos should hold and export an array

let Photos = require('../lib/photos');

describe("Photos should", ()=> {
  it("hold an array", ()=> {
    expect(Object.prototype.toString.call(Photos.photos)).toBe('[object Array]');
  })
})

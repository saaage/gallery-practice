// chatlogs should hold an array object, and return a string

let Conversation = require('../lib/chatlogs');

describe("Chatlogs.js should", ()=>{

  beforeEach(()=>{
    Conversation.chats.push[{comments: "Hello!"}];
  })

  it("hold an array", ()=>{
    expect(Object.prototype.toString.call(Conversation.chats)).toBe('[object Array]');
  });

  it("should return a string when returnComments() is called", () => {
    expect(typeof(Conversation.returnComments(0))).toBe('string');
  })

})

// chats is an array of objects. each object is a conversation that belongs to a specific image

// for example, to access the conversation the belongs to the first photo in items, we would iterate over the array chats[0].comments
let chats;

module.exports = {

  chats: [
      {
        comments: [
          'Obsidian911: first comment!', 'JLSlice: second comment!', 'Hater: I dont like this photo :('
        ],
        id: '_fakedID'
      }
  ],

  // returnComments should return each comment inside of a conversation on a new line
  returnComments: function(index) {

    let exportArray = [];

    for (ctr=0; ctr < this.chats[index].comments.length; ctr++){
       exportArray.push(this.chats[index].comments[ctr]);
    }

    // reutrn array values, inserting 2 breaks between each one
    return exportArray.join('<br><br>');

  }
}
